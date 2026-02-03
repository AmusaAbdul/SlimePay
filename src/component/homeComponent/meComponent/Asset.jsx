import { useState } from "react";


function Asset() {
    const [balance, setBalance] = useState(false)
    return (
        <div className="balanceContainer">
            <div className="balanceHeader">
                <div className="showBalance">
                    <p>Total Assets <button onClick={() => setBalance(!balance)}>👁️</button> </p>
                </div>
                <div>
                    <p>Yesterday's Earnings</p>
                </div>
            </div>
            <div className="availableBalance">
                <h3> {balance ? "#500,750,287.20" : "****"} </h3>
                <button>To be updated</button>
            </div>
        </div>
    )
}



export default Asset;