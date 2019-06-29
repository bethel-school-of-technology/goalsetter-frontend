import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


class Home extends Component {
  render() {
    return (
      <div className="Header">
       <a href="/profile"><h1 className="white" >GOALSetter</h1></a>
       <div className="SmallFont"><Link className="Republican" to="/signup">Sign Up</Link><Link className="Democrate" to="/login">Login</Link></div>
      </div>
      // <div style={{ height: "0vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="col s12 center-align">
      //       <div className="col s6">
              // <Link
              //   to="/signup"
              //   style={{
              //     width: "140px",
              //     borderRadius: "3px",
              //     letterSpacing: "1.5px"
              //   }}
              //   className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              // >
      //           SignUp
      //         </Link>
      //       </div>
      //       <div className="col s6">
      //         <Link
      //           to="/login"
      //           style={{
      //             width: "140px",
      //             borderRadius: "3px",
      //             letterSpacing: "1.5px"
      //           }}
      //           className="btn btn-large btn-flat waves-effect white black-text"
      //         >
      //           Log In
      //         </Link>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default Home;