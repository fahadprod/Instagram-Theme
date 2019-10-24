import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Login = (props) => {
    var res = props.login.map((obj, index) => {
        return (
            <div key={index} className="main_section">
                <Container>
                    <Row>
                        <Col md="6" style={{ display: 'flex' }} className="main_section2">
                            <img className="login_img1" src={obj.login.img1} alt="first" />
                            <img className="login_img2" src={obj.login.img2} alt="Second" />
                            <img className="login_img3" src={obj.login.img3} alt="Third" />
                        </Col>
                        <Col md="6">
                            <div className="main_section1">
                                <h1 className="insta_heading">𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</h1>
                                <Form className="login_form">
                                    <FormGroup>
                                        <Input className="input_field" type="text" name="" placeholder="Phone Number, user, email"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input className="input_field" type="password" name="password" placeholder="Password"></Input>
                                    </FormGroup>
                                    <Link to="/profile"><Button color="primary" style={{ width: '100%' }}>Log in</Button></Link>
                                </Form>
                                <p style={{ fontWeight: 'bold', color: 'lightGrey', textAlign: 'center', paddingTop: '10px' }}>OR</p>
                                <p style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#3C5A99' }}><i className={obj.login.icon1} />&nbsp; Log in with facebook</a></p>
                                <p style={{ textAlign: 'center', paddingTop: '10px', fontSize: '12px' }}><a href="#" style={{ textDecoration: 'none', color: '#3C5A99' }}>Forgot password?</a></p>
                            </div>
                            <div className="main_section3">
                                <p style={{ textAlign: 'center', paddingTop: '10px', fontSize: '14px' }}>Don't have an account? <Link to="/sign" style={{ textDecoration: 'none', color: '#3C5A99' }}>Sign up</Link></p>
                            </div>
                            <div className="main_section4">
                                <p className="app_info">Get App</p>
                                <div className="app_img">
                                    <a href="#"><img className="login_img4" src={obj.login.img4} alt="iphone" /></a>&nbsp;&nbsp;
                                    <a href="#"><img className="login_img4" src={obj.login.img5} alt="android" /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    })
    return (
        <div>{res}</div>
    )
}

export default Login;