import {
  TrendingAndNavigationCont,
  TrendingViewLeftCont,
  TrendingRightCont,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgcolor = isDarkTheme ? 'black' : 'white'
      const headingcolor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const notecolor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <TrendingAndNavigationCont bgColor={bgcolor}>
            <TrendingViewLeftCont>
              <NavigationBar />
            </TrendingViewLeftCont>
            <TrendingRightCont>
              <NoSavedVideosView>
                <NoSavedVideosImage src={notImageUrl} alt="not found" />
                <NoSavedVideosHeading headingcolor={headingcolor}>
                  Page Not Found
                </NoSavedVideosHeading>
                <NoSavedVideosNote notecolor={notecolor}>
                  We are sorry, the page you requested could not be found.
                </NoSavedVideosNote>
              </NoSavedVideosView>
            </TrendingRightCont>
          </TrendingAndNavigationCont>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
