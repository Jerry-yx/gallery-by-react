import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/card.less';

class ImageCard extends React.Component{

	render (){
		let cardMessage = this.props.cardMessage;
		return <div className={style.card}>
			<img src={cardMessage.path} title={cardMessage.fileName}></img>
			<p>{cardMessage.title}</p>
			<p>{cardMessage.desc}</p>
		</div>
	}
}
ImageCard.propTypes={
	cardMessage:PropTypes.object
}
export default ImageCard;