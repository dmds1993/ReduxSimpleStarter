import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../weather_list/actions';

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange (event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit (event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }

    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="O placeholder"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                {console.log(this.props.teste)}
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secundary">Submit
                    </button>
                </span>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

const mapStateToProps = (state) => {
    return {
        teste: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
