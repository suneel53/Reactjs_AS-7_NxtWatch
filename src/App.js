import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectRoute'
import VideoDetailsView from './components/VideoDetailsView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
    activeTab: 'Home',
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideos = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(each => each.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    console.log('savedvideos')
    console.log(savedVideos)
    return (
      <>
        <ThemeAndVideoContext.Provider
          value={{
            isDarkTheme,
            activeTab,
            savedVideos,
            toggleTheme: this.toggleTheme,
            changeTab: this.changeTab,
            addVideos: this.addVideos,
          }}
        >
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoDetailsView}
            />
            <ProtectedRoute exact path="/trending" component={TrendingVideos} />
            <ProtectedRoute exact path="/gaming" component={GamingVideos} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeAndVideoContext.Provider>
      </>
    )
  }
}

export default App
