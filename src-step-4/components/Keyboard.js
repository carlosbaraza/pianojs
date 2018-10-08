import React from 'react';
import {Key} from './Key';
import {Controls} from './Controls';

const OCTAVES = [4, 5, 6, 7];

export class Keyboard extends React.Component {
    constructor() {
        super();

        this.audio = {};

        const audioContext = new window.AudioContext();
        this.audio.audioContext = audioContext;

        const masterGainNode = audioContext.createGain();
        masterGainNode.connect(audioContext.destination);
        masterGainNode.gain.value = 1;
        this.audio.masterGainNode = masterGainNode;

        this.state = {
            mode: 'Synth'
        };
    }

    toggleMode = () => {
        this.setState({
            mode: this.state.mode === 'Synth' ? 'Piano' : 'Synth'
        });
    };

    renderKey(octave, note) {
        return <Key octave={octave} note={note} audio={this.audio} />;
    }

    render() {
        return (
            <div className="Keyboard">
                <Controls mode={this.state.mode} toggleMode={this.toggleMode} />

                <ul className="Keyboard__Keys">
                    {OCTAVES.map((octave) => (
                        <React.Fragment key={octave}>
                            {this.renderKey(octave, 'C')}
                            {this.renderKey(octave, 'C#')}
                            {this.renderKey(octave, 'D')}
                            {this.renderKey(octave, 'D#')}
                            {this.renderKey(octave, 'E')}
                            {this.renderKey(octave, 'F')}
                            {this.renderKey(octave, 'F#')}
                            {this.renderKey(octave, 'G')}
                            {this.renderKey(octave, 'G#')}
                            {this.renderKey(octave, 'A')}
                            {this.renderKey(octave, 'A#')}
                            {this.renderKey(octave, 'B')}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        );
    }
}
