import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  TrendingAndNavigationCont,
  TrendingViewLeftCont,
  TrendingRightCont,
  LoaderCont,
  TrendingVideoTitle,
  TrendingIconCont,
  TrendingText,
  TrendingVideosList,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailView from '../FailView'
import VideoCard from '../VideoCard'

const apiStatusConst = {
  initial: 'INITIAL',
  succuss: 'SUCCESS',
  fail: 'FAIL',
  inProgress: 'INPROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trndingVideos: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        trndingVideos: updatedData,
        apiStatus: apiStatusConst.succuss,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConst.fail,
      })
    }
  }

  renderTrendingVideosView = () => {
    const {trndingVideos} = this.state
    return (
      <TrendingVideosList>
        {trndingVideos.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </TrendingVideosList>
    )
  }

  renderLoadingView = () => (
    <LoaderCont data-testid="loader">
      <Loader type="ThreeDots" color="#ob69ff" height="50" width="50" />
    </LoaderCont>
  )

  onRetry = () => {
    this.getVideos()
  }

  renderFailView = () => <FailView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.succuss:
        return this.renderTrendingVideosView()
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
          const bgColor = isDarkTheme ? 'Black' : 'white'
          const textColor = isDarkTheme ? 'white' : '#231f20'
          return (
            <div data-testid="trending">
              <Header />
              <TrendingAndNavigationCont bgColor={bgColor}>
                <TrendingViewLeftCont>
                  <NavigationBar />
                </TrendingViewLeftCont>
                <TrendingRightCont>
                  <TrendingVideoTitle>
                    <TrendingIconCont>
                      <HiFire color="#ff0000" size={35} />
                    </TrendingIconCont>
                    <TrendingText color={textColor}>Trending</TrendingText>
                  </TrendingVideoTitle>
                  {this.renderTrendingVideos()}
                </TrendingRightCont>
              </TrendingAndNavigationCont>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingVideos
