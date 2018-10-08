import React from 'react';
import {Key} from './Key';

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
    }

    renderKey(octave, note) {
        return <Key octave={octave} note={note} audio={this.audio} />;
    }

    render() {
        return (
            <div className="Keyboard">
                <div className="Controls" />

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
