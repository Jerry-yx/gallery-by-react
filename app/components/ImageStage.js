import React from 'react';
import imageArray from '../data/imageDatas';
import ImageCard from './ImageCard.js';

class ImageStage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let imageStr = [];
		for(let i=0;i<imageArray.length;i++){
			imageArray[i].path = require(`../images/${imageArray[i].fileName}`);
			if(this.props.pic == i){
				imageStr.push(<ImageCard key = {i} style={this.props.style[i]} picId = {i} cardMessage = {imageArray[i]} currentPic={true} clickPic = {this.props.clickPic}></ImageCard>);			
			}else{
				imageStr.push(<ImageCard key = {i} style={this.props.style[i]} picId = {i}  cardMessage = {imageArray[i]} currentPic={false} clickPic = {this.props.clickPic}></ImageCard>);
			}
		}
		return <div className={'imageStage'}>{imageStr}</div>
	}
}
export default ImageStage;
