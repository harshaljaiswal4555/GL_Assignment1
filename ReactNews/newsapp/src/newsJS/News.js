
import React, { Component } from 'react'
import axios from 'axios'
import '../cssfile/style.css'
import Details from './Details'

import { Link } from 'react-router-dom'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2ba149359a8f46ab872a09d8c5f8452d')
      .then(res => {
        console.log(res.data.articles)
        this.setState({ news: res.data.articles })

      })
  }

  render() {

    return (
      <div>

        <h1 className="heading">News Application</h1>
        <div className="mainholder">

          {this.state.news.map((author, index) => {
            return (
              <div key={index} >
                <Details
                  key={index}
                  pageIndex={index + 1}
                  image={author.urlToImage}
                  title={author.title}
                  news={author} />
              </div>

            )

          }
          )
          }
        </div>
      </div>
    )
  }

}


export default News