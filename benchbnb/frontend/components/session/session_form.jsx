import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
      e.preventDefault();
      const user = this.state;
      this.props.processForm(user);
  }

  update(field){
    return (e) => {
      this.setState({[field]:e.currentTarget.value});
    };
  }

  render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          Welcome to BenchBnB!!
          Please {this.props.formType}
          <div>
            <label> Username:
              <input  type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      />
            </label>
            <label> Password:
              <input type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                  />
            </label>
          </div>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
