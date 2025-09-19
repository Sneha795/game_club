import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        if (username === "admin" && password === "password") {
            alert("Login successful!");
            navigate("/admin_dashboard");
        }
        else {
            if (username === "customer" && password === "password") {
                alert("Login successful!");
                navigate("/customer_dashboard");
            }else{
                alert("Invalid credentials. Please try again.");
            }
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                id = "username"
                name = "username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" />
                <br />
                <input type="password" 
                id = "password"
                name = "password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;