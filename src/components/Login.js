import { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';



export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState("true");

    const submit = async e => {
        e.preventDefault();

    const respon =  await axios.post('http://localhost:8080/api/login',  { email, password}, {withCredentials: true} ); 

      console.log(respon);
        setNavigate(true);
    };
    if (navigate) {
      return <Navigate to = "/login"/>
    }
    return (

        <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                  onChange={e => setEmail(e.target.value)}
            />
            {/* <label for="floatingInput">Email address</label> */}
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
            />
            {/* <label for="floatingPassword">Password</label> */}
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          
        </form>
      </main>
    );
};