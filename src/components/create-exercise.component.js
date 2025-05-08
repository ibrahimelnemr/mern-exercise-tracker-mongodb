import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({});
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({});
    const [errors, setErrors] = useState({});
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
        if (response.data.length > 0) {
    const validateForm = () => {
      let errors = {};
      if (!username) errors.username = 'Username is required';
      if (!description) errors.description = 'Description is required';
      if (!duration || isNaN(duration) || parseFloat(duration) <= 0) errors.duration = 'Duration must be a positive number';
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      {/* Error messages */}
    const validateForm = () => {
      let errors = {};
      <div style={{ color: 'red' }}>{errors.username}</div>
      if (!description) errors.description = 'Description is required';
      <div style={{ color: 'red' }}>{errors.description}</div>
      if (!duration || isNaN(duration)) errors.duration = 'Duration is required and must be a number';
      <div style={{ color: 'red' }}>{errors.duration}</div>
      if (!date) errors.date = 'Date is required';
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
      })
      .catch((error) => {
        console.log(error);
      if (validateForm()) {
      })

        <div style={{ color: 'red' }}>{errors.description}</div>
  }
        <div style={{ color: 'red' }}>{errors.duration}</div>

        <div style={{ color: 'red' }}>{errors.date}</div>
  onChangeUsername(e) {
    const validateForm = () => {
      } else {
        console.error('Form validation failed:', errors);
      }
      let newErrors = {};
      if (!description) newErrors.description = 'Description is required';
      if (!duration || isNaN(duration)) newErrors.duration = 'Duration is required and must be a number';
          <div style={{ color: 'red' }}>{errors.description}</div>
      if (!date) newErrors.date = 'Date is required';
          <div style={{ color: 'red' }}>{errors.duration}</div>
      setErrors(newErrors);
          <div style={{ color: 'red' }}>{errors.date}</div>
      if (validateForm()) {
      return Object.keys(newErrors).length === 0;
        console.log('Exercise added successfully!');
        window.location = '/';
    };
    if (!description || !duration || !date) {
      setErrorMessage('Description, duration, and date are required');
      return;
    }
    if (isNaN(parseInt(duration))) {
      setErrorMessage('Duration must be a number');
      if (validateForm()) {
      return;
    }
      } else {
        console.log('Form validation failed', errors);
      }
    try {
      new Date(date);
    } catch (error) {
      setErrorMessage('Invalid date format');
      return;
    }
      } else {
        console.log('Form validation failed', errors);
      }
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}