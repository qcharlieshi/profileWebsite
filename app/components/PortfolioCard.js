/**
 * Created by CharlieShi on 5/12/17.
 */

import React, {Component} from 'react';

export default class PortfolioCard extends Component {
  constructor(props) {
    super(props)

    this.title = props.title;
    this.description = props.description;
    this.tags = props.tags;
    this.date = props.date;
    this.image = props.image;
  }

  render() {
    return (
      <div className="card article">
        <div className="article-image"></div>
        <section className="article-body">
          <p className="datestamp">April 2017</p>
          <p className="article-tags btn btn-outline-primary">Javascript</p>
          <p className="article-tags btn btn-outline-primary">React</p>
          <h2 className="article-heading">GENZED | Online Multiplayer Arena Shooter</h2>
          <p>
            GENZED was developed utilizing the Phaser Javascript game engine and socket technology to achieve real time multiplayer gameplay.
            We utilized various techniques to handle our client server architecture for smooth latency compensation. Pathfinding and lighting were default
            achieved by using a modified A* algorithem and our own raycasting formula.
          </p>
        </section>
        <section className="chart">
          <div className="rating-bar-1 rating-small"></div>
          <div className="rating-bar-2 rating-large"></div>
        </section>
        <footer className="article-footer">
          <ul className="article-links">
            <li><a href="#">Read More</a></li>
          </ul>
        </footer>
      </div>
    )
  }
}
