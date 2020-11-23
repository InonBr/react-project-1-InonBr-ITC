import React from 'react';
import ReactDOM from 'react-dom';
import NoteCards from './NoteCards';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      noteList: [],
      noteId: 0,
    };
  }

  getDate = () => {
    const date = new Date();
    console.log(date);
    return date;
  };

  onSubmit(event) {
    event.preventDefault();
    const date = new Date();
    const time = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    this.state.noteList.push({
      id: this.state.noteId + this.state.noteList.length,
      text: this.state.note,
    });

    const ulNotesList = this.state.noteList.map((el) => (
      <li key={el.id} id={el.id} className='liElement'>
        <p className='text'>{time}</p>
        <p className='text'>{el.text}</p>
        <button className='btn delete'>Delete</button>
      </li>
    ));

    ReactDOM.render(
      <NoteCards>
        <ul> {ulNotesList}</ul>
      </NoteCards>,
      document.querySelector('.divForList')
    );
  }

  onNoteChange(event) {
    const value = event.target.value;
    this.setState({ note: value });
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <textarea
            rows='5'
            cols='40'
            name='username'
            type='text'
            placeholder='Enter a Note'
            className='inputText'
            onChange={(event) => this.onNoteChange(event)}
          ></textarea>
          <input type='submit' value='Add Note' className='btn' />
        </form>
      </div>
    );
  }
}

export default Form;
