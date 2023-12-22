import { ProfileWrapp, ProfileDescription,ProfileName, ProfileAvatar, ProfileTag, ProfileLocation, ProfileParam, ProfileParamItems, ProfileLabel, ProfileQuantity } from "./Profile.styled";
// import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats:{followers,views,likes} }) => {
  return (

<ProfileWrapp>
  <ProfileDescription>
    <ProfileAvatar
      src={avatar}
      alt="User avatar"
          />
    <ProfileName>{username}</ProfileName>
    <ProfileTag>{'@'+tag}</ProfileTag>
    <ProfileLocation>{location}</ProfileLocation>
  </ProfileDescription>
 
  <ProfileParam>
    <ProfileParamItems>
      <ProfileLabel>Followers</ProfileLabel>
      <ProfileQuantity>{followers}</ProfileQuantity>
    </ProfileParamItems>
    <ProfileParamItems>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuantity>{views}</ProfileQuantity>
    </ProfileParamItems>
    <ProfileParamItems>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuantity>{likes}</ProfileQuantity >
    </ProfileParamItems>
  </ProfileParam>
</ProfileWrapp>
  );
};