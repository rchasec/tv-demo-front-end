import React, { Component } from 'react';

class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (<button></button>)
        }

    }
    render = () => {

        return(
        <div>
            <button>{this.props.name}</button>
            {this.renderDelete()}
        </div>
        )
        
    }
}

export default TVShow