import Header from "./homeComponent/Header"
import Balance from "./homeComponent/Balance"
import Transfer from "./homeComponent/Transfer"
import Wealth from "./homeComponent/Wealth"
import Advert from "./homeComponent/Advert"
import HomeNav  from "./homeComponent/HomeNav";


function HomePage() {
    return(
        <div className="homePage">
            <Header />
            <Balance />
            <Transfer />
            <Wealth />
            <Advert />
            <HomeNav />
        </div>

        
    )
}

export default HomePage