import React, { Component } from 'react'
import TVShow from "./TVShow"
import './style.css'

export default class ManagePage extends Component {
    tvShowSelected = () => {
        console.log('tvShowSelected')
    }
    tvShowDeleted = () => {
        console.log('tvShowDeleted')
    }
    saveTVShow = () => {
        console.log('saveTVShow')
    }

    render = () => {
        return (
            <div>
                <section className="left">
                    <h2>Shows</h2>
                    <TVShow allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}/>
                </section>
                <section className="manageright">
                    <div className="right">
                        <p>New/Edit Show</p>
                    </div>
                    <form>
                        <h3>
                            Name:<input type="text" /><br/>
                            Rating:<input type="text" /><br/>
                            Image URL:<input type="text" /><br/>
                            <button type="button" onClick={this.saveTVShow()}>Submit</button>
                        </h3>
                    </form>
                </section>
            </div>
        )
    }
}
