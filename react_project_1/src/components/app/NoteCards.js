// class NoteCards {
//   constructor(props) {
//     this.props = props;
//   }
// }

function NoteCards(props) {
  console.log(props.children);
  return <ul> {props.children}</ul>;
}

export default NoteCards;
