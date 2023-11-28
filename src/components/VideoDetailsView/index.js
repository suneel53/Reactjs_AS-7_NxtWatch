import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  VideoDetailsViewCont,
  VideoDetailsViewLeftCont,
  VideoDetailsViewRightCont,
  LoaderCont,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailView from '../FailView'
import PlayVideoView from '../PlayVideoView'

const apiStatusConst = {
  initial: 'INITIAL',
  succuss: 'SUCCESS',
  fail: 'FAIL',
  inProgress: 'INPROGRESS',
}

class VideoDetailsView extends Component {
  state = {
    apiStatus: apiStatusConst.initial,
    videoDetails: [],
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formatData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    viewCount: data.video_details.view_count,
    thumbnailUrl: data.video_details.thumbnail_url,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formatData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConst.succuss,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConst.fail,
      })
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisliked={this.clickDisliked}
        isLiked={isLiked}
        isDisliked={isDisliked}
      />
    )
  }

  renderLoadingView = () => (
    <LoaderCont data-testid="loader">
      <Loader type="ThreeDots" color="#ob69ff" height="50" width="50" />
    </LoaderCont>
  )

  onRetry = () => {
    this.setState({}, this.getVideoDetails)
  }

  renderFailView = () => <FailView onRetry={this.onRetry} />

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.succuss:
        return this.renderPlayVideoView()
      case apiStatusConst.fail:
        return this.renderFailView()
      case apiStatusConst.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgcolor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />

              <VideoDetailsViewCont bgColor={bgcolor}>
                <VideoDetailsViewLeftCont>
                  <NavigationBar />
                </VideoDetailsViewLeftCont>
                <VideoDetailsViewRightCont data-testid="videoItemDetails">
                  {this.renderVideoDetailsView()}
                </VideoDetailsViewRightCont>
              </VideoDetailsViewCont>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoDetailsView
