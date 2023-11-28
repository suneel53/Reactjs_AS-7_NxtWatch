import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {IoMenu} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import Popup from 'reactjs-popup'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

// <BsBrightnessHigh color="red" size={25} />

import {
  NavCont,
  NavContentCont,
  NavLogoImage,
  NavContainer,
  NavLg,
  NavSg,
  MenuBtn,
  ThemeBtn,
  ProfileLogo,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonsContainers,
  CloseButton,
  MenuCloseButton,
  ConfirmButton,
  MenuSMCont,
  MenuOptions,
  MenuSMLine,
  MenuText,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme, activeTab, changeTab} = value
          const color = isDarkTheme ? '#ffffff' : '#00306e'
          const bgcolor = isDarkTheme ? '#231f20' : '#f1f5f9'
          const activetabBg = isDarkTheme ? '#475569' : '#cbd5e1'
          const onChangeTheme = () => {
            toggleTheme()
          }
          const onClickHome = () => {
            changeTab('Home')
          }
          const onClickTrending = () => {
            changeTab('Trending')
          }
          const onClickGaming = () => {
            changeTab('Gaming')
          }
          const onClickSaved = () => {
            changeTab('Saved')
          }
          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          return (
            <NavCont bgColor={bgcolor}>
              <NavContentCont>
                <NavLogoImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <NavContainer>
                  <ThemeBtn
                    type="button"
                    onClick={onChangeTheme}
                    data-testid="theme"
                  >
                    {isDarkTheme ? (
                      <BsBrightnessHigh color="white" size={25} />
                    ) : (
                      <BsMoon size={25} />
                    )}
                  </ThemeBtn>
                  <NavLg>
                    <ProfileLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                    <Popup
                      modal
                      trigger={
                        <LogoutButton
                          color={color}
                          bgColor={bgcolor}
                          type="button"
                        >
                          Logout
                        </LogoutButton>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <ModalContainer bgcolor={bgcolor}>
                          <ModalDesc>
                            Are you sure, you want to logout?
                          </ModalDesc>
                          <ButtonsContainers>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>
                            <ConfirmButton
                              onClick={onClickLogout}
                              type="button"
                            >
                              Confirm
                            </ConfirmButton>
                          </ButtonsContainers>
                        </ModalContainer>
                      )}
                    </Popup>
                  </NavLg>
                  <NavSg>
                    <Popup
                      modal
                      trigger={
                        <MenuBtn type="button">
                          <IoMenu size={25} color={color} />
                        </MenuBtn>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <MenuSMCont bgColor={bgcolor}>
                          <MenuCloseButton
                            type="button"
                            bgColor={bgcolor}
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            <IoMdClose color={color} size={25} />
                          </MenuCloseButton>
                          <MenuOptions>
                            <Link to="/">
                              <MenuSMLine
                                key="home"
                                onClick={onClickHome}
                                bgcolor={
                                  activeTab === 'Home' ? activetabBg : 'none'
                                }
                              >
                                <AiFillHome
                                  color={
                                    activeTab === 'Home' ? '#ff0b37' : '#909090'
                                  }
                                  size={30}
                                />
                                <MenuText color={color}>Home</MenuText>
                              </MenuSMLine>
                            </Link>
                            <Link to="/trending">
                              <MenuSMLine
                                bgcolor={
                                  activeTab === 'Trending'
                                    ? activetabBg
                                    : 'none'
                                }
                                key="trending"
                                onClick={onClickTrending}
                              >
                                <HiFire
                                  color={
                                    activeTab === 'Trending'
                                      ? '#ff3b37'
                                      : '#909090'
                                  }
                                  size={30}
                                />
                                <MenuText color={color}>Trending</MenuText>
                              </MenuSMLine>
                            </Link>
                            <Link to="/gaming">
                              <MenuSMLine
                                bgcolor={
                                  activeTab === 'Gaming' ? activetabBg : 'none'
                                }
                                key="gaming"
                                onClick={onClickGaming}
                              >
                                <SiYoutubegaming
                                  color={
                                    activeTab === 'Gaming'
                                      ? '#ff3b37'
                                      : '#909090'
                                  }
                                  size={30}
                                />
                                <MenuText color={color}>Gaming</MenuText>
                              </MenuSMLine>
                            </Link>
                            <Link to="/saved-videos">
                              <MenuSMLine
                                bgcolor={
                                  activeTab === 'Saved' ? activetabBg : 'none'
                                }
                                key="saved"
                                onClick={onClickSaved}
                              >
                                <CgPlayListAdd
                                  color={
                                    activeTab === 'Saved'
                                      ? '#ff3b37'
                                      : '#909090'
                                  }
                                  size={30}
                                />
                                <MenuText color={color}>Saved</MenuText>
                              </MenuSMLine>
                            </Link>
                          </MenuOptions>
                        </MenuSMCont>
                      )}
                    </Popup>
                    <Popup
                      modal
                      trigger={
                        <MenuBtn type="button">
                          <FiLogOut size={25} color={color} />
                        </MenuBtn>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <ModalContainer>
                          <ModalDesc color={color}>
                            Are you sure, you want to logout?
                          </ModalDesc>
                          <ButtonsContainers>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>
                            <ConfirmButton
                              onClick={onClickLogout}
                              type="button"
                            >
                              Confirm
                            </ConfirmButton>
                          </ButtonsContainers>
                        </ModalContainer>
                      )}
                    </Popup>
                  </NavSg>
                </NavContainer>
              </NavContentCont>
            </NavCont>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default withRouter(Header)
