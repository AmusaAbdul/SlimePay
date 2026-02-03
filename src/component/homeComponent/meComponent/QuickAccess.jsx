function QuickAccess() {
    return(
        <div className="quickAccessContainer">
            <h3>Quick Access</h3>
            <div className="quickAccessOption">
                <button onClick={() => window.open("https://www.fairmoney.io/", "_blank")}>
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="35" y="50" width="50" height="30" rx="4" stroke="#000000" strokeWidth="3" />
                        <rect x="38" y="42" width="50" height="30" rx="4" stroke="#000000" strokeWidth="3" />
                        <rect x="32" y="58" width="50" height="30" rx="4" stroke="#000000" strokeWidth="3" />

                        <text x="60" y="70" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="600">
                            ₦
                        </text>

                        <path d="M60 30 V40 L55 35 M60 40 L65 35" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
                    </svg>

                    <p>Loans</p>
                </button>
                <button onClick={() => window.open("https://ebill.com.ng/?gad_source=1&gad_campaignid=21810364486&gbraid=0AAAAA-W9FQAZEF4jr1tNfoMkAyFOycIAb&gclid=CjwKCAiAs4HMBhBJEiwACrfNZVi0cnKw8idURRy6-whreiBDMq6_zX7vXeezpRTg4iQGIA5tP_xvthoCBB8QAvD_BwE", "_blank")}>
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="30" y="10" width="60" height="100" rx="12"
                            stroke="#000000" strokeWidth="4" />

                        <rect x="38" y="18" width="44" height="54" rx="6"
                            stroke="#000000" strokeWidth="3" />

                        <rect x="46" y="50" width="6" height="14"
                            stroke="#000000" strokeWidth="3" />
                        <rect x="57" y="44" width="6" height="20"
                            stroke="#000000" strokeWidth="3" />
                        <rect x="68" y="38" width="6" height="26"
                            stroke="#000000" strokeWidth="3" />

                        <circle cx="60" cy="30" r="3" fill="#000000" />
                    </svg>
                    <p>Data</p>
                </button>     
                <button>
                    <p>CashBox</p>
                </button>           
            </div>
           
        </div>
    )
}       

export default QuickAccess;