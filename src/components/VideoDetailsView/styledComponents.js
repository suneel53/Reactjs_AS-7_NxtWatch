import styled from 'styled-components'

export const VideoDetailsViewCont = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const VideoDetailsViewLeftCont = styled.div`
  width: 250px;
  height: 90%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const VideoDetailsViewRightCont = styled.div`
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
