import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../slices/user";
import { ToastContainer, toast } from "react-toastify";

import validation from "../components/validation/validation";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "../styles/auth/register.css";

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    repeatPass: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (valideForm()) {
      if (user.password === user.repeatPass) {
        dispatch(register(user));
        navigate("/profile");
      } else {
        toast.warn("Пароли не соответствуют");
      }
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
      <div className="reg_section">
        <div className="container">
          <div className="reg_wrapper">
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
              <h2>Registration</h2>
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
                <input
                  type="password"
                  name="password"
                  onChange={(e) =>
                    setUser({ ...user, repeatPass: e.target.value })
                  }
                  placeholder="Repeat password"
                />
                <button>Отправить</button>
              </form>
              <div className="not_authoration">
                <p>есть аккаунт ?</p>
                <button>
                  <a href="#">Login</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
