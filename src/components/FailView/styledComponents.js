import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailedHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingcolor}
  text-align: center;
`

export const FailedNote = styled.p`
  font-size: 25px;
  color: ${props => props.notecolor}
  text-align: center;
`
export const RetryBtn = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  color: white;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  cursor: pointer;
`
