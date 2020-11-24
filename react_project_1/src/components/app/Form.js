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
      text: this.state.note.trim(),
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

  deleteElement(id) {
    console.log(id);
    console.log(this.state.noteList);
  }

  handleRemove(event) {
    event.preventDefault();

    let confirmMe = window.confirm(
      'Are you sure that you want to remove this note?'
    );
    if (confirmMe) {
      this.deleteElement(event.target.id);
    }
  }

  render() {
    const ulNotesList = this.state.noteList.map((el) => (
      <Note
        key={el.id}
        note={el}
        onRemove={(event) => {
          this.handleRemove(event);
        }}
      ></Note>
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
              required
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
