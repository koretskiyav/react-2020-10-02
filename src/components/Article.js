import React, { Component } from 'react';
import App from './App';

class Article extends Component {
  state = {
    isOpen: true,
  };

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && <section>{article.text}</section>;
    return (
      <div>
        <h2>
          {article.title}
          <button onClick={this.handleClick}>{this.state.isOpen}</button>
        </h2>
        {body}
        <h3>creation date: {new Date(article.date).toString()}</h3>
      </div>
    );
  }

  handleClick = () => {
    console.log('---', 'Click');
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

export default Article;
