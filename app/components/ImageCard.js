import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/card.less';

class ImageCard extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		let id = this.props.picId;
		this.props.clickPic(id);
	}
	render (){
		let cardMessage = this.props.cardMessage;
		if(this.props.currentPic){
			return <div className={style.card} style={this.props.style} onClick = {this.handleClick}>
				<img src={cardMessage.path} title={cardMessage.fileName}></img>
				<div className={style.desc}>
					<p>{cardMessage.title}</p>
					<p>{cardMessage.desc}</p>
				</div>
			</div>	
		}else{
			return <div className={style.card} style={this.props.style}  onClick = {this.handleClick}>
				<img src={cardMessage.path} title={cardMessage.fileName}></img>				
				<div className={style.desc}>
					<p>{cardMessage.title}</p>
					<p>{cardMessage.desc}</p>
				</div>
			</div>	
		}
	}
}
ImageCard.propTypes={
	cardMessage:PropTypes.object
}
export default ImageCard;