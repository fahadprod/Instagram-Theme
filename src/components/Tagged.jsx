import React, { Component } from 'react'
import {Row, Col} from 'reactstrap';


export default class Tagged extends Component {
    imag = [
        {
          url : 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          url : 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          url : 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          url : 'https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          url : 'https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          url : 'https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          url : 'https://images.pexels.com/photos/459059/pexels-photo-459059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          url : 'https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ]
  render() {
    var res = this.imag.map( (obj, index) => {
        return(
            
            <div key={index}>
               
                <div className="img_repeat">
                <Row>
                    <Col sm="4">
                      <img className="img_width" src={obj.url} alt="image"/>
                    </Col>
                    <Col sm="4">
                      <img className="img_width" src={obj.url} alt="image"/>
                    </Col>
                    <Col sm="4">
                      <img className="img_width" src={obj.url} alt="image"/>
                    </Col>
                </Row>
                </div>        
            </div>
        )
        
    })
    return(
        <div>{res}</div>
    )
  }
}
