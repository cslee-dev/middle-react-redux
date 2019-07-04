import React , {Component} from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }

    onInputChange(event){
        this.setState({
            term : event.target.value
        });
    }
}