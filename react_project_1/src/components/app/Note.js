import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteElement() {
    console.log();
  }

  handleRemove(event) {
    event.preventDefault();
    // console.log(event.target.id);

    let confirmMe = window.confirm(
      'Are you sure that you want to remove this note?'
    );
    if (confirmMe === true) {
      this.deleteElement();
      // console.log(true);
    }
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
