import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.note);
  }

  onUsernameChange(event) {
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
            onChange={(event) => this.onUsernameChange(event)}
          ></textarea>
          <input type='submit' value='Add Note' className='btn' />
        </form>
      </div>
    );
  }
}

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       note: '',
//     };
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     // const value = event.target.value;
//     // console.log(value);
//     this.setState({ note: '' });
//   };

//   onNoteChange = (event) => {
//     const value = event.target.value;
//     this.setState({ note: value });
//     console.log(value);
//   };

//   render() {
//     return (
//       <form onSubmit={(event) => this.onSubmit(event)}>
//         <input name='note' type='text' />
//         <input type='submit' value='send' onChange={this.onNoteChange} />
//       </form>
//     );
//   }
// }

export default Form;
