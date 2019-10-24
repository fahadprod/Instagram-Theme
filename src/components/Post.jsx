import React from 'react';
import Images from './Images.jsx';
import Igtv from './Igtv.jsx';
import Save from './Save.jsx';
import Tagged from './Tagged.jsx';


const Post = (props) => {
     
    var res = props.post.map( (obj, index) => {
        
        return(
            <div key={index}>
                <div className="pc-tab">
               <input checked="checked" id="tab1" type="radio" name="pct" />
               <input id="tab2" type="radio" name="pct" />
          <input id="tab3" type="radio" name="pct" />
          <input id="tab4" type="radio" name="pct" />
  <nav>
    <ul>
      <li className="tab1">
        <label for="tab1">
            <i className={obj.profile.info1[0].post.picon1}/> <b>POST</b>
        </label>
      </li>
      <li className="tab2">
        <label for="tab2">
          <i className={obj.profile.info1[0].post.picon2}/> <b>IGTV</b>
        </label>
      </li>
      <li className="tab3">
        <label for="tab3">
        <i className={obj.profile.info1[0].post.picon3}/> <b>SAVED</b>
        </label>
      </li>
      <li className="tab4">
        <label for="tab4">
        <i className={obj.profile.info1[0].post.picon4}/> <b>TAGGED</b>
        </label>
      </li>
    </ul>
  </nav>
  <section>
    <div className="tab1">
      
         <Images/>
      
    </div>
    <div className="tab2">
      <Igtv/>
    </div>
    <div className="tab3">
        <Save/>
    </div>
    <div className="tab4">
       <Tagged/>
    </div>
  </section>
</div>

            </div>    
        )
    })
    return(
        <div>{res}</div>
    )
}

export default Post;