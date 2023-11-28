import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {Link} from 'react-router-dom'

import {
  NavigationLeftCont,
  NavOptions,
  NavLineCont,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactIconImage,
  ContactNote,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class NavigationBar extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeTab} = value
          const color = isDarkTheme ? '#ffffff' : '#231f20'
          const bgcolor = isDarkTheme ? '#181818' : '#f9f9f9'
          const activetabBg = isDarkTheme ? '#475569' : '#cbd5e1'
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
          return (
            <NavigationLeftCont bgcolor={bgcolor}>
              <NavOptions>
                <Link to="/">
                  <NavLineCont
                    bgcolor={activeTab === 'Home' ? activetabBg : 'none'}
                    key="home"
                    onClick={onClickHome}
                  >
                    <AiFillHome
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      size={30}
                    />
                    <NavText color={color}>Home</NavText>
                  </NavLineCont>
                </Link>
                <Link to="/trending">
                  <NavLineCont
                    bgcolor={activeTab === 'Trending' ? activetabBg : 'none'}
                    key="trending"
                    onClick={onClickTrending}
                  >
                    <HiFire
                      color={activeTab === 'Trending' ? '#ff3b37' : '#909090'}
                      size={30}
                    />
                    <NavText color={color}>Trending</NavText>
                  </NavLineCont>
                </Link>
                <Link to="/gaming">
                  <NavLineCont
                    bgcolor={activeTab === 'Gaming' ? activetabBg : 'none'}
                    key="gaming"
                    onClick={onClickGaming}
                  >
                    <SiYoutubegaming
                      color={activeTab === 'Gaming' ? '#ff3b37' : '#909090'}
                      size={30}
                    />
                    <NavText color={color}>Gaming</NavText>
                  </NavLineCont>
                </Link>
                <Link to="/saved-videos">
                  <NavLineCont
                    bgcolor={activeTab === 'Saved' ? activetabBg : 'none'}
                    key="saved"
                    onClick={onClickSaved}
                  >
                    <CgPlayListAdd
                      color={activeTab === 'Saved' ? '#ff3b37' : '#909090'}
                      size={30}
                    />
                    <NavText color={color}>Saved</NavText>
                  </NavLineCont>
                </Link>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={color}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={color}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigationLeftCont>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default NavigationBar
