import React, { Component } from 'react';
import { render } from 'react-dom';

import 'whatwg-fetch';

import '../css/style.css';

import keenImage from '../assets/keen.png';

import { getServiceData } from './service';

export default class AmazonS3 extends Component {

	componentWillMount() {
		getServiceData();
	}
  
	render() {
		return (
		  <div>
		    Amazon
		    <img src={ keenImage } alt='Amazon' />
		  </div>
		);
	}
}

render(<AmazonS3 />, document.getElementById('app'));
