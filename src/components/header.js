import React, { Component } from "react";

class Header extends Component {

    state = {
        title: 'The keywords are:',
        keywords: '',
        count: 0,
    }

    inputChange = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    addOne() {
        this.setState((state, props) => ({ 
            count: state.count + 1
        }))
    }

    render() {
        return (
            <header>
                <div className="logo" onClick={() => console.log('I was clicked')}>Logo</div>
                <input onChange={this.inputChange}/>
                <br/>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
                <br/>
                <div>{this.state.count}</div>
                <button onClick={() => this.addOne()}>Add One</button>
            </header>
        )
    }
}


export default Header;