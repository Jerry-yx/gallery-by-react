import React from 'react';
import imageArray from '../data/imageDatas';
import ImageCard from './ImageCard.js';

let imageStr = [];
for(let i=0;i<imageArray.length;i++){
	imageArray[i].path = require(`../images/${imageArray[i].fileName}`);
	imageStr.push(<ImageCard key = {i} cardMessage = {imageArray[i]}></ImageCard>);
}

class ImageStage extends React.Component{
	render(){
		return <div className={'imageStage'}>{imageStr}</div>
	}
}
export default ImageStage;
