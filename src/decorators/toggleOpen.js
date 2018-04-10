import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  // Упрощённый синтаксиси ES7 без constructor
  state = {
    isOpen: false
  }

  render() {
    // return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    // или
    return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} ref = {this.getRef}/>
  }

  toggleOpen = (ev) => {
    ev && ev.preventDefault && ev.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getRef = (ref) => {
    console.log('---', ref)
  }
}
