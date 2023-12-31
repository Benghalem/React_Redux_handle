import { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState("false"); 

     const submit = async e => {
        e.preventDefault();

        await axios.post('http://localhost:8080/api/register',  {name, email, password}); 

        setNavigate(true);
    };

    if (navigate) {
        return <Navigate to = "/register"/>
      } 

    return (
        <main className="form-signin w-100 m-auto">
            <form  onSubmit={submit} >
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>
            <div className="form-floating">
                <label for="floatingInput">Name</label> 
                <input  className="form-control"  placeholder="Name" 
                        onChange={ e => setName(e.target.value) } /> 
            </div>
            <div className="form-floating">
                <label for="floatingInput">Email address</label> 
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                         onChange={ e => setEmail(e.target.value) } />
            </div>
            <div className="form-floating">
                <label for="floatingPassword">Password</label> 
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                         onChange={ e => setPassword(e.target.value) } />
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
            
            </form>
        </main>
    );

};