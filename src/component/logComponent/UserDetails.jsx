import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDetails() {

    const [isMouseOver, setIsMosueOver] = useState(false)
    const navigate = useNavigate();
    const [accountNo, setAccountNo] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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

        if (accountNo && userName && email && password) {
            localStorage.setItem("userName", userName.toUpperCase());
            localStorage.setItem("accountNo", accountNo);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            navigate("/home");
        }
    }


    return (
        <div className="userContainer">
            <div>
                <form className="userForm" onSubmit={handleLogin}>
                    <>
                        <input style={{ display: "none" }} id="fileInput" type="file" required accept="image/*" placeholder="Upload Image" onChange={handleImage} />
                        <label
                            htmlFor="fileInput"
                            required
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
                    <input type="text" required value={accountNo} placeholder="Account Number" onChange={(e) => setAccountNo(e.target.value)} />
                    <input type="text" required placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button 
                        style={{ backgroundColor: isMouseOver ? "blue" : "", color: isMouseOver ? "white" : "" }}
                        onMouseOver={() => setIsMosueOver(true)}
                        onMouseOut={() => setIsMosueOver(false)}>Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserDetails;