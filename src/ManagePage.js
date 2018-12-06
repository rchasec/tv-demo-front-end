import React, { Component } from 'react';
import './tvstyleforjs.css';

class ManagePage extends Component {

    clickedshow1 = () => {
        console.log('Show 1')
    }
    clickedshow2 = () => {
        console.log('Show 2')
    }
    clickedshow1delete = () => {
        console.log('Show 1 Delete')
    }
    clickedshow2delete = () => {
        console.log('Show 2 Delete')
    }
    render = () => {
        return (
            <div>
                <section className="left">
                    <h2>Shows</h2>
                    <button type="button" onclick="clickedshow1()">Breaking Bad</button><input type="button" value="x" onclick="clickedshow1delete()" /><br />
                    <button type="button" onclick="clickedshow2()">The Haunting of Hill House</button><input type="button" value="x" onclick="clickedshow2delete()" />
                </section>
                <section className="manageright">
                    <div className="right">
                        <a>New/Edit Show</a>
                    </div>
                    <form>
                        <h3>
                            Name:<input type="text" /><br />
                            Rating:<input type="text" /><br />
                            Image URL:<input type="text" /><br />
                            <button type="button">Create/Update</button>
                        </h3>
                    </form>

                </section>
            </div>
        )
    }
}

export default ManagePage