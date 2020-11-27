import React from 'react';

import Note from './Note';

class ModlePopUp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <form method='post'>
        <div className='formFlex'>
          <input
            type='text'
            className='title'
            name='title'
            placeholder='Enter a Title'
            value={this.props.noteData.title}
            // onChange={(event) => this.onTitleChange(event)}
          />

          <textarea
            rows='5'
            cols='40'
            name='note'
            type='text'
            placeholder='Enter a Note'
            className='inputText'
            value={this.props.noteData.text}
            // onChange={(event) => this.onNoteChange(event)}
            required
          />
        </div>
        <input type='submit' value='Update' className='btn' />
      </form>
    );
  }
}

export default ModlePopUp;
