import React, { Component } from 'react'
import { getQuotes } from './api-utils.js';
import Spinner from './Spinner.js';
import { Link } from 'react-router-dom';


export default class ListPage extends Component {
    state = {
        quotes: [],
        loading: false
    }
    componentDidMount = async () => {
        this.setState({ loading: true });

        const quotes = await getQuotes();
        this.setState({
            quotes: quotes,
            loading: false
        })
    };

    render() {
        return (
            <div className="quote-container">
                {this.state.loading && <Spinner />}
                {this.state.quotes.map(quote => <Link to={`/quotes/${quote.id}`} key={quote.quote}>
                    <div className="quote-item">
                        <p>Has Image: {quote.image
                            ? 'has an image'
                            : 'no image'}</p>
                        <p>Character: {quote.name}</p>
                        <p>Category: {quote.category}</p>
                        <p>Funny Level: {quote.funny_level}</p>
                        <p>Quote: {quote.quote}</p>
                    </div>
                </Link>
                )}
            </div>
        )
    }
}
