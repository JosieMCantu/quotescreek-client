import React, { Component } from 'react'
import { getQuote, updateQuote, deleteQuote } from './api-utils'

export default class DetailPage extends Component {
    state = {
        quote: '',
        name: '',
        funny_level: 100,
        category_id: 1,
        image: false,
    }
    componentDidMount = async () => {
        const quote = await getQuote(this.props.match.params.id);
        console.log(quote);
        this.setState({
            quote: quote.quote,
            name: quote.name,
            funny_level: quote.funny_level,
            image: quote.image,
            category_id: quote.category_id,
            id: quote.id
        })
    }

    handleNewQuote = (e) => this.setState({ quote: e.target.value })
    handleNameChange = (e) => this.setState({ name: e.target.value })
    handleFunnylevel = (e) => this.setState({ funny_level: Number(e.target.value) })
    handleImageChange = () => {
        this.setState({ image: !this.state.image })
    }
    handleCategoryChange = (e) => this.setState({ category_id: Number(e.target.value) })

    handleSubmit = async (e) => {
        e.preventDefault();
        await updateQuote(this.props.match.params.id, this.state);
        this.props.history.push('/quotesCreek');
    }
    handleDelete = async (e) => {
        e.preventDefault();
        await deleteQuote(this.props.match.params.id, this.state);
        this.props.history.push('/quotesCreek');
    }


    render() {
        return (
            <div>
                <h1>Detail Page</h1>
                <form>
                    <label>The Quote:
                        <input value={this.state.quote} onChange={this.handleNewQuote} />
                    </label>
                    <label>Character Name:
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>Funny Level:
                        <input value={this.state.funny_level} onChange={this.handleFunnylevel} />
                    </label>
                    <label>Is there an image?
                        <input onChange={this.handleImageChange} type="checkbox" checked={this.state.image} />
                    </label>
                    <label>Category of character
                        <select value={this.state.category_id} onChange={this.handleCategoryChange}>
                            <option value={1}>Star</option>
                            <option value={2}>Main</option>
                            <option value={3}>Secondary</option>
                        </select>
                    </label>
                    <button onClick={this.handleSubmit}>Update it!</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </form>
            </div >
        )
    }
}
