function Transfer() {
    return(
        <div className="transferContainer">
            <div className="transferOption">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                    <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 10V20M8 10V20M12 10V20M16 10V20M20 10V20"
                        stroke="currentColor" strokeWidth="2" />
                    <path d="M2 20h20" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 3L2 9h20L12 3z"
                        stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <p>To Bank</p>
            </div>
            <div className="transferOption">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="18" rx="3"
                        stroke="currentColor" strokeWidth="2" />

                    <circle cx="9" cy="10" r="2.5"
                        stroke="currentColor" strokeWidth="2" />

                    <path d="M5.5 17c0-2.2 2-3.5 3.5-3.5s3.5 1.3 3.5 3.5"
                        stroke="currentColor" strokeWidth="2" />

                    <path d="M14 9h4M14 13h4"
                        stroke="currentColor" strokeWidth="2" />
                </svg>

                <p>To SlimePay</p>
            </div>
            <div className="transferOption">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="12" rx="2"
                        stroke="currentColor" strokeWidth="2" />
                    <path d="M3 10h18"
                        stroke="currentColor" strokeWidth="2" />
                    <rect x="15" y="12" width="4" height="2" rx="1"
                        fill="currentColor" />
                </svg>

                <p>Wallet</p>
            </div>
            <div className="transferOption">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="2" width="16" height="20" rx="2"
                        stroke="currentColor" strokeWidth="2" />

                    <rect x="7" y="5" width="10" height="4" rx="1"
                        stroke="currentColor" strokeWidth ="2" />

                    <rect x="7" y="11" width="10" height="1"
                        fill="currentColor" />

                    <circle cx="9" cy="15" r="1" fill="currentColor" />
                    <circle cx="12" cy="15" r="1" fill="currentColor" />
                    <circle cx="15" cy="15" r="1" fill="currentColor" />
                </svg>

                <p>ATM Card</p>
            </div>
            <div className="transferOption">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="12" rx="2"
                        stroke="currentColor" strokeWidth="2" />
                    <path d="M12 10v5M12 15l-2-2M12 15l2-2"
                        stroke="currentColor" strokeWidth="2" />
                </svg>

                <p>Savings</p>
            </div>
        </div>
    )
}    


export default Transfer;