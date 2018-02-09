import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import keenImage from '../assets/keen.png';

import { getServiceData } from './service';

import 'whatwg-fetch';

console.log( getServiceData );

export default class Hello extends Component {

	componentWillMount() {
		//this.props.

		//debugger;

		getServiceData();
	}
  
	render() {
		return (
		  <div>
		    Hello from react
		    <img src={ keenImage } alt='Commander Keen' />
		  </div>
		);
	}
}

render(<Hello />, document.getElementById('app'));
