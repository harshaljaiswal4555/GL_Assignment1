import React from 'react'
import '../cssfile/style.css'

const NewsBox = (props) => {
  console.log(props.location.state);
  const {
    title,
    urlToImage,
    author,
    description,
    content,
    publishedAt
  } = props.location.state.news
  return (
    <div className="singlenews">
      {/* {props.match.params.id} */}
      <div className="titleheading">{title}</div>
      <img className="images" src={urlToImage}></img>
      <div >{author}</div>
      <div >{description}</div>
      <div >{content}</div>
      <div >{publishedAt}</div>
    </div>
  )
}

export default NewsBox;