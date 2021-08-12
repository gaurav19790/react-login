import React from 'react'
import pic from "./images/pic.jpg";
import "./Main.css";

function Main() {
    return (
        <>
            <div className="d-flex">
                <img src={pic} alt="pic" className="picc" />
                <div className="boxx">


                    <h1>Welcome Back!</h1>
                    <div id="para">Please login to your account</div>
                    <div>
                        <input placeholder='username' className="txt" ></input></div>
                    <div><input placeholder='password' className="txt" ></input></div>
                    <div className="d-flex">
                        <div className="d-flex"><input className="check" type="checkbox" id="vehicle1" name="rememberme" ></input>
                            <h4 className="rem">Remember me</h4></div>
                        <div>
                            <h4 className="pass">Forgot password</h4>

                        </div>

                    </div>
                    <button>login</button>
                    <div className="terms">Terms of use. Privacy policy</div>

                </div>
            </div>


        </>
    )
}
export default Main;