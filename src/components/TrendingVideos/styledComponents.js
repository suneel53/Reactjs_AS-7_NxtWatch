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
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingIconCont = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 40px;
  }
`
export const TrendingText = styled.h1`
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TrendingVideosList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
`
