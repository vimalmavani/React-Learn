import {React, useState} from "react";
import '../Login/Login.scss';
import loginImage from '../../Assets/images/loginGraphics_new.svg';
import logo from '../../Assets/images/logo.png';



function Login(){
    const [loginval, setLoginVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [testval , handleTestVal] = useState('');
    const [messageval , handelMessageVal] = useState('');
    const handlePass = (event) => {
        setPasswordVal(event.target.value);
    }
    const handleChange = (event) => {
        setLoginVal(event.target.value);
    }
    const handleLogin = (event) => {
        console.log('test')
        handelMessageVal(`hey, ${loginval} ${passwordVal}`)
        setLoginVal('');
        setPasswordVal('');
    }
   

    return(
        <> 
            <div className="login-main-wrapper">
                <div className="login-left-section flex-column align-items-center justify-content-space-between">
                    <h1 className="login-left-tagline">Power. Productivity. Results.</h1>
                    <img src={loginImage} className="login-left-img"/>
                    <div className="login-left-desc">
                        <p className="font-regular">Full eDiscovery capabilities. One powerful, secure, cloud-based platform. <br/> Casepoint is smarter eDiscovery.</p>
                    </div>
                </div>
                <div className="login-right-section">
                    <div className="login-box">
                        <div>
                            <img src={logo} className="img-logo"/>
                            <h2 className="font-bold">Log In</h2>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" id="inputLogin" onChange={handleChange} value={loginval} className="text-box login-text-box" />
                                {/* <h1>{loginval}</h1> */}
                            </div>
                            <div className="form-group">
                                <label>Test</label>
                                <input type="text" id="testtext" onChange={event => handleTestVal(event.target.value)} value={testval} className="text-box login-text-box" />
                                {/* <h1>{testval}</h1> */}
                            </div>
                            <div className="form-group">
                                <div className="forgot-password-section">
                                    <label>Password: </label>
                                    {/* {passwordVal} */}
                                    <a href="#javascript" className="forgotpassowrd-link">Forgot Password?</a>
                                </div>
                                <input type="password" onChange={handlePass} value={passwordVal} id="passwordText" className="text-box login-text-box" />
                            </div>
                            <div className="mb-15">
                                <h1>{messageval}</h1>
                                <button type="button" onClick={handleLogin} className="btn btn-primary login-btn w-100 d-block">Sign In</button>
                            </div>
                            <span className="agree-text text-center mb-15 d-block">By Logging in you agree to our <button className="btn-link-trans text-underline" >End User License Agreement</button></span>
                            <div className="login-security-wrap text-center">
                                <span>We know that keeping your data secure and safe is important.<br/>Learn more about our <button className="btn-link-trans text-underline">Security</button></span>
                            </div>
                        </div>
                    </div>
                    <div className="login-box-bottom">
                        <label className="site-version">Version <span id="versionNo">2.3.4.184308</span></label>
                        <a role="link" className="text-muted" href="https://www.casepoint.com/?utm_source=cp-app&amp;utm_medium=login-page&amp;utm_campaign=ce" target="_blank">Casepoint.com</a>
                        <span className="dot-separator"></span>
                        <a role="link" className="text-muted" href="https://www.casepoint.com/privacy-policy/" target="_blank">Privacy Policy</a>
                        <p className="text-muted mt-0">Copyright © 2023 <span>Casepoint | All rights reserved</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;