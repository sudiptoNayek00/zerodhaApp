import React, { useState } from "react";
import "./Login.css";
import loginSchema from "../../Validations/LoginValidation";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await axios.post("http://localhost:5000/api/client/signin", values, {
          withCredentials: true,
        });
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "zerodha-dashboard-hazel.vercel.app";
        });
      } catch (err) {
        const backendMsg = err.response?.data?.message || "Unknown error";
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: backendMsg,
        });
      }
      setLoading(false);
    },
  });

  return (
    <div className="lp-root">
      <div className="lp-card">
        <h2 className="lp-title">Login to Zerodha</h2>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="lp-form-group">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth
              disabled={loading}
              autoFocus
            />
            {formik.touched.email && formik.errors.email && (
              <div className="lp-error">{formik.errors.email}</div>
            )}
          </div>
          <div className="lp-form-group">
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              disabled={loading}
              InputProps={{
                endAdornment: (
                  <span
                    onClick={() => setShowPassword((v) => !v)}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </span>
                ),
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="lp-error">{formik.errors.password}</div>
            )}
          </div>
          <button type="submit" className="lp-btn" disabled={loading}>
            {loading ? <CircularProgress size={22} color="inherit" /> : "Login"}
          </button>
        </form>
        <div className="lp-footer">
          <span>Not registered? </span>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
        <div className="lp-footer">
          <span>Forgot Password? </span>
          <Link to={"/forgot-password"}>Click Here</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
