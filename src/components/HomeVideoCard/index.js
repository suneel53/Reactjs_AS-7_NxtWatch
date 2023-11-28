import {Link} from 'react-router-dom'
import {
  ListItem,
  ThumbnailImg,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponent'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import './index.css'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? 'white' : 'black'
        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={color}>{title}</Title>
                  <ChannelName color={color}>{name}</ChannelName>
                  <ViewsAndDate color={color}>
                    {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
