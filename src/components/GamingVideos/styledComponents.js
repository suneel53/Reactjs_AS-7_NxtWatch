import styled from 'styled-components'

export const TrendingAndNavigationCont = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const TrendingViewLeftCont = styled.div`
  width: 250px;
  height: 90%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const TrendingRightCont = styled.div`
  width: 75%;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GamingIconCont = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 88px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const GamingText = styled.h1`
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
