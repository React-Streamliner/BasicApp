import React, { Component } from "react";

const Header = (props) => {
    return (
        <header className={props.active ? 'active' : 'not-active'}>
            <div className="logo" onClick={() => console.log('I was clicked')}>Code News:</div>
            <input onChange={props.keywords}/>
            <button onClick={props.changeColor}>Change it</button>
        </header>
    )
}


export default Header;