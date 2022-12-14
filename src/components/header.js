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
                <div className="logo" onClick={() => console.log('I was clicked')}>Code News:</div>
                <input onChange={this.inputChange}/>
            </header>
        )
    }
}


export default Header;