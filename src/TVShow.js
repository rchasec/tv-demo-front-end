import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TVShow extends Component {
    static PropTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.Bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func,
    }
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (<button onClick={this.props.deleteHandler}>-</button>)
        }
    }

    render = () => {
        console.log(this.props.name)
        return(
        <div>
            <button onClick={this.props.selectHandler}>{this.props.name}</button>
            {this.renderDelete()}
        </div>
        )  
    }
}