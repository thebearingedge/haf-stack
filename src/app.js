import React, { Component, Fragment } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    fetch('/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
  }
  render() {
    return (
      <Fragment>
        <h1>Hello, { this.props.name }!</h1>
        <ul>
          {
            this.state.todos.map(todo =>
              <li key={todo.id}>{ todo.task }</li>
            )
          }
        </ul>
      </Fragment>
    )
  }
}
