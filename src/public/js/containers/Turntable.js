import React, { Component } from 'react';
import axios from 'axios';

/* Components */
import Search from '../presentation/Search';
import Enso from '../presentation/Enso';
import Results from '../presentation/Results';

class Turntable extends Component {

  constructor() {
	super();
	this.state = {
	  searchTerm: '',
	  searchResults: [],
	}

	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
	this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit(e) {
	e.preventDefault();
	axios.post('/api/search/', { searchTerm: this.state.searchTerm })
		 .then( res => {
		   this.setState({ searchResults: res.data })
		 })
		 .catch( err => console.log(err) );
  }


  render() {
	return (
	  <div id='turntable'>
		<Search onChange={this.onChange} onSubmit={this.onSubmit} searchTerm={this.state.searchTerm} />
		<Enso status={this.props.status} />
		<Results searchResults={this.state.searchResults} addTrack={this.props.addTrack} />
	  </div>
	)
  }
}

export default Turntable;
