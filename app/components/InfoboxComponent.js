/**
 * Created by CharlieShi on 5/24/17.
 */

import React, {Component} from 'react';

export default class Infobox extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.addEventListener('onmousedown', this.handleHover)
  }

  componentWillUnmount() {
    // window.addEventListener()
  }

  handleHover() {

  }

  render() {
    return (
      <div className="homepageInfobox">
        <div style={{margin: '-20px', backgroundColor: '#D9B310', height: '50px'}}>
          <h3 className="infoboxText">{this.props.name}</h3>
        </div>

        <div style={{margin: '20px', marginTop: '40px'}}>
          <div style={{width: '1400px', height: '200px', overflow: 'hidden'}}>
            <img className="first" src="images/icons/postgres.png"/>
            <img src="images/icons/node.png"/>
            <img src="images/icons/javascript.png"/>
            <img src="images/icons/react.png"/>
            <img src="images/icons/redux.png"/>
            <img src="images/icons/webpack.png"/>
            <img src="images/icons/git.png"/>

            <img src="images/icons/postgres.png"/>
            <img src="images/icons/node.png"/>
            <img src="images/icons/javascript.png"/>
            <img src="images/icons/react.png"/>
          </div>

          <div>

          </div>
        </div>
      </div>
    )
  }
}


