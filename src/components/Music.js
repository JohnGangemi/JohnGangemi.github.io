import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Song from '../audio/song.mp3';
import '../styles/Music.css';

class Music extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false,
            volume: 50,
            time: 0
        };

        this.audio = new Audio(Song);
        this.audio.preload = 'metadata';
        this.audio.volume = this.state.volume / 100;

        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.muteAudio = this.muteAudio.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.calculatePlaybackPosition = this.calculatePlaybackPosition.bind(this);
    }

    componentDidMount() {
        this.audio.addEventListener("timeupdate", this.calculatePlaybackPosition);
    }

    componentWillUnmount() {
        this.audio.removeEventListener("timeupdate");
    }

    playAudio() {
        if (!this.state.play) {
            this.setState({
                play: true
            });

            this.audio.play();
        }
    }

    pauseAudio() {
        if (this.state.play) {
            this.setState({
                play: false
            });

            this.audio.pause();
        }
    }

    muteAudio() {
        this.audio.volume = 0.0;
        this.setState({
            volume: 0
        });
    }

    setVolume(event) {
        const newVolume = event.target.value;
        this.audio.volume = newVolume / 100;
        this.setState({
            volume: newVolume
        });
    }

    calculatePlaybackPosition() {
        this.setState({
            time: ((this.audio.currentTime / this.audio.duration) * 100)
        });
    }

    render() {
        const timelineStyle = {
            width: `${this.state.time}%`
        };

        return(
            <div className="Music">
                <div className="Music-timeline" style={timelineStyle} />
                <div className="Music-controls">
                    <div className="Music-play">
                        {
                            this.state.play ? 
                            <FontAwesomeIcon className="Music-control" icon={faPause} size="lg" onClick={this.pauseAudio}/> : 
                            <FontAwesomeIcon className="Music-control" icon={faPlay} size="lg" onClick={this.playAudio}/>
                        }
                    </div>
                    <FontAwesomeIcon icon={faVolumeUp} size="1x"/>
                    <input className="Music-slider" type="range" min="0" max="100" defaultValue={this.state.volume} onChange={this.setVolume}/>
                </div>
            </div>
        );
    }
}

export default Music;
