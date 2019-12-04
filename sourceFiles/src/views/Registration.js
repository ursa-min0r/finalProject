import React from "react";
import "./login.css";
import { Link } from 'react-router-dom';

class Registration extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>


                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-15">


                                        <img
                                            src={require("../../src/images/scriptHub.gif")} alt="Header" width="450px" height="450px" />


                                        <form>
                                            <div className="form-group mb-3">
                                                <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"></input>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-dark"></input>
                                            </div>
                                            <div className="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"></input>
                                </div>
                                <div className="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Reenter Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"></input>
                                </div>


                                <Link to="/login" >
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">SIGN UP</button>
                                </Link>
                                <div>Already have an account? Login!</div>
                                <Link to="/login">
                                <button className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"  variant="contained" color="primary">LOGIN</button>
                                </Link>
                                <div className="text-center d-flex justify-content-between mt-4"> 
                                </div>
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
export default Registration;