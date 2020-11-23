import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteElement(id) {
    console.log(id);
  }

  handleRemove(event) {
    event.preventDefault();

    let confirmMe = window.confirm(
      'Are you sure that you want to remove this note?'
    );
    if (confirmMe === true) {
      this.deleteElement(event.target.id);
    }
  }

  render() {
    const { note: el } = this.props;

    return (
      <li className='liElement'>
        <p className='text'>{el.time}</p>
        <p className='text'>{el.text}</p>
        <button id={el.id} onClick={this.handleRemove.bind(this)}>
          Delete
        </button>
      </li>
    );
  }
}

export default Note;
