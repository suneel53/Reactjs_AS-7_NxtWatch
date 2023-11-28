import styled from 'styled-components'

export const NavigationLeftCont = styled.div`
  width: 95%;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  background-color: ${props => props.bgcolor};
`

export const NavOptions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  margin-top: 0px;
  list-style-type: none;
`

export const NavLineCont = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.bgcolor};
  cursor: pointer;
  text-decoration: none;
`

export const NavText = styled.p`
  font-size: 18px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  align-items: center;
`
export const ContactHeading = styled.p`
  font-size: 25px;
  fond-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactIconImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 50px;
`
export const ContactNote = styled.p`
  font-size: 18px;
  color: ${props => props.color};
`
