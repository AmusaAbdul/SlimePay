import { Outlet } from "react-router-dom";

function Home() {

    const time = new Date().getHours();

    if (time < 12 ) {
        alert("Good Morning! Welcome to SlimePay")
    } else if (time < 18) {
        alert("Good Afternoon! Welcome to SlimePay")   
    } else {
        alert("Good Evening! Welcome to SlimePay")
    }
    return (
        <Outlet />
    )
}

export default Home;