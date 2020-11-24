import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note: el } = this.props;

    return (
      <li className='liElement'>
        <p className='text'>Created at: {el.time}</p>
        <p className='text'>{el.text}</p>
        <button id={el.id} onClick={(event) => this.props.onRemove(event)}>
          Delete
        </button>
      </li>
    );
  }
}

export default Note;
