import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to the E-commerce Platform</h1>
            <Link to="/login">Go to Login</Link>
            <Link to="/signup">Go to Signup</Link>
        </div>
    )
}

export default Home;