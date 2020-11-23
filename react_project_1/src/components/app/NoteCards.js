function NoteCards(props) {
  const handleRemove = () => {
    console.log('Hello');
  };

  return <ul> {props.children}</ul>;
}

export default NoteCards;
