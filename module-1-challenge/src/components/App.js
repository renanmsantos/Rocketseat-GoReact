import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'User 1',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: '3 min. ago.',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'User 2',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: '30 min. ago.',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div>{posts && posts.map(post => <Post key={post.id} data={post} />)}</div>
      </div>
    );
  }
}
