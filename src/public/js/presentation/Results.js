import React from 'react';
import { connect } from 'react-redux';
import { addTrack } from '../actions/dashboardActions';

const Results = props => {

  const results = props.searchResults.map( (item, i) => (
	<div key={i} className='trackContainer' onClick={() => props.addTrack(item)} >
	  <img src={item.snippet.thumbnails.default.url} className='trackCover' />
	  <p className='trackTitle'>{item.snippet.title}</p>
	</div>
  ))

  return (
	<div id='results'>
	  <div id='resultsContainer'>
		{results}
	  </div>
	</div>
  )
}

const mapStateToProps = reducers => ({
  queue: reducers.queue
});

const mapDispatchToProps = {
  addTrack
};


export default connect(mapStateToProps, mapDispatchToProps)(Results);
