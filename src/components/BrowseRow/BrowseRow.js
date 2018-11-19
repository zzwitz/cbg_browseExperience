import React from 'react';
import './BrowseRow.css'
import ArtCard from '../ArtCard/ArtCard.js'
import ArtModal from '../ArtModal/ArtModal.js'



class BrowseRow extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const styles = {
    background: this.props.RowColor
};
    return(
      <div style = {styles} class = "BrowseRowContainer">
        <h3 class = "BrowseRowTitle"> Your Suggestions </h3>
        <div class = "BrowseRow">
          {this.props.artList.map(artPiece => (
            <ArtCard handleClick = {this.props.handleClick} artObj = {artPiece}/>
          ))}
          
        </div>
      </div>
    )
  }
}


export default BrowseRow;
