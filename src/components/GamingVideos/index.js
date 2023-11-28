import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  TrendingAndNavigationCont,
  TrendingViewLeftCont,
  TrendingRightCont,
  LoaderCont,
  GamingVideoTitle,
  GamingIconCont,
  GamingText,
  GamingVideosList,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailView from '../FailView'
import GamingVideoCard from '../GamingVideoCard'

const apiStatusConst = {
  initial: 'INITIAL',
  succuss: 'SUCCESS',
  fail: 'FAIL',
  inProgress: 'INPROGRESS',
}

class GamingVideos extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConst.succuss,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConst.fail,
      })
    }
  }

  renderVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosList>
        {gamingVideos.map(each => (
          <GamingVideoCard key={each.id} videoDetails={each} />
        ))}
      </GamingVideosList>
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
        return this.renderVideosView()
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
            <div>
              <Header />
              <TrendingAndNavigationCont bgColor={bgColor}>
                <TrendingViewLeftCont>
                  <NavigationBar />
                </TrendingViewLeftCont>
                <TrendingRightCont data-testid="gaming">
                  <GamingVideoTitle>
                    <GamingIconCont>
                      <SiYoutubegaming color="#ff0000" size={35} />
                    </GamingIconCont>
                    <GamingText color={textColor}>Gaming</GamingText>
                  </GamingVideoTitle>
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

export default GamingVideos
