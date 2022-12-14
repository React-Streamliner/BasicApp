import React, { Component } from "react";

class Header extends Component {

    state = {
        active: false,
        title: 'The keywords are:',
        keywords: '',
        count: 0,
    }

    inputChange = (event) => {
        const value = event.target.value === '' ? false : true
        this.setState({
            keywords: event.target.value,
            active: value,
        })
    }

    addOne() {
        this.setState((state, props) => ({ 
            count: state.count + 1
        }))
    }

    render() {
        return (
            //<header style={{background: `${this.state.active ? 'red' : 'blue'}`}}>
            <header className={this.state.active ? 'active' : 'not-active'}>
                <div className="logo" onClick={() => console.log('I was clicked')}>Code News:</div>
                <input onChange={this.inputChange}/>
            </header>
        )
    }
}


export default Header;