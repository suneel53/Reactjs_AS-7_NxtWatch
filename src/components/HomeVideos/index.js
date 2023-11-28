import {
  VideoCardList,
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButn,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length
  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingcolor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const notecolor = isDarkTheme ? '#e2e8f0' : '#475569'
        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(each => (
              <HomeVideoCard video={each} key={each.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingcolor={headingcolor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote notecolor={notecolor}>
              Try different keywords or remove search filter
            </NoVideosNote>
            <RetryButn type="button" onClick={onClickRetry}>
              Retry
            </RetryButn>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos
