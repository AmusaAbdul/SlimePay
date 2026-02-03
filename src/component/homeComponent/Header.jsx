import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    const username = location.state?.userName || localStorage.getItem("userName") || "Guest";
    const userImage = location.state?.image || localStorage.getItem("userImage") || "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_1600,c_limit/Monkey-Selfie.jpg";

    return (
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="headerSVG"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />

                        <rect x="3" y="14" width="4" height="6" rx="1.5" />
                        <rect x="17" y="14" width="4" height="6" rx="1.5" />

                        <path d="M12 14v4c0 1-1 2-2 2" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className="headerSVG"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8a6 6 0 0 0-12 0v5H4l1.5 2h13L20 13h-2V8z" />

                        <path d="M12 21c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2z" />
                    </svg>

                </div>
            </div>
        </div>
    );
}

export default Header;
