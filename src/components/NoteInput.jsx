import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;
    if (value.length <= this.state.charLimit) {
      this.setState(() => {
        return {
          title: value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }

  render() {
    const remainingChars = this.state.charLimit - this.state.title.length;

    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <input
          type='text'
          placeholder='Judul'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <p className='note-input__title__char-limit'>
          Remaining characters: {remainingChars}
        </p>
        <input
          type='text'
          placeholder='Tuliskan catatan disini...'
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type='submit'>Buat</button>
      </form>
    );
  }
}

export default NoteInput;
