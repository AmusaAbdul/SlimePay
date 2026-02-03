import LoginFooter from "./logComponent/LoginFooter";
import LoginNavbar from "./logComponent/LoginNavbar";
import UserDetails from "./logComponent/UserDetails";
function LoginPage() {
    return(
        <div className="loginPage">
            <LoginNavbar />
            <UserDetails />
            <LoginFooter />
        </div>
    )
}

export default LoginPage;