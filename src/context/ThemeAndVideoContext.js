import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  toggleTheme: () => {},
  changeTab: () => {},
  addVideos: () => {},
})

export default ThemeAndVideoContext
