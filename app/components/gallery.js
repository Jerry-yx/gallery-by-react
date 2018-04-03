import React from 'react';
import imageArray from '../data/imageDatas'

let imageStr = (function(imageStr){
	for(let i=0;i<imageArray.length;i++){
		imageArray[i].path = `../images/${imageArray[i].fileName}`;
		imageStr.push(`<img src="${imageArray[i].path}"></img>`);
	}
	return imageStr;
})(imageArray);

class Gallery extends React.component{
	render(){
		return <div>{imageArray}</div>
	}
}

export default Gallery;
