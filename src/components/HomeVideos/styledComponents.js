import styled from 'styled-components'

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 786px) {
    margin-left: 20px;
  }
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 786px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingcolor};
`
export const NoVideosNote = styled.p`
  font-size: 18px;
  color: ${props => props.notecolor};
`
export const RetryButn = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: white;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  cursor: pointer;
`
