import React, { Component } from 'react'

export default class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (<button onClick={this.props.deleteHandler}>Delete</button>)
        }
    }
    render = () => {
        return(
        <div>
            <button onClick={this.props.selectHandler}>show{this.props.name}</button>
            {this.renderDelete()}
        </div>
        )  
    }
}
