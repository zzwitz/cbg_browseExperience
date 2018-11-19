import React from 'react';
import {Link} from 'react-router-dom'
import './ArtCard.css'
import {makeArtLink, makeArtistLink} from '../Functions/HelperFunctions.js'


class ArtCard extends React.Component {
  constructor(props) {
  super(props);
  this.handleClick = this.props.handleClick.bind(this);
}

  render() {

    return(

        <div onClick = {() => this.props.handleClick(this)} class = 'ArtCard'>
          {/*<Link to = {this.makeArtLink(this.props.id)}>*/}
            <div class ='CardContainer'>
              <img class = 'CardImage' src = {this.props.artObj.imgSRC}/>
              <div class = 'CardText'><span class ="CardTitle"> {this.props.artObj.title}</span>
              <br/>
              <span class = "ArtistLink" > by <Link to = {makeArtistLink(this.props.artObj.artistId)}>{this.props.artObj.artist}</Link> </span> </div>
            </div>
          {/*</Link>/*/}
        </div>

    )

  }
};


export default ArtCard;
