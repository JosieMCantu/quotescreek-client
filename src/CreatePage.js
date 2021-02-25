import React, { Component } from 'react'
import { makeQuote } from './api-utils.js';

export default class CreatePage extends Component {
    state = {
        quote: '',
        name: '',
        funny_level: 100,
        category_id: 1,
        image: false,
    }

    handleNewQuote = (e) => this.setState({ quote: e.target.value })

    handleCharacterName = (e) => this.setState({ name: e.target.value })

    handleFunnylevel = (e) => this.setState({ funny_level: Number(e.target.value) })

    handleCategoryChange = (e) => this.setState({ category_id: Number(e.target.value) })

    handleImageChange = (e) => {
        this.setState({ image: !this.state.image })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await makeQuote(this.state);
        this.props.history.push('/quotesCreek');
    }


    render() {
        return (
            <div>
                <h1>Add a quote to the site!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>The Quote:
                        <input value={this.state.quote} onChange={this.handleNewQuote}></input>
                    </label>
                    <label>Character Name:
                        <input value={this.state.name} onChange={this.handleCharacterName}></input>
                    </label>
                    <label>Funny Level:
                        <input value={this.state.funny_level} onChange={this.handleFunnylevel}></input>
                    </label>
                    <label>Is there an image?
                        <input value={this.state.image} onChange={this.handleImageChange} type="checkbox"></input>
                    </label>
                    <label>Category of character
                        <select value={this.state.category_id} onChange={this.handleCategoryChange}>
                            <option value={1}>Star</option>
                            <option value={2}>Main</option>
                            <option value={3}>Secondary</option>
                        </select>
                    </label>
                    <button>Submit it!</button>
                </form>
            </div>
        )
    }
}
