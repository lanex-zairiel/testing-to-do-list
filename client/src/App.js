import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      dbResponse: "",
      task: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  arr = [];

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  callDB() {
    fetch("http://localhost:9000/testDB")
      .then(res => res.text())
      .then(res => this.setState({ dbResponse: res }))
      .catch(err => err);
  }

  componentWillMount() {
    this.callDB();
    this.callAPI();
  }

  addToDB(item) {
    fetch()
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ task: event.target.value });
    this.arr.push(this.state.task);

    //add to db

  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  deleteRow(data) {
    var conf = window.confirm("Delete "+data+" from to-do list?");

    if(conf) {
      this.arr.splice(this.arr.indexOf(data), 1);
      this.setState({ task: this.arr });
    }
  }

  render() {
    var content = this.arr.map(
      (item) =>
        <div onClick={() => { this.deleteRow(item) }}
          className="rows"
          name={item.toString()}
          key={item.toString()}> {item}
        </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>Test App</h1>
        </header>

        <div className="app-body">

          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <label>
                Task:
                <input
                  type="text"
                  autoFocus
                  onFocus={e => e.target.value !== '' ? e.target.value = '' : ''}
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Enter Text Here" />
              </label>
              <input type="submit" value="Submit"></input>
            </form>
          </div>

          <div className="taskList">
            <div> {content} </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
