import React, { Component } from 'react'
import TVShow from "./TVShow"
import './style.css'
import PropTypes from 'prop-types'

export default class PreviewPage extends Component {
    static propTypes = {
        show: PropTypes.object.isRequired
    }
    state = {
        selectedShow: {
            nameSelected: "",
            ratingSelected: "",
            imageUrlSelected: ""
        }
    }
    tvShowSelected = () => {
        this.setState({
            selectedShow: {
                nameSelected: this.props.show.nameSaved,
                ratingSelected: this.props.show.ratingSaved,
                imageUrlSelected: this.props.show.imageUrlSaved
            }    
        })    
    }
    renderShows = () => {
        return(
           <TVShow name={this.props.show.nameSaved}
                   selectHandler={this.tvShowSelected}/> 
        )
    }
    render = () => {
        return (
            <div>
                <section className="left">
                    <h2>Shows</h2>
                    {this.renderShows()}
                </section>
                <section className="previewright">
                    <div>
                        <p>{this.state.selectedShow.nameSelected}</p>
                        <p>{this.state.selectedShow.ratingSelected}</p>
                    </div>
                    <div className="image">
                        <img src={this.state.selectedShow.imageUrlSelected}
                             alt="TV Show cover"/>
                    </div>
                </section> 
            </div>
        )
    }
}
