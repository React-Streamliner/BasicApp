import React, { Component } from "react";

class Life extends Component {

    constructor(props) {
        super(props)
        console.log('1')
    }

    static getDerivedStateFromProps() {
        console.log('2')
        return null
    }

     componentDidMount() {
        console.log('3')
     }

     componentWillUnmount() {
        console.log('4')
     }

    render() {
        console.log('5')
        return (
            <>
                Life
            </>
        )
    }
}

export default Life