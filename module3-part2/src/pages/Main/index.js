import React, { Fragment, Component } from 'react';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="user/repository"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>facebook/react</strong>
              {' '}
(A declarative, efficient, and flexible JavaScript
              library for building user interfaces.)
            </p>
            <a href="http://github.com/facebook/react">Access</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
