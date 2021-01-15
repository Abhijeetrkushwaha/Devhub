import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
// import Dummy from '../images/chatapp.png';
import axios from 'axios';

class News extends Component {

  state = {
    news: []
  }

  componentDidMount() {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3ce02af4258c49809b5548d912eaa129`
      )
      .then((res) => {

        this.setState({
          news: res.data.articles
        })

        // console.log(this.state.news);

      }).catch((err) => {
        console.log(err);
      })
  }
  
  render() {

    const { user } = this.props;

    const news = this.state.news.length ? (
      this.state.news.map((news, id) => {
        return (
          <div className="col s12 m6 l4" key={id}>
            <div className="card purple darken-1">
              <div className="card-content white-text">
                <div className="card-img">
                  <img src={news.urlToImage} alt={news.source.id}/>
                </div>
                <span className="card-title">{news.title.slice(0, 10)}...</span>
                <p>{news.description.slice(0, 50)}....</p>
                <a href={news.url} rel="noopener noreferrer" target="_blank" className="news-btn btn btn-small white purple-text">View</a>
              </div>
              <div className="card-action white-text">
                Author: {news.author}
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        <h5 className="center">Loading NEWS...</h5>
      </div>
    )

    const userIsLogin = !user ?   <Redirect to="/" /> : (
      <div className="row">
        {news}
      </div>
    )
  
    return (
      <div className="container p-top">
        {userIsLogin}
      </div>
    )
  }
}

export default News;
