import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Tutorial Search</label>
                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.term} placeholder="Search" aria-label="Search"></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;