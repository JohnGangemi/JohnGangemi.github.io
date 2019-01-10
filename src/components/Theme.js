import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import '../styles/Theme.css';

class Theme extends Component {
    constructor(props) {
        super(props);

        this.themeRef = React.createRef();
        this.state = {
            activeOption: true,
            visible: false
        }

        this.toggleActiveOption = this.toggleActiveOption.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.registerDarkTheme = this.registerDarkTheme.bind(this);
        this.registerLightTheme = this.registerLightTheme.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    registerLightTheme() {
        if (!this.state.activeOption) {
            this.props.themes.light();
            this.toggleActiveOption();
        }
    }

    registerDarkTheme() {
        if (this.state.activeOption) {
            this.props.themes.dark();
            this.toggleActiveOption();
        }
    }

    toggleActiveOption() {
        this.setState(state => ({
            activeOption: !state.activeOption
        }));
    }

    toggleVisibility() {
        this.setState(state => ({
            visible: !state.visible
        }));
    }

    handleClickOutside(event) {
        if (this.state.visible) {
            if (this.themeRef && !this.themeRef.current.contains(event.target)) {
                this.toggleVisibility();
            }
        }
    }

    render() {
        const activeOption = this.state.activeOption;
        const visible = this.state.visible;

        return(
            <div className={visible ? "Theme show-theme" : "Theme"} ref={this.themeRef}>
                <div className="Theme-options">
                    <div className={activeOption ? "Theme-option active-option" : "Theme-option"} onClick={this.registerLightTheme}>
                        <div className="Theme-option-select"/>
                        light
                    </div>
                    <div className="option-spacer"/>
                    <div className={activeOption ? "Theme-option" : "Theme-option active-option"} onClick={this.registerDarkTheme}>
                        <div className="Theme-option-select"/>
                        dark
                    </div>
                </div>
                <div className="Theme-bumper" onClick={this.toggleVisibility}>
                    <FontAwesomeIcon className="Theme-icon" icon={faPalette} size="lg"/>
                </div>
            </div>
        );
    }
}

export default Theme;
