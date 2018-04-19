import React from 'react';
import ImageStage from './ImageStage.js';
import ImageController from './ImageController.js';

const centerStyle={
	left:0,
	top:0,
	right:0,
	bottom:0,
	margin:'auto',
	zIndex:100,
}
class Gallery extends React.Component{
	constructor(props){
		super(props);
		this.state={currentPic:0,styleArr:{}};
		this.turnCard = this.turnCard.bind(this, true);
		this.changeCard = this.changeCard.bind(this, false);
		this.styleSet = this.styleSet.bind(this, false);
	}
	//选中图片切换图片
	changeCard(e,id){
		this.setState({currentPic:id});
		this.styleSet(id);
	}
	turnCard(e,order){
		let currentPic 
		if(order=="next"){
			this.setState(function(preId){
				currentPic = preId+1;
				if(currentPic>this.props.num-1){
					currentPic = 0;
				}
				return {currentPic:currentPic}
			})
		}else{
			this.setState(function(preId){
				currentPic = preId-1;
				if(currentPic<0){
					currentPic = this.props.num;
				}
				return {currentPic:currentPic}
			})
		}
		this.styleSet(currentPic);
	}
	styleSet(e,i){
		let styleArr={};
		styleArr[i] = centerStyle;
		for(let j=0;j<this.props.num;j++){
			let style={};
			if(i!=j){
				if(j>this.props.num/2){
					style.left =8*j+ Math.random()*150;  
				}else{
					style.left =8*j+ 850 + Math.random()*300; 
				}	
				style.top =8*j+ Math.random()*280; 
				styleArr[j] =style;

			} 
		}
		this.setState({styleArr:styleArr})
	}

	render(){
		//this.styleSet(0);
		return <div>
					<ImageStage pic={this.state.currentPic} style={this.state.styleArr} clickPic = {this.changeCard}></ImageStage>
					<ImageController clickPic = {this.turnCard}></ImageController>
				</div>
	}
}

export default Gallery;
