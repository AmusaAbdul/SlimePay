import { useNavigate } from "react-router-dom";

function LoginNavbar() {
    const navigate = useNavigate();

    return (
        <div className="loginNavbar">
            <div className="loginNavName">
                <h2>SlimePay</h2>
            </div>
            <button type="button" onClick={() => navigate("/signuppage")} className="loginSignUp">
                Sign Up
            </button>
        </div>
    );
}

export default LoginNavbar;
