import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginFormContainer,
  LoginLogo,
  LoginInputCont,
  LoginLabel,
  LoginInput,
  LoginCheckboxCont,
  LoginBtn,
  ErrorMessage,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class Login extends Component {
  state = {
    inputuname: '',
    inputPass: '',
    showPassword: false,
    errMsg: '',
    showErrMsg: false,
  }

  onChangeUname = event => {
    this.setState({inputuname: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPass: event.target.value})
  }

  showPasswordType = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  onSubmitFail = errMsg => {
    this.setState({showErrMsg: true, errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {inputuname, inputPass} = this.state
    const details = {username: inputuname, password: inputPass}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.onSubmitFail(data.error_msg)
    }
  }

  renderUserNameCont = () => {
    const {inputuname} = this.state
    return (
      <>
        <LoginLabel htmlFor="uname">USERNAME</LoginLabel>
        <LoginInput
          type="text"
          id="uname"
          value={inputuname}
          onChange={this.onChangeUname}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordCont = () => {
    const {inputPass, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <LoginLabel htmlFor="pass">PASSWORD</LoginLabel>
        <LoginInput
          type={inputType}
          value={inputPass}
          onChange={this.onChangePassword}
          id="pass"
          placeholder="Password"
        />
        <LoginCheckboxCont>
          <input
            type="checkbox"
            id="checkbox"
            onChange={this.showPasswordType}
          />
          <label htmlFor="checkbox">Show Password</label>
        </LoginCheckboxCont>
      </>
    )
  }

  render() {
    const {showErrMsg, errMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgcolor = isDarkTheme ? 'black' : 'white'
          const textColor = isDarkTheme ? 'white' : '#231f20'
          const formcolor = isDarkTheme ? '#231f20' : '#f1f5f9'
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer bgcolor={bgcolor}>
              <LoginFormContainer
                onSubmit={this.onSubmitForm}
                formcolor={formcolor}
              >
                <LoginLogo src={logoUrl} alt="logo" />
                <LoginInputCont>{this.renderUserNameCont()}</LoginInputCont>
                <LoginInputCont>{this.renderPasswordCont()}</LoginInputCont>
                <LoginBtn type="submit">Login</LoginBtn>
                {showErrMsg && <ErrorMessage>*{errMsg}</ErrorMessage>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
