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
          <img src="../../public/images/icons/postgres.png"/>
        </div>
      </div>
    )
  }
}


