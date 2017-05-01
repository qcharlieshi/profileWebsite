/**
 * Created by CharlieShi on 4/26/17.
 */

import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, CardColumns, CardHeader, CardLink } from 'reactstrap';

import PortfolioItemComponent from '../components/PortfolioItemComponent';


export default class PortfolioContainer extends Component {

  render() {
    return (
        <div>
          <div style={{backgroundImage: 'url(\'../images/portfolioHeader.png\')', height: '200px', zIndex: '-1000'}}></div>

          {/*<div className="portfolioPage">*/}

          <div className="card" style={{width: '20rem'}}>
            {/*<img className="card-img-top" src="..." alt="Card image cap" />*/}
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>



          {/*</div>*/}
        </div>
    )
  }
}
