import React, { Component } from 'react'
import TVShow from "./TVShow"
import './style.css'

export default class ManagePage extends Component {
    state = { 
        nameInProgress: "",
        ratingInProgress: "",
        imageUrlInProgress: "",
        show: ""
    }

    tvShowSelected = () => {
        console.log('tvShowSelected')
        this.setState({ nameInProgress: this.state.show.name,
                        ratingInProgress: this.state.show.rating,
                        imageUrlInProgress: this.state.show.imageUrl
        })
    }
    tvShowDeleted = () => {
        console.log('tvShowDeleted')
        this.setState({ nameInProgress: "",
                        ratingInProgress: "",
                        imageUrlInProgress: ""
        })
    }

    saveTvShow = (e) => {
        e.preventDefault()
        this.setState({
            nameInProgress: "",
            ratingInProgress: "",
            imageUrlInProgress: "",
            show: {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                imageUrl: this.state.imageUrlInProgress
            }
        })
    }
    nameInProgress = (e) => {
        this.setState({ nameInProgress: e.target.value })
    }
    ratingInProgress = (e) => {
        this.setState({ ratingInProgress: e.target.value })
    }
    imageUrlInProgress = (e) => {
        this.setState({ imageUrlInProgress: e.target.value })
        console.log(e.target.value)
    }
    renderShows = () => {
        return(
            <TVShow name={this.state.show.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}/>
        )
    }

    render = () => {
        return (
            <div>
                <section className="left">
                    <h2>Shows</h2>
                   { this.renderShows() }
                </section>
                <section className="manageright">
                    <div className="right">
                        <p>New/Edit Show</p>
                    </div>
                    <form>
                        <h3>
                            Name:<input id="name" type="text" value={this.state.nameInProgress} onChange={this.nameInProgress}/><br/>
                            Rating:<input id="rating" type="text" value={this.state.ratingInProgress} onChange={this.ratingInProgress}/><br/>
                            Image URL:<input id="image url" type="text" value={this.state.imageUrlInProgress} onChange={this.imageUrlInProgress}/><br/>
                            <button type="button" onClick={this.saveTvShow}>Submit</button>
                        </h3>
                    </form>
                </section>
            </div>
        )
    }
}
