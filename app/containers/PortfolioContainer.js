/**
 * Created by CharlieShi on 4/26/17.
 */

import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, CardColumns, CardHeader, CardLink } from 'reactstrap';

import PortfolioCard from '../components/PortfolioCard';


export default class PortfolioContainer extends Component {
  render() {
    const portfolioHeaderImageStyle = {
      backgroundImage: 'url(\'../images/portfolioHeader.png\')',
      height: '200px',
      zIndex: '1000',
      width: '100%',
      boxShadow: '0px 15px 5px rgba(0, 0, 0, 0.5)'
    }

    const cardColumnStyle = {
      width: '100%',
      padding: '5%',
      paddingTop: '25px',
      backgroundColor: '#0B3C5D'
    }

    return (
        <div>
          <div className="row" style={{height: '200px', width: '101%'}}>
            <div style={portfolioHeaderImageStyle}></div>
          </div>

          <div className="card-columns" style={cardColumnStyle}>
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />


          </div>
        </div>
    )


  }
}
