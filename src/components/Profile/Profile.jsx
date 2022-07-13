import PropTypes from 'prop-types';
import { ProfileBox } from './Profile.styled';
import { Img } from './Profile.styled';
import { TagLocation } from './Profile.styled';
import { UserName } from './Profile.styled';
import { DescriptionBox } from './Profile.styled';
import { UlBox } from './Profile.styled';
import { LiBox } from './Profile.styled'
import { SpanBox } from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileBox>
  <DescriptionBox>
    <Img
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <TagLocation>@{tag}</TagLocation>
    <TagLocation>{location}</TagLocation>
  </DescriptionBox>

  <UlBox>
    <LiBox>
      <SpanBox>Followers</SpanBox>
      <SpanBox>{stats.followers}</SpanBox>
    </LiBox>
    <LiBox>
      <SpanBox>Views</SpanBox>
      <SpanBox>{stats.views}</SpanBox>
    </LiBox>
    <LiBox>
      <SpanBox>Likes</SpanBox>
      <SpanBox>{stats.likes}</SpanBox>
    </LiBox>
  </UlBox>
</ProfileBox>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}

// // Компонент должен принимать несколько пропсов с информацией о пользователе:

// username — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — ссылка на изображение
// stats — объект с информацией об активности
// Компонент должен создавать DOM элемент следующей структуры.