import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import Song from '../audio/song.mp3';
import '../styles/Music.css';

class Music extends Component {
    constructor(props) {
        super(props);

        this.musicRef = React.createRef();
        this.state = {
            visible: false
        }

        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    toggleVisibility() {
        this.setState(state => ({
            visible: !state.visible
        }));
    }

    handleClickOutside(event) {
        if (this.state.visible) {
            if (this.musicRef && !this.musicRef.current.contains(event.target)) {
                this.toggleVisibility();
            }
        }
    }

    render() {
        const visible = this.state.visible;

        return(
            <div className={visible ? "Music show-music" : "Music"} ref={this.musicRef}>
                <div className="Music-content">
                    <p className="Music-track">sample of my music</p>
                    <audio src={Song} controls preload="metadata"/>
                </div>
                <div className="Music-bumper" onClick={this.toggleVisibility}>
                    <FontAwesomeIcon className="Music-icon" icon={faMusic} size="lg"/>
                </div>
            </div>
        );
    }
}

export default Music;
