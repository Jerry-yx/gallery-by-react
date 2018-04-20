import React from 'react';
import styles from '../style/index.less'

class ImageController extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.turnCard = this.turnCard.bind(this);
	}
	handleClick(e){
		this.props.clickPic(e.target.id);
	}
	turnCard(e){
		this.props.clickOrder(e.target.id);
	}
	render(){
		let num = this.props.num;
		let controllerCircle=[];
		for(let i=0;i<num;i++){
			controllerCircle.push(<li id={i} key={i} className={styles.controllerCircle} onClick={(e)=>{this.handleClick(e)}}></li>)
		}
		return <ul className={styles.controller}>
			<li className={styles.prev} id={'prev'} onClick={(e)=>{this.turnCard(e)}}></li>
			{controllerCircle}
			<li className={styles.next} id={'next'}  onClick={(e)=>{this.turnCard(e)}}></li>
		</ul>
	}
}

export default ImageController;