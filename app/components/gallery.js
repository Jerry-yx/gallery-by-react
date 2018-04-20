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
	width:'22vw',
	height:'24.2vw'
}
class Gallery extends React.Component{
	constructor(props){
		super(props);
		this.state={currentPic:-1,styleArr:{},inverse:false};
		this.turnCard = this.turnCard.bind(this, true);
		this.changeCard = this.changeCard.bind(this, false);
		this.styleSet = this.styleSet.bind(this, false);
	}
	componentWillMount(){
		this.styleSet(0);
	}
	//选中图片切换图片
	changeCard(e,id){
		this.setState({currentPic:id});
		this.styleSet(id);		
	}
	turnCard(e,order){
		let currentPic ;

		if(order=="next"){
			currentPic = this.state.currentPic+1;
			if(currentPic>this.props.num-1){
				currentPic = 0;
			}
			this.setState({currentPic:currentPic})
		}else{
			currentPic = this.state.currentPic-1;
			if(currentPic<0){
				currentPic = this.props.num-1;
			}
			this.setState({currentPic:currentPic});
		}
			this.styleSet(currentPic);
	}
	styleSet(e,i){
		let styleArr={};
		if(i == this.state.currentPic){
			styleArr = this.state.styleArr;
			styleArr[i]={};
			if(this.state.inverse){
				styleArr[i]['opacity']='.3';
			}
			this.setState({inverse : !this.state.inverse});
		}else{
			styleArr[i] = centerStyle;
			for(let j=0;j<this.props.num;j++){
				let style={};
				if(i!=j){
					let transformRotate = 0;
					if(j>=this.props.num/2){
						style.left = `calc(${Math.random().toFixed(2)} * (30vw)`;  
						style.transform = `rotate( ${(Math.random()>0.5?'-':'+')+(10 +Math.random()*25).toFixed(2)}deg)`;
					}else{
						style.right =`calc(${Math.random().toFixed(2)} * (30vw)`; 
						style.transform = `rotate(${(Math.random()>0.5?'-':'+')+(10 +Math.random()*25).toFixed(2)}deg)`;
					}	
					style.top = `calc(${Math.random().toFixed(2)} * (100vh - 18vw * 1.2))`; 
					styleArr[j] =style;

				} 
			}
		}
		this.setState({styleArr:styleArr})
	}

	render(){
		//this.styleSet(0);
		return <div>
					<ImageStage pic={this.state.currentPic} style={this.state.styleArr} clickPic = {this.changeCard}></ImageStage>
					<ImageController num = {this.props.num}   clickOrder= {this.turnCard} clickPic = {this.changeCard}></ImageController>
				</div>
	}
}

export default Gallery;
