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
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoSavedVideosHeading = styled.h1`
  font-size: 25px;
  text-align: center;
  color: ${props => props.headingcolor};
`
export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NoSavedVideosNote = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${props => props.notecolor};
`
