import ReactModal from 'react-modal';
import React from 'react';

import Note from './Note';
import ModlePopUp from './ModlePopUp';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitleText: '',
      noteText: '',
      noteList: [],
      noteId: 0,
      showModal: false,
      noteInModal: -1,
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
        return parseInt(id) !== element.id;
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

  showModal = (event, el) => {
    if (event.target.className !== 'deleteBtn') {
      const indexOfelement = this.state.noteList.findIndex(
        (note) => parseInt(el.id) === note.id
      );

      if (indexOfelement !== -1) {
        this.setState({ showModal: true, noteInModal: indexOfelement });
      }
    }
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const ulNotesList = this.state.noteList.map((el) => (
      <Note
        key={el.id}
        note={el}
        onRemove={(event) => {
          this.handleRemove(event);
        }}
        openModel={(event, el) => {
          this.showModal(event, el);
        }}
      ></Note>
    ));

    let modal;
    if (this.state.noteInModal !== -1) {
      modal = (
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}
          style={customStyles}
        >
          <ModlePopUp noteData={this.state.noteList[this.state.noteInModal]} />
        </ReactModal>
      );
    }

    return (
      <div>
        <div className='form'>
          <form method='post' onSubmit={(event) => this.onSubmit(event)}>
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

        {this.state.showModal && modal}
      </div>
    );
  }
}

export default Form;
