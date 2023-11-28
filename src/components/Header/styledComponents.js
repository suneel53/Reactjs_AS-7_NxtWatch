import styled from 'styled-components'

export const NavCont = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 60px;
`

export const NavContentCont = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const NavLogoImage = styled.img`
  width: 60px;
  height: 20px;
  @media screen and (min-width: 576px) {
    width: 100px;
    height: 30px;
  }
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 30px;
  }
`

export const NavContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavSg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ProfileLogo = styled.img`
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
  font-size: 16px;
  padding: 10px 20px 10px 20px;
`
export const MenuBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  backgound-color: ${props => props.bgcolor};
  width: 300px;
  height: 300px;
`
export const ModalDesc = styled.p`
  font-size: 16px;
  color: ${props => props.color};
`
export const ButtonsContainers = styled.div`
  width: 60%
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CloseButton = styled.button`
  font-size: 16px;
  color: #94a3b8;
  border: 1px solid #94a3b8;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
export const MenuCloseButton = styled(CloseButton)`
  align-self: flex-end;
  background-color: ${props => props.bgColor};
`
export const ConfirmButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: #3b82f6;
  border: none;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
export const MenuSMCont = styled.div`
  width: 350px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const MenuOptions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
`
export const MenuSMLine = styled.li`
  background-color: ${props => props.bgcolor};
  display: flex;
  align-items: center;
`
export const MenuText = styled.p`
  font-size: 18px;
  margin-left: 15px;
  color: ${props => props.color};
`
