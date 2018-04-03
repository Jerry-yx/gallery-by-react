import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery.js';
import styles from './style/index.less'
//Index app
class Index extends	React.Component {
	render(){
		return <Gallery></Gallery>
	}
}
ReactDOM.render(<Index/>,document.getElementById('root'));
export default Index;

//render main component

