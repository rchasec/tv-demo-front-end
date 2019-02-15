import React, { Component } from 'react'
import TVShow from "./TVShow"
import './style.css'
import PropTypes from 'prop-types'

export default class ManagePage extends Component {
    static propTypes = {
        show: PropTypes.object.isRequired,
        tvShowDeleted: PropTypes.func.isRequired,
        saveTvShow: PropTypes.func.isRequired
    }
    state = { 
        nameInProgress: "name placeholder",
        ratingInProgress: "rating placeholder",
        imageUrlInProgress: "URL placeholder"
    }

    tvShowSelected = () => {
        this.setState({
            nameInProgress: this.props.show.nameSaved,
            ratingInProgress: this.props.show.ratingSaved,
            imageUrlInProgress: this.props.show.imageUrlSaved
        })
    }
    tvShowDeleted = () => {
        console.log('tvShowDeleted')
        this.props.tvShowDeleted()
    }
    saveTvShow = (e) => {
        e.preventDefault()
        this.props.saveTvShow({
            nameSaved: this.state.nameInProgress,
            ratingSaved: this.state.ratingInProgress,
            imageUrlSaved: this.state.imageUrlInProgress
        })
        this.setState({
            nameInProgress: "",
            ratingInProgress: "",
            imageUrlInProgress: "",
        })
    }
    nameInput = (e) => {
        this.setState({ nameInProgress: e.target.value })
    }
    ratingInput = (e) => {
        this.setState({ ratingInProgress: e.target.value })
    }
    imageUrlInput = (e) => {
        this.setState({ imageUrlInProgress: e.target.value })
        console.log(e.target.value)
    }
    renderShows = () => {
        return(
            <TVShow name={this.props.show.nameSaved}
                    allowDelete={true}
                    selectHandler={this.tvShowSelected}
                    deleteHandler={this.tvShowDeleted}/>
        )
    }

    render = () => {
        return (
            <div>
                <section className="left">
                    <h2>Shows</h2>
                   {this.renderShows()}
                </section>
                <section className="manageright">
                    <div className="right">
                        <p>Create/Edit Show</p>
                    </div>
                    <form>
                        <h3>
                            Name:<input id="name"
                                        type="text"
                                        value={this.state.nameInProgress}
                                        onChange={this.nameInput}/><br/>
                            Rating:<input id="rating"
                                          type="text"
                                          value={this.state.ratingInProgress}
                                          onChange={this.ratingInput}/><br/>
                            Image URL:<input id="image url"
                                             type="text"
                                             value={this.state.imageUrlInProgress}
                                             onChange={this.imageUrlInput}/><br/>
                            <button type="button"
                                    onClick={this.saveTvShow}>
                                    Submit
                                    </button>
                        </h3>
                    </form>
                </section>
            </div>
        )
    }
}
