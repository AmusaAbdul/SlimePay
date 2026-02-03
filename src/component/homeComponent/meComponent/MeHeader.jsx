import { useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function meHeader() {
    const location = useLocation();

    const username = location.state?.userName || localStorage.getItem("userName") || "Guest";
    const userImage = location.state?.image || localStorage.getItem("userImage") || "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_1600,c_limit/Monkey-Selfie.jpg";


    return(
        <div className="headerPage">
            <div className="headerDiv">
                <div className="header">
                    <img
                        src={userImage}
                        alt="profile"
                        style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}
                    />
                    <h3>Hi, {username}</h3>
                </div>
                <div className="headerSvgContainer">
                    <QRCodeCanvas value="https://example.com" size={25} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="headerSVG"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default meHeader;