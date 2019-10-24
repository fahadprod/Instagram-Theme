import React from 'react';
import Navbar from './Navbar.jsx';
import Data from './Data.js';
import Post from './Post.jsx';

import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

const Profile = (props) => {

    var result = props.profile.map( (obj, index) => {
        return(
            <div key={index}>
             <Navbar nav={Data}/>
             <Container>
             
                 <Row>
                     
                     <Col className="profile_info">
                         <img className="profile_img" src={obj.profile.info[0].pinfo.pimg} alt="Profile"/>
                         <div className="profile_detail">
                         <span className="profile_name">{obj.profile.info[0].pinfo.pname}</span>
                         <button className="profile_btn"><Link to="/" className="profile_link"><b>Edit Profile</b></Link></button>
                         <Link to="/"><img className="profile_setting" src={obj.profile.info[0].pinfo.psetting} alt="setting"/></Link>
                         </div>
                         
                     </Col>
                    
                 </Row>
                 <Row>
                 <Col>
                         <div className="profile_about">
                             <p className="profile_follow"> <Link className="profile_link" to="/"><b>92</b> post</Link>&nbsp;&nbsp;&nbsp;&nbsp;  <Link className="profile_link" to="/"><b>500</b> followers</Link> &nbsp;&nbsp;&nbsp;&nbsp;<Link className="profile_link" to="/"><b>117</b> following</Link></p><br/>
                             <p className="profile_username"><b>{obj.profile.info[0].pinfo.pusername}</b><br/> {obj.profile.info[0].pinfo.pbio}<br/>{obj.profile.info[0].pinfo.pbio1}</p>
                             
                         </div>
                     </Col>
                     
                 </Row>
                 <Row className="profile_highlight">
                 <Col sm="1" xs="1" >
                       <div>
                           <img className="profile_img1" src={obj.profile.info[0].pinfo.phighlight} alt="Higlight"/>
                           
                           <h6 className="profile_highlight_text text-center">Highlight</h6>
                           
                       </div>
                     </Col>
                     <Col sm="1" xs="1" className="profile_highlight_style"><div>
                     <img className="profile_img1" src={obj.profile.info[0].pinfo.phighlight1} alt="Higlight"/>
                     <h6 className="profile_highlight_text">Highlight</h6>
                         </div></Col>
                         <Col sm="1" xs="1" className="profile_highlight_style1">
                            <div>
                            <img className="profile_img1" src={obj.profile.info[0].pinfo.phighlight2} alt="Higlight"/>
                            <h6 className="profile_highlight_text">Highlight</h6>
                            </div>
                         </Col>
                         <Col sm="1" xs="1" className="profile_highlight_style2">
                            <div>
                            <img className="profile_img1" src={obj.profile.info[0].pinfo.phighlight3} alt="Higlight"/>
                            <h6 className="profile_highlight_text">Highlight</h6>
                            </div>
                         </Col>
                 </Row>
                 <Row>
                     <Col>
                        <div><Post post={Data}/></div>
                     </Col>
                 </Row>
             </Container>
        </div>
        )
    })
    return (
        <div>{result}</div>
    )
    
}

export default Profile;