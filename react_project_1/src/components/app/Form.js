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

  onSubmit(event) {
    event.preventDefault();
    this.state.noteList.push({
      id: this.state.noteId + this.state.noteList.length,
      text: this.state.note,
    });

    const ulNotesList = this.state.noteList.map((el) => (
      <li key={el.id} id={el.id}>
        {el.text}
      </li>
    ));

    // console.log(this.state.note);
    // console.log(this.state.noteList);
    // <NoteCards>{ulNotesList}</NoteCards>;

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
