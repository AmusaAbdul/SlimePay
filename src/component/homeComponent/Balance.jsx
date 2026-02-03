import{useState}from"react";

function Balance() {
    const [balance, setBalance] = useState(false)

  return (
      <div className="balanceContainer">
          <div className="balanceHeader">
              <div className="showBalance">
                  <p>Available Balance <button onClick={() => setBalance(!balance)}>👁️</button> </p>
              </div>
              <p>Transaction History</p>
          </div>
          <div className="availableBalance">
              <h3> {balance ? "#500,750,287.20" : "****"} </h3>
              <button>Fund Wallet</button>
          </div>
      </div>
  );
}

export default Balance;