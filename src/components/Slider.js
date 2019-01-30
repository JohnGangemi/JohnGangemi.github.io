import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Swipe from 'react-easy-swipe';
import '../styles/Slider.css';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.progressRef = React.createRef();
        this.slidesRef = React.createRef();
        this.state = {
            progressWidth: 0,
            slideWidth: 0,
            maxSlide: 0,
            currentSlide: 0
        };

        this.initialize = this.initialize.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    initialize() {
        this.setState({
            progressWidth: this.progressRef.current.clientWidth,
            slideWidth: this.slidesRef.current.clientWidth,
            maxSlide: this.props.children.length - 1
        });
    }

    componentDidMount() {
        this.initialize();
        window.addEventListener('resize', this.initialize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.initialize);
    }

    nextSlide() {
        const maxSlide = this.state.maxSlide;
        const slide = this.state.currentSlide;

        if (slide < maxSlide) {
            this.setState({
                currentSlide: slide + 1
            });
        } else {
            this.setState({
                currentSlide: 0
            });
        }
    }

    previousSlide() {
        const slide = this.state.currentSlide;
        const endSlide = this.state.maxSlide;

        if (slide > 0) {
            this.setState({
                currentSlide: slide - 1
            });
        } else {
            this.setState({
                currentSlide: endSlide
            });
        }
    }

    render() {
        const widthOfSlide = this.state.slideWidth;
        const visibleSlide = this.state.currentSlide;
        const translateFactor = (visibleSlide * widthOfSlide);

        const slidesStyle = {
            transform: `translateX(-${translateFactor}px)`
        }

        const widthOfProgressBar = this.state.progressWidth;
        const progressBarDivison = widthOfProgressBar / (this.state.maxSlide + 1);
        const fillFactor = ((visibleSlide + 1) * progressBarDivison);

        const fillStyle = {
            width: `${fillFactor}px`
        }

        return (
            <div className="Slider" id="Slider">
                <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.previousSlide} allowMouseEvents={true}>
                    <div className="Slider-slides" ref={this.slidesRef} style={slidesStyle}>
                        {this.props.children}
                    </div>
                </Swipe>
                <div className="Slider-controls">
                    <FontAwesomeIcon icon={faChevronLeft} className="Slider-control" onClick={this.previousSlide}/>
                    <div className="Slider-progress" ref={this.progressRef}>
                        <div className="Slider-progress-fill" style={fillStyle}/>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="Slider-control" onClick={this.nextSlide}/>
                </div>
            </div>
        );
    }
}

export default Slider;
