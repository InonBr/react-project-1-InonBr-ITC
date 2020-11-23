import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove(event) {
    event.preventDefault();
    console.log('stuff');
  }

  render() {
    const { note: el } = this.props;

    return (
      <li className='liElement'>
        <p className='text'>{el.time}</p>
        <p className='text'>{el.text}</p>
        <button id={el.id} onClick={this.handleRemove}>
          Delete
        </button>
      </li>
    );
  }
}

export default Note;
