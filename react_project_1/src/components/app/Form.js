import React from 'react';
import Note from './Note';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitleText: '',
      noteText: '',
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
      title: this.state.noteTitleText.trim(),
      text: this.state.noteText.trim(),
      time: time,
    };

    this.setState({
      noteList: [...this.state.noteList, newList],
    });
  }

  onTitleChange(event) {
    const value = event.target.value;
    this.setState({ noteTitleText: value });
  }

  onNoteChange(event) {
    const value = event.target.value;
    this.setState({ noteText: value });
  }

  deleteElement(id) {
    this.setState({
      noteList: [...this.state.noteList].filter((element) => {
        return id != element.id;
      }),
    });
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
            <div className='formFlex'>
              <input
                type='text'
                className='title'
                name='title'
                placeholder='Enter a Title'
                onChange={(event) => this.onTitleChange(event)}
              />

              <textarea
                rows='5'
                cols='40'
                name='note'
                type='text'
                placeholder='Enter a Note'
                className='inputText'
                onChange={(event) => this.onNoteChange(event)}
                required
              />
            </div>
            <input type='submit' value='Add Note' className='btn' />
          </form>
        </div>
        <ul> {ulNotesList}</ul>
      </div>
    );
  }
}

export default Form;
