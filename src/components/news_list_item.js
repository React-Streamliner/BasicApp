import React, { Component } from "react";

class NewsListItem extends Component {

    render(){
        return (
            <div className="news_item">
                <h3>{this.props.item.title}</h3>
                <div>
                    {this.props.item.feed}
                </div>
            </div>
        )
    }
}

export default NewsListItem;