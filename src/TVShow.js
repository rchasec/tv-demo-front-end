import React, { Component } from 'react'

export default class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (<button onClick={this.props.deleteHandler}>-</button>)
        }
    }

    render = () => {
        console.log(this.props.name)
        return(
        <div>
            <button onClick={this.props.selectHandler}>  {this.props.name}</button>
            {this.renderDelete()}
        </div>
        )  
    }
}
