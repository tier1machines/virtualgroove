import React from 'react';
import { connect } from 'react-redux';
import { removeVideo } from '../actions/dashboardActions';


const Track = props => {
	return (
		<div className='track'>
			<div className='remove' onClick={() => props.removeVideo(props.dashboard.index)} >X</div>
			<img src={props.track.snippet.thumbnails.default.url} className='trackCover' />
			<p className='trackTitle'>{props.track.snippet.title}</p>
		</div>
	)
}

const mapStateToProps = reducers => ({
	dashboard: reducers.dashboard
})

const mapDispatchToProps = {
	removeVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);