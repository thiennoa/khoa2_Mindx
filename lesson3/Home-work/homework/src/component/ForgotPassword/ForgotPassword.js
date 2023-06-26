import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./ForgotPassword.css"

const ForgotPassword = () => {
    return (
        <div className="forgotPassword row">
            <div className="logo col-6">
                <div className="shop-name">Shop App</div>
                <img src="./logo.png" className="logo-img" />
            </div>
            <div className="forgotPassword-content col-6">
                <div className="forgotPassword-title">
                    Welcome to Shop App
                </div>
                <form className="forgotPassword-form">
                    <div className="form-group">
                        <input type="text" className="form-control" name="userName" placeholder="User Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email@gmail.com" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" />
                        {/* <span className="toggle-password float-end">Show</span> */}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    <button className="form-btn" type="submit" >forgotPassword</button>
                </form>
                <a href="#">Login</a>
            </div>
        </div>
    );
};

export default ForgotPassword;