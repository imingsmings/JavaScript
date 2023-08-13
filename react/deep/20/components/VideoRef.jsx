class VideoRef extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  handleVideoStatus = (status) => {
    // 真实DOM元素
    const oVideo = this.videoRef.current;

    switch (status) {
      case 'pause':
        oVideo.pause();
        break;
      case 'play':
        oVideo.play();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="video">
        <video
          src="20/media/Apple.mp4"
          width="500"
          height="400"
          controls
          ref={this.videoRef}
        />
        <div className="btn-group">
          <button onClick={() => this.handleVideoStatus('pause')}>Pause</button>
          <button onClick={() => this.handleVideoStatus('play')}>Play</button>
        </div>
      </div>
    );
  }
}

export default VideoRef;
