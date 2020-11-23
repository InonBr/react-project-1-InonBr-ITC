import React from 'react';
import Note from './Note';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      noteList: [],
      noteId: 0,
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const date = new Date();
    const time = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    this.setState({ noteId: this.state.noteId + 1 });

    const newList = {
      id: this.state.noteId,
      text: this.state.note,
      time: time,
    };

    this.setState({
      noteList: [...this.state.noteList, newList],
    });
  }

  onNoteChange(event) {
    const value = event.target.value;
    this.setState({ note: value });
  }

  render() {
    const ulNotesList = this.state.noteList.map((el) => (
      <Note key={el.id} note={el}></Note>
    ));

    return (
      <div>
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
        <ul> {ulNotesList}</ul>
      </div>
    );
  }
}

export default Form;
