import React from 'react';

class ModlePopUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteId: props.noteData.id,
      noteTitleText: props.noteData.title,
      noteText: props.noteData.text,
    };
  }

  handleChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  }

  render() {
    const { noteId, noteTitleText, noteText } = this.state;

    return (
      //   <div>
      <form
        method='post'
        onSubmit={(event) =>
          this.props.updateSubmit(event, noteId, noteTitleText, noteText)
        }
      >
        <div className='formFlex'>
          <input
            type='text'
            className='title'
            name='noteTitleText'
            placeholder='Enter a Title'
            value={this.state.noteTitleText}
            onChange={(event) => this.handleChange(event)}
          />

          <textarea
            rows='5'
            cols='40'
            name='noteText'
            type='text'
            placeholder='Enter a Note'
            className='inputText'
            value={this.state.noteText}
            onChange={(event) => this.handleChange(event)}
            required
          />
        </div>
        <input type='submit' value='Update' className='btn' />
      </form>
      //{/* <div>
      // <h1>title: {this.state.noteTitleText}</h1>
      //</div>
      //<div>
      // <h1>text: {this.state.noteText}</h1>
      // </div> */}
      //{/* </div> */}
    );
  }
}

export default ModlePopUp;
