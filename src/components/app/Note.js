import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note: el } = this.props;

    return (
      <li
        className='liElement'
        onClick={(event) => this.props.openModel(event, el)}
      >
        <p className='text'>Created at: {el.time}</p>
        <h4 className='title'>{el.title}</h4>
        <p className='text'>{el.text}</p>
        <button
          id={el.id}
          className='deleteBtn'
          onClick={(event) => this.props.onRemove(event)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Note;
