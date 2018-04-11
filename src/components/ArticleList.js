import React, { Component } from 'react'
import Article from './Article'
import Akkrordion from '../decorators/Akkordion'
import PropTypes from 'prop-types'

class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    // from Akkordion
    openArticleId: PropTypes.string,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {
    const articlesElements = this.props.articles.map((article) => <li key = {article.id}>
      <Article
        article = {article}
        isOpen = {article.id === this.props.openArticleId}
        toggleOpen = {this.props.toggleOpenArticle(article.id)} />
    </li>)
    return (
      <ul>
        {articlesElements}
      </ul>
    )
  }
}

export default Akkrordion(ArticleList)
