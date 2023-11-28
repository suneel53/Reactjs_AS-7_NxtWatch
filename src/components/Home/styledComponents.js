import styled from 'styled-components'

export const HomeLeftAndRightCont = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const HomeLeftCont = styled.div`
  width: 250px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HomeRightCont = styled.div`
  color: ${props => props.color};
  width: 75%;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const HomeMainCont = styled.h1`
  font-color: ${props => props.color};
`
export const BannerCont = styled.div`
  display: ${props => props.displaybanner};
  width: 100%;
  height: 200px;
  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  justify-content: space-between;
  padding: 20px;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerButton = styled.button`
  padding: 5px 10px 5px 10px;
  border: 1px solid black;
  background: none;
`

export const BannerText = styled.p`
  font-size: 15px;
  color: black;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  cursor: pointer;
`
export const SearchCont = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 5px;
  margin: 10px;
  width: 60%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: ${props => props.color};
`
export const SearchIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
  cursor: pointer;
`
export const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
