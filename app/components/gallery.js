import React from 'react';
import ImageStage from './ImageStage.js';
import ImageController from './ImageController.js';

class Gallery extends React.Component{
	render(){
		return <div>
					<ImageStage></ImageStage>
					<ImageController></ImageController>
				</div>
	}
}

export default Gallery;
