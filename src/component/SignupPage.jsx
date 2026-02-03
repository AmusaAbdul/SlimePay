import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFooter from "./logComponent/LoginFooter";

function SignupPage() {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const navigate = useNavigate();
    const [number, setNumber] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [image, setImage] = useState(null)


    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
                localStorage.setItem("userImage", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

 

    function handleLogin(e) {
        e.preventDefault()

        if (number && userName && email && password && confirmPassword) {
            localStorage.setItem("userName", userName.toUpperCase());
            navigate("/home")
        }
    }


    return (
        <div className="loginPage">
            <div className="loginNavbar">
                <div className="loginNavName">
                    <h2>SlimePay</h2>
                </div>
            </div>
            <div className="userContainer">
                <div>
                    <form className="userForm" onSubmit={handleLogin}>
                        <>
                            <input style={{ display: "none" }} id="fileInput" type="file" required accept="image/*" placeholder="Upload Image" onChange={handleImage} />
                            <label
                                htmlFor="fileInput"
                                style={{
                                    display: "inline-block",
                                    padding: "10px 20px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                }}
                            >
                                Upload Image
                            </label>
                        </>
                        <input type="text" required placeholder=" Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <input type="text" required placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" required placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <p style={{ color: password === confirmPassword ? "green" : "red" }}>
                            {password && confirmPassword &&
                                (password === confirmPassword
                                    ? "Passwords match ✅"
                                    : "Passwords do not match ❌"
                                )
                            }
                        </p> 
                        <button
                            type="submit"
                            disabled={password !== confirmPassword || !password}
                            style={{ backgroundColor: isMouseOver ? "blue" : "", color: isMouseOver ? "white" : "" }}
                            onMouseOver={() => setIsMouseOver(true)}
                            onMouseOut={() => setIsMouseOver(false)}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
            <LoginFooter />
        </div>
    )
}

export default SignupPage;