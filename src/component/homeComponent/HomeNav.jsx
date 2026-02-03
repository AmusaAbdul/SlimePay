import { Link } from 'react-router-dom';

function HomeNav() {
    return(
        <div className='homeNav'>
            <nav className="homeNavigation">
                <Link className='links' to="/home">  <button>
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 60 L60 35 L90 60 V90 H30 V60 Z"
                            stroke="#000000" strokeWidth="4" strokeLinejoin="round" />

                        <rect x="55" y="70" width="10" height="20" stroke="#000000" strokeWidth="3" />
                    </svg>
                    <p>Home</p> </button>
                </Link>
                <Link className='links' to="wealth"> <button>
                    <svg  viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="60" cy="50" rx="24" ry="10" stroke="#000000" strokeWidth="3" />
                        <ellipse cx="60" cy="60" rx="24" ry="10" stroke="#000000" strokeWidth="3" />
                        <ellipse cx="60" cy="70" rx="24" ry="10" stroke="#000000" strokeWidth="3" />

                        <text x="60" y="60" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="600">
                            ₦
                        </text>
                    </svg>
                    <p>Wealth</p> </button>
                </Link>
                <button className='links' onClick={() => window.open("https://fairmoney.io/", "_blank")}>
                    <svg  viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="35" y="50" width="50" height="30" rx="4" stroke="#000000" strokeWidth="3" />
                        <rect x="38" y="42" width="50" height="30" rx="4" stroke="#000000" strokeWidth="3" />
                        <rect x="32" y="58" width="50" height="30" rx="4" stroke="#000000" strokeWidth="3" />

                        <text x="60" y="70" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="600">
                            ₦
                        </text>

                        <path d="M60 30 V40 L55 35 M60 40 L65 35" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
                    </svg>

                    <p>Loan</p>
                </button>
                <button className='links' onClick={() => window.open("https://www.temu.com/ul/kuiper/un2.html?_p_rfs=1&subj=un-search-web&_p_jump_id=960&_x_vst_scene=adg&search_key=Temu&_x_ads_channel=google&_x_ads_sub_channel=search&adg_ctx=m-7b0028eb~f-d54ecfd1&_x_ads_account=6693337227&_x_ads_set=21893968070&_x_ads_id=169757914306&_x_ads_creative_id=720764447717&_x_ns_source=g&_x_ns_gclid=CjwKCAiAs4HMBhBJEiwACrfNZRQgNnY2xCU8u85LM8DoHTpAcIyx52UH88ARk8gd26yuAK4ecYxG2BoC4eQQAvD_BwE&_x_ns_placement=&_x_ns_match_type=p&_x_ns_ad_position=&_x_ns_product_id=&_x_ns_target=&_x_ns_devicemodel=&_x_ns_wbraid=CkAKCAiAkPzLBhAyEjAAUtqHVOmKjUjJi3T6pabttkM15C-_soxD59ZhnSAWqfqk6auF0VNPQMXGij76NEAaAgHm&_x_ns_gbraid=0AAAAAo4mICEkgdad8DXEyxumlRWaWr6wA&_x_ns_keyword=temu&_x_ns_targetid=kwd-368867843197&_x_ns_extensionid=&gad_source=1&gad_campaignid=21893968070&gbraid=0AAAAAo4mICEkgdad8DXEyxumlRWaWr6wA&gclid=CjwKCAiAs4HMBhBJEiwACrfNZRQgNnY2xCU8u85LM8DoHTpAcIyx52UH88ARk8gd26yuAK4ecYxG2BoC4eQQAvD_BwE", "_blank")}>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="35" y="45" width="50" height="40" rx="4" stroke="#000000" strokeWidth="4" />

                        <line x1="60" y1="45" x2="60" y2="85" stroke="#000000" strokeWidth="4" />

                        <path d="M60 45 L50 35 L60 40 L70 35 L60 45" stroke="#000000" strokeWidth="3" strokeLinejoin="round" />
                    </svg>
                    <p>Rewards</p>
                </button>
                <Link className='links' to="me"> <button>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="40" r="18" stroke="#000000" strokeWidth="4" />

                        <path d="M40 80 C40 65 80 65 80 80" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Me</p></button>
                </Link>

            </nav>
        </div>
    )
}  


export default HomeNav;