import {CgPlayListAdd} from 'react-icons/cg'

import {
  TrendingAndNavigationCont,
  TrendingViewLeftCont,
  TrendingRightCont,
  SavedVideoTitle,
  SavedTitleIconCont,
  SavedText,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgcolor = isDarkTheme ? 'black' : 'white'
      const textcolor = isDarkTheme ? 'white' : '#231f20'
      const headingcolor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const notecolor = isDarkTheme ? '#e2e8f0' : '#475569'
      return (
        <>
          <Header />
          <TrendingAndNavigationCont bgColor={bgcolor}>
            <TrendingViewLeftCont>
              <NavigationBar />
            </TrendingViewLeftCont>
            <TrendingRightCont data-testid="savedVideos">
              <SavedVideoTitle>
                <SavedTitleIconCont>
                  <CgPlayListAdd color="#ff0000" size={35} />
                </SavedTitleIconCont>
                <SavedText color={textcolor}>Saved Videos</SavedText>
              </SavedVideoTitle>
              {savedVideos.length > 0 ? (
                <SavedVideoList>
                  {savedVideos.map(each => (
                    <VideoCard key={each.id} videoDetails={each} />
                  ))}
                </SavedVideoList>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading headingcolor={headingcolor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote notecolor={notecolor}>
                    You can save your videos while watching them
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              )}
            </TrendingRightCont>
          </TrendingAndNavigationCont>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
