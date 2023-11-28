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
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedTitleIconCont = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedText = styled.h1`
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin: 0px;
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
