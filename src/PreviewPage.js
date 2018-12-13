import React, { Component } from 'react'
import TVShow from "./TVShow"
import './style.css'

export default class PreviewPage extends Component {
    tvShowSelected = () => {
        console.log('tvShowSelected')
    }
    render = () => {
        return (
            <div>
                <section className="left">
                    <h2>Shows</h2>
                    <TVShow selectHandler={this.tvShowSelected}/>
                </section>
                <section className="previewright">
                    <div><p>Breaking Bad</p><p>Rating: 4</p></div>
                    <div className="image">
                        <img src="./../breaking-bad-cover.jpg" alt="breaking bad cover"/>
                    </div>
                </section> 
            </div>
        )
    }
}
