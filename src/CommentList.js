import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {isOpen} = this.state
    return (
      <div>
        <button onClick = {this.toggleOpen}>{isOpen ? 'Скрыть' : 'Показать'}</button>
        <div>{this.getBody()}</div>
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getBody() {
    if(!this.state.isOpen) return null

    const {comments} = this.props
    if(!comments || comments.length) return <p>No comments</p>

    const commentElement = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>)

    return (
      <ul>{commentElement}</ul>
    )
  }
}

// export default function CommentList({comments}) {
//   const commentElement = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>)
//
//   return (
//     <ul>{commentElement}</ul>
//   )
// }
