import React, { Component } from 'react';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization, withEmailVerification } from '../session';
import { withFirebase } from '../../../Firebase';
import { PasswordForgetForm } from '../passwordForget';
import PasswordChangeForm from '../passwordChange';

const SIGN_IN_METODS = [
  {
    id: 'password',
    provider: null,
  },
  {
    id: 'google.com',
    provider: 'googleProvider',
  },
  {
    id: 'facebook.com',
    provider: 'facebookProvider',
  },
  {
    id: 'twitter.com',
    provider: 'twitterProvider',
  },
];

const AccounPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Cuenta:{authUser.email}</h1>
        <PasswordForgetForm/>
        <PasswordChangeForm/>
        <LoginManagement authUser={ authUser }/>
      </div>
    )}
  </AuthUserContext.Consumer>
);

class LoginManagementBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateSignInMetods: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchSignInMetods();
  }

  fetchSignInMetods= () => {
    this.props.firebase.auth
    .fetchSignInMetodsForEmail(
      this.props.authUser.email
    )
    .then(
      activateSignInMetods =>
      this.setState({
        activateSignInMetods,
        stateError: null,
      }),
    )
    .catch(
      error => this.setState({
        error,
      })
    );
  };

  onSocialLoginLink= provider => {
    this.props.firebase.auth.currentUser
    .linkWithPopup(
      this.props.firebase[provider]
    )
    .then(
      this.fetchSignInMetods
    )
    .catch(
      error => this.setState({
        error,
      })
    );
  };

  onDefaultLoginLink= password => {
    const Credential = this.props.firebase.emailAuthProvider.credential(
      this.props.authUser.email, password
    );
    this.props.firebase.auth.currentUser
    .linkAndRetrieveDataWithCredential(
      credential
    )
    .then(
      this.fetchSignInMetods
    )
    .catch(
      error => this.setState({
        error,
      })
    );
  };

  onUnlink = providerId => {
    this.props.firebase.auth.currentUser
    .unlink(
      providerId
    )
    .then(
    this.fetchSignInMetods
    )
    .catch(
      error => this.setState({
      error,
    })
    );
  };

  render() {
    const {
      activateSignInMetods,
      error,
    } = this.state;
    return (
      <div>
        <h1>Metodo de inicio de sesión:</h1>
        <ul>
          {SIGN_IN_METODS.map(signInMetod => {
            const onlyOneLeft = activateSignInMetods.lenght === 1;
            const isEnable = activateSignInMetods.includes(signInMetod.id);
            return (
              <li key = {signInMetod.id}>
              {signInMetod.id === 'password' ? (
                <DefaultLoginToggle
                onlyOneLeft = {onlyOneLeft}
                isEnable = { isEnable }
                signInMetod = {signInMetod}
                onLink = { this.onDefaultLoginLink}
                onUnlink = { this.onUnlink }/>
              ) : (
              <SocialLoginToggle
              onlyOneLeft = {onlyOneLeft}
              isEnable = { isEnable }
              signInMetod = {signInMetod}
              onLink = { this.onSocialLoginLink}
              onUnlink = { this.onUnlink }/>
            )
            }
              </li>
            );
          })}
        </ul>
        {error && error.message}
      </div>
    );
  }
}
const SocialLoginToggle = ({
  onUnlink,
  onLink,
  signInMetod,
  isEnable,
  onlyOneLeft,
}) => isEnable ? (
  <button type='button' onClick={() => onUnlink(signInMetod.id)} disable={ onlyOneLeft }>
    desactivar { signInMetod.id }
  </button>
) : (
  <button type='button' onClick={() => onLink(signInMetod.provider)}>
    Link { signInMetod.id }
  </button>
);
class DefaultLoginToggle extends Component{
  constructor(props) {
    super(props);
    this.state = {
      passwordOne: '',
      passwordTwo: '',
    };
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onLink(this.state.passwordOne);
    this.setState({
      passwordOne: '',
      passwordTwo: '',
    });
  };

  onChange = event => {
    this.setState({ [
      event.target.name
    ]: event.target.value,
    });
  };

  render() {
    const {
      onUnlink,
      signInMetod,
      isEnable,
      onlyOneLeft,
    } = this.props;
    const {
      passwordOne,
      passwordTwo,
    } = this.state;
    const isInvalid =
    passwordOne !==
    passwordTwo || passwordOne === '';
    return isEnable ? (
      <button type='button' onClick={() => onUnlink(signInMetod.id)} disable={ onlyOneLeft }>
        desactivar { signInMetod.id }
      </button>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input name='passwordOne' value={ passwordOne } onChange={this.onChange} type='password' placeholder='nueva contraseña'/>
        <input name='passwordTwo' value={ passwordTwo } onChange={this.onChange} type='password' placeholder='Confirmar'/>
        <button disable={isInvalid} type='submit'>
          Link { signInMetod.id }
        </button>
      </form>
    );
  }
}
const LoginManagement = withFirebase(LoginManagementBase);
const condition = authUser => !!authUser;

export default Compose(withEmailVerification, withAuthorization(condition))(AccounPage);
