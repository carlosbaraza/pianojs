import React from 'react';

const noteToClassName = {
    ['A']: 'Keyboard__Key white a',
    ['A#']: 'Keyboard__Key black as',
    ['B']: 'Keyboard__Key white b',
    ['C']: 'Keyboard__Key white c',
    ['C#']: 'Keyboard__Key black cs',
    ['D']: 'Keyboard__Key white d',
    ['D#']: 'Keyboard__Key black ds',
    ['E']: 'Keyboard__Key white e',
    ['F']: 'Keyboard__Key white f',
    ['F#']: 'Keyboard__Key black fs',
    ['G']: 'Keyboard__Key white g',
    ['G#']: 'Keyboard__Key black gs'
};

export class Key extends React.Component {
    constructor(props) {
        super();
        this.state = {
            pressed: false
        };
    }

    pressNote = (event) => {
        this.setState({
            pressed: true
        });
    };

    releaseNote = (event) => {
        if (this.state.pressed) {
            this.setState({pressed: false});
        }
    };

    render() {
        const {octave, note} = this.props;
        const classNames = this.state.pressed
            ? `pressed ${noteToClassName[note]}`
            : noteToClassName[note];

        return (
            <li
                className={classNames}
                onMouseUp={this.releaseNote}
                onMouseLeave={this.releaseNote}
                onPointerDown={this.pressNote}
                onPointerOut={this.releaseNote}
            />
        );
    }
}
