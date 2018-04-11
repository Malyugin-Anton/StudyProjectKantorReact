import React, { Component } from 'react'

export default (OriginComponent) => class WrappedComponent extends Component {
  state = {
    openArticleId: null
  }

  render() {
    return <OriginComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
  }

  toggleOpenArticle = openArticleId => ev => {
    if(openArticleId === this.state.openArticleId) {
      this.setState({ openArticleId: null })
    } else {
        this.setState({ openArticleId })
    }
  }

}
