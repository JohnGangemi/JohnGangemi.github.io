import React, { Component } from 'react';
import '../styles/Theme.css';

class Theme extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeOption: true
        }

        this.toggleActiveOption = this.toggleActiveOption.bind(this);
        this.registerDarkTheme = this.registerDarkTheme.bind(this);
        this.registerLightTheme = this.registerLightTheme.bind(this);
    }

    registerLightTheme() {
        if (!this.state.activeOption) {
            this.props.light();
            this.toggleActiveOption();
        }
    }

    registerDarkTheme() {
        if (this.state.activeOption) {
            this.props.dark();
            this.toggleActiveOption();
        }
    }

    toggleActiveOption() {
        this.setState(state => ({
            activeOption: !state.activeOption
        }));
    }

    render() {
        const activeOption = this.state.activeOption;

        return(
            <div className="Theme">
                <div className="Theme-options">
                    <div className={activeOption ? "Theme-option active-option" : "Theme-option"} onClick={this.registerLightTheme}>
                        <div className="Theme-option-select"/>
                        light
                    </div>
                    <div className={activeOption ? "Theme-option" : "Theme-option active-option"} onClick={this.registerDarkTheme}>
                        <div className="Theme-option-select"/>
                        dark
                    </div>
                </div>
            </div>
        );
    }
}

export default Theme;
