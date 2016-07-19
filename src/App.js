import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
  	super(props);
  	this.state={
  		title: 'hello world'
  	}
  }

  render() {
    return (
      <Text title={this.state.title} />
    );
  }
};

class Text extends Component {
	constructor(props){
	  super(props);
	}

	render() {
		return (
			<div>
				<strong>{this.props.title}</strong>
			</div>

		);
	}
}