import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryBtn,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailView = props => {
  const {onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingcolor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailedView>
            <FailedImage src={failImageUrl} alt="failure view" />
            <FailedHeading headingcolor={headingcolor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedNote noteColor={noteColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailedNote>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </FailedView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailView
