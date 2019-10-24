import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

const SignUp = (props) => {
    var response = props.sign.map((obj, index) => {
        return (
            <div key={index}>
                <Container className="main">
                    <Row>
                        <Col>
                            <div className="main_sign1">
                                <h1 className="insta_heading">𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</h1>

                                <Form className="login_form">
                                    <p><a href="#" ><Button style={{ width: '100%', fontSize: '13px' }} color="primary"><i className={obj.login.icon1} />&nbsp; Log in with facebook</Button></a></p>
                                    <p style={{ fontWeight: 'bold', color: 'lightGrey', textAlign: 'center' }}>OR</p>
                                    <FormGroup>
                                        <Input className="input_field1" type="text" name="" placeholder="Phone Number or Email"></Input>

                                        <Input className="input_field1" type="text" name="" placeholder="Full Name"></Input>

                                        <Input className="input_field1" type="text" name="" placeholder="User Name"></Input>

                                        <Input className="input_field1" type="password" name="password" placeholder="Password"></Input>
                                    </FormGroup>
                                    <Button color="primary" style={{ width: '100%' }}>Sign up</Button>
                                </Form>


                                <p className="terms">By signing up, you agree to our <b>Terms , Data Policy</b> and <b>Cookies Policy</b> .</p>
                            </div>
                            <div className="main_sign3">
                                <p style={{ textAlign: 'center', paddingTop: '10px', fontSize: '14px' }}>Have a account? <Link to="/" style={{ textDecoration: 'none', color: '#3C5A99' }}>Log in</Link></p>
                            </div>
                            <div className="main_sign4">
                                <p className="app_info">Get App</p>
                                <div className="app_img">
                                    <a href="#"><img className="login_img4" src={obj.sign.img4} alt="iphone" /></a>&nbsp;&nbsp;
                           <a href="#"><img className="login_img4" src={obj.sign.img5} alt="android" /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    })
    return (
        <div>{response}</div>
    )
}

export default SignUp;