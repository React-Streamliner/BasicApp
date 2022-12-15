import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import './styles/styles.css';

import Header from './components/header';
import NewsList from "./components/news_list";
import JSON from './db.json';
import Footer from "./components/footer";


class App extends Component {

    state = {
        active: false,
        news: JSON,
        filtered: [],
        footerText: 'I am a happy footer.',
    }

    getKeywords = (event) => {
        let keywords = event.target.value
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1
        })
        this.setState({
            filtered: filtered
        })
    }

    changeColor = () => {
        this.setState({
            active: this.state.active ? false : true
        })
    }
    
    render() {
        const {filtered, news, active, footerText} = this.state
        return (
            <div>
                <Header 
                    active={active}
                    changeColor={this.changeColor}
                    keywords={this.getKeywords}
                />
                <NewsList
                    news={filtered.length === 0 ? news : filtered}>
                    <br/>
                    <div>I am children!</div>
                </NewsList>
                <Footer footerText={footerText}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
