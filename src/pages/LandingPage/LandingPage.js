import React, { Component } from "react";
import './LandingPage.css';
import { Form, Button } from 'reactstrap';
  
class LandingPage extends Component {

    render() {

    return (
        <div className="landgingPage-layout">
            <div className="landingPage">
                <nav className="landingPage_navigation">
                    <div className="landingPage_logo"><a href="/goals">GOALSetter</a></div>
                    <div>
                        <Form noValidate onSubmit={this.onSubmit}>
                            <div className="add-specific-goal-spacer">
                            </div>
                            <div className="form-landingPage">
                                <Button
                                    style={{
                                    width: "200px",
                                    height: "70px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    fontSize: "36px",
                                    marginTop: "2rem",
                                    marginRight: "6rem",
                                    backgroundColor: "#e85a4f",
                                    }} onClick href="/signup">Sign Up
                                </Button>
                                <div className="landingPage-spacer"></div>
                                <Button
                                    style={{
                                    width: "200px",
                                    height: "70px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    fontSize: "36px",
                                    marginTop: "2rem",
                                    marginLeft: "6rem",
                                    backgroundColor: "#e85a4f",
                                    }} onClick href="/login">Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </nav>
            </div>
        </div>
    );
  }
}

export default LandingPage;