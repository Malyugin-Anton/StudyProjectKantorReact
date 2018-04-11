import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import akkrordion from '../decorators/akkordion'

class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    // from Akkordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  }

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props
    const articlesElements = articles.map((article) => <li key = {article.id}>
      <Article
        article = {article}
        isOpen = {article.id === openItemId}
        toggleOpen = {toggleOpenItem(article.id)} />
    </li>)
    return (
      <ul>
        {articlesElements}
      </ul>
    )
  }
}

export default akkrordion(ArticleList)
