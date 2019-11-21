import React from "react";
import "../views/dashcomponents/dash.css";
import "./login.css"

class Login extends React.Component {
  render() {
    return (
    <div className="container-fluid">
    <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>


        <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <img src={require("../../src/images/scriptHub.png")} alt="Header" width="300px" height="300px"/>
                            
                            <form>
                                <div className="form-group mb-3">
                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"></input>
                                </div>
                                <div className="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-dark"></input>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked className="custom-control-input"></input>
                                    <label for="customCheck1" className="custom-control-label">Remember Password?</label>
                                </div>
                                <button type="submit" className="btn btn-dark btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
)
}
}

export default Login;