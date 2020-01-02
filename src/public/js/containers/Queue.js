import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Actions */
import { setCurrentVideo, addTrack } from '../actions/dashboardActions';

/* Components */
import Track from '../presentation/Track';
import Turntable from './Turntable';

class Queue extends Component {

  render() {
	socket.on('reco', video => {
	  console.log('New reco: ', video);
	  this.props.addTrack(video);
	});

	const tracks = this.props.dashboard.queue.map( (track, i) => (
	  <div className='trackContainer' onClick={() => this.props.setCurrentVideo(track, i)} key={i}>
		<Track track={track} removeVideo={this.props.removeVideo} index={i} />
	  </div>
	));

	return (
	  <div id='queue'>
		<Turntable addTrack={this.props.addTrack} status={this.props.status}/>
		<div id='trackList'>
		  {tracks}
		</div>
	  </div>
		)
  }
}

const mapStateToProps = reducers => ({
  dashboard: reducers.dashboard
});

const mapDispatchToProps = {
  setCurrentVideo,
  addTrack
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
