import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const PlayVideoTitle = styled.p`
  font-size: 25px;
  color: ${props => props.color};
`
export const PlayVideoStatusCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PlayVideoStatus = styled.p`
  font-size: 12px;
  color: ${props => props.color};
`

export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  padding-left: 5px;
  padding-right: 5px;
`
export const PlaySocialButtonsCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: #2563eb;
  color: ${props => props.color};
  cursor: pointer;
`

export const ButtonText = styled.span`
  margin-left: 5px;
  color: #2563eb;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const BtnCont = styled.div`
  display: flex;
  background: none;
`
export const Hrline = styled.hr`
  border: 1px solid #909090;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  border-radius: 50px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-size: 15px;
  color: ${props => props.color};
  margin: 0px;
`
export const ChannelSubscriber = styled.p`
  font-size: 12px;
  color: ${props => props.color};
`
export const ChannelDescription = styled.p`
  font-size: 15px;
  color: ${props => props.color};
`
