import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

export class Controls extends React.Component {
    render() {
        return (
            <div className="Controls">
                <button onClick={this.props.toggleMode}>
                    <FaAngleLeft />
                </button>
                <button onClick={this.props.toggleMode}>
                    <FaAngleRight />
                </button>

                <div className="Controls__Screen">{this.props.mode}</div>
            </div>
        );
    }
}
