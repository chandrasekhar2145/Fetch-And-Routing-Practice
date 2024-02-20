// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const blogItem = props => {
  const {blogData} = props
  const {id, avatarUrl, imageUrl, topic, title, author} = blogData

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />
          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default blogItem
