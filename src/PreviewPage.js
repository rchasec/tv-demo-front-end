import React, { Component } from 'react';
import './tvstyleforjs.css';

class PreviewPage extends Component {

    clickedshow1 = () => {
        console.log('Show 1')
    }
    clickedshow2 = () => {
        console.log('Show 2')
    }

    render = () => {
        return (
            <div>
                <section className="left">
                    <h2>Shows</h2>
                    <button type="button" onclick="clickedshow1()">Breaking Bad</button><br />
                    <button type="button" onclick="clickedshow2()">The Haunting of Hill House</button>
                </section>
                <section className="previewright">
                    <div><a>Breaking Bad</a><a>Rating: 4</a></div>
                    <div className="image">
                        <img src="./../breaking-bad-cover.jpg" alt="breaking bad cover"/>
                    </div>
                </section> 
            </div>
        )
    }
}

export default PreviewPage;