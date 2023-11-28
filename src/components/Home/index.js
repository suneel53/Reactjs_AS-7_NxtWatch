import {Component} from 'react'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  HomeLeftAndRightCont,
  HomeLeftCont,
  HomeRightCont,
  BannerCont,
  BannerLeftPart,
  BannerRightPart,
  BannerImage,
  BannerButton,
  BannerText,
  BannerCloseButton,
  SearchCont,
  SearchInput,
  SearchIconCont,
  LoaderCont,
} from './styledComponents'

import Header from '../Header'
import FailView from '../FailView'
import NavigationBar from '../NavigationBar'
import HomeVideos from '../HomeVideos'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const apiStatusConst = {
  initial: 'INITIAL',
  succuss: 'SUCCESS',
  fail: 'FAIL',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    displayBanner: 'flex',
    searchInput: '',
    homeVideos: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConst.succuss,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConst.fail,
      })
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  renderLoadingView = () => (
    <LoaderCont data-testid="loader">
      <Loader type="ThreeDots" color="#ob69ff" height="50" width="50" />
    </LoaderCont>
  )

  renderFailView = () => <FailView onRetry={this.onRetry} />

  renderVideosView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderHomeVideos = () => {
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

  onCloseBanner = () => {
    this.setState({displayBanner: 'none'})
  }

  render() {
    const {displayBanner, searchInput} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? '#ffffff' : '#231f20'
          const bgcolor = isDarkTheme ? '#181818' : '#f9f9f9'
          const display = displayBanner === 'flex' ? 'flex' : 'none'
          return (
            <>
              <Header />
              <HomeLeftAndRightCont bgColor={bgcolor}>
                <HomeLeftCont color={color}>
                  <NavigationBar />
                </HomeLeftCont>
                <HomeRightCont color={color} data-testid="home">
                  <BannerCont displaybanner={display} data-testid="banner">
                    <BannerLeftPart>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerLeftPart>
                    <BannerRightPart>
                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <AiOutlineClose size={25} />
                      </BannerCloseButton>
                    </BannerRightPart>
                  </BannerCont>
                  <SearchCont>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      color={color}
                      value={searchInput}
                      onChange={this.onChangeInput}
                    />
                    <SearchIconCont
                      data-testid="searchButton"
                      onClick={this.getSearchResults}
                    >
                      <AiOutlineSearch size={20} />
                    </SearchIconCont>
                  </SearchCont>
                  {this.renderHomeVideos()}
                </HomeRightCont>
              </HomeLeftAndRightCont>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
