import { connect } from 'react-redux';

// Actions
import { selectSong } from '../actions';

const SongList = ({ songs, selectSong }) => {
  const selectSongHandler = song => {
    selectSong(song);
  };

  // Jsx
  const songListEl = songs.map(song => (
    <div className="item" key={song.title}>
      <div className="right floated content">
        <button className="ui button primary" onClick={() => selectSongHandler(song)}>
          Select
        </button>
      </div>
      <div className="content">{song.title}</div>
    </div>
  ));

  return <div className="ui divided list">{songListEl}</div>;
};

const mapStateToProps = state => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
