import { Component } from 'react';
import './style.scss'

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      hasError: true,
      error, errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>Ошибка 404</h1>
      );
    }

    return this.props.children;
  }
}
