import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 95%;
  max-width: 1110px;
  margin: auto;
  background-color: ${props => props.bgcolor};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: ${props => props.formcolor};
  @media screen and (min-width: 768px) {
    width: 450px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
  }
`

export const LoginLogo = styled.img`
  width: 120px;
  height: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 50%;
  }
`
export const LoginInputCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;
`
export const LoginCheckboxCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 90%;
`
export const LoginLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`

export const LoginInput = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const LoginBtn = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
