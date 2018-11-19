import React from 'react';
import ArtCard from '../ArtCard/ArtCard.js'
import BrowseRow from '../BrowseRow/BrowseRow.js'
import './BrowseBoard.css'
import ArtModal from '../ArtModal/ArtModal'



class BrowseBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArtModalDisplay: false,
      ArtModalArtObj: {
        title: "Mona Lisa",
        artist: 'Da Vinci',
        id: '1',
        artistId: '1',
        imgSRC: "mona_lisa.jpg",
        description: "A beautiful piece of art from a world-renowned artist that could be a great addition to any space, ranging from cafe to bank to michelin star restaurant"
    }}
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(obj) {
      this.openModal(obj.props.artObj)
  }

  openModal(artObj) {
    this.setState({ArtModalArtObj: artObj})
    this.setState({ArtModalDisplay: true})
  }

  closeModal() {
    this.setState({ArtModalDisplay: false})
  }

  render() {
    return(
      <div class = "BrowseBoardContainer">
        <BrowseRow artList = {this.props.artList} handleClick = {this.handleClick} RowColor = "inherit"/>
        <BrowseRow artList = {this.props.artList} handleClick = {this.handleClick} RowColor =  "#F0EAD6"/>
        <BrowseRow artList = {this.props.artList} handleClick = {this.handleClick} RowColor = "inherit"/>
        <BrowseRow artList = {this.props.artList} handleClick = {this.handleClick} RowColor =  "#F0EAD6"/>
        <ArtModal closeModal = {this.closeModal} display = {this.state.ArtModalDisplay} artObj = {this.state.ArtModalArtObj}/>
      </div>
    )
  }
};

export default BrowseBoard;
