import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatusCont,
  PlayVideoStatus,
  PlayVideoDot,
  PlaySocialButtonsCont,
  SocialButton,
  ButtonText,
  BtnCont,
  Hrline,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscriber,
  ChannelDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const PlayVideoView = props => {
  const {videoDetails, clickLiked, clickDisliked, isLiked, isDisliked} = props
  const onClickLike = () => {
    clickLiked()
  }
  const onClickDislike = () => {
    clickDisliked()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideos, savedVideos} = value
        const textcolor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(each => each.id === videoDetails.id)
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconColor = isSaved ? '#2563eb' : textcolor
        const onClickSave = () => {
          addVideos(videoDetails)
        }
        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textcolor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusCont>
              <PlayVideoStatus color={textcolor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsCont>
                <BtnCont>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </BtnCont>
                <BtnCont>
                  <SocialButton
                    type="button"
                    color={isDisliked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText>Dislike</ButtonText>
                  </SocialButton>
                </BtnCont>
                <BtnCont>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnCont>
              </PlaySocialButtonsCont>
            </PlayVideoStatusCont>
            <Hrline />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textcolor}>{videoDetails.name}</ChannelName>
                <ChannelSubscriber color={textcolor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscriber>
                <ChannelDescription color={textcolor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView
