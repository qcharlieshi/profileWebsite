/**
 * Created by CharlieShi on 4/30/17.
 */

import React from 'react';


const PortfolioItemComponent = (props) => {

  return(
    <article className="article tile">
      <div className="article-image"></div>
      <section className="article-body">
        <p className="datestamp">2013 Q3</p>
        <p className="article-tags">UX, UI, Visual design</p>
        <h2 className="article-heading">YouTube "Tiger Team" stickersheets for Sketch.app</h2>
        <p>
          In addition to writing some docs and contributing to the Sketch-users mailing list, I have taken to creating Sketch versions of design resources produced by the YouTube and Google UX teams.
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
    </article>

  )
};

export default PortfolioItemComponent;