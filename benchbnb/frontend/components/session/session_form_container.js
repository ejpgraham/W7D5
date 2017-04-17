import {connect} from 'react-redux';
import {signup, logout, login} from '../../actions/session_actions.js';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ((ownProps.location.pathname === '/login') ? 'login' : 'signup')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   const processForm = (ownProps.location.pathname === '/login')? login : signup;
 // if login or signup
  return {
    processForm: (user) => dispatch(processForm(user))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
