import React, { Component } from 'react';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      course: '',
      isSubmitted: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Course:
            <input
              type="text"
              name="course"
              value={this.state.course}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
