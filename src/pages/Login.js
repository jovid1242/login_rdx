import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/user";
import { clearMessage } from "../slices/message";
import { ToastContainer, toast } from "react-toastify";
import validation from "../components/validation/validation";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../styles/auth/login.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (valideForm()) {
      dispatch(login(user))
        .unwrap()
        .then(() => {
          navigate("/profile");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  const valideForm = () => {
    const err = validation.formValidation(user);
    if (err.error) {
      toast.warn(err.message);
      return false;
    }
    return true;
  };

  return (
    <div>
      <ToastContainer />
      <div className="login_section">
        <div className="container">
          <div className="login_wrapper">
            <div className="box_info">
              <h2>Company Name</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                est ex et porro quod dolorem eligendi minus, quasi veritatis
                numquam praesentium quia, qui voluptatum nesciunt iusto. Atque
                voluptatem molestiae placeat!
              </p>
            </div>
            <div className="box_form">
              <h2>Login</h2>
              <form action="" className="form" onSubmit={handleLogin}>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  name="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Password"
                />
                <button>Send</button>
              </form>
              <div className="not_authoration">
                <p>Нет аккаунта ?</p>
                <button>
                  <a href="#">Registration</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
