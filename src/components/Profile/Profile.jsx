import { ProfileWrapp, ProfileDescription,ProfileName, ProfileAvatar, ProfileTag, ProfileLocation, ProfileParam, ProfileParamItems, ProfileLabel, ProfileQuantity } from "./Profile.styled";
// import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (

<ProfileWrapp>
  <ProfileDescription>
    <ProfileAvatar
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
          />
    <ProfileName>Petra Marica</ProfileName>
    <ProfileTag>@pmarica</ProfileTag>
    <ProfileLocation>Salvador, Brasil</ProfileLocation>
  </ProfileDescription>

  <ProfileParam>
    <ProfileParamItems>
      <ProfileLabel>Followers</ProfileLabel>
      <ProfileQuantity>1000</ProfileQuantity>
    </ProfileParamItems>
    <ProfileParamItems>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuantity>2000</ProfileQuantity>
    </ProfileParamItems>
    <ProfileParamItems>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuantity>3000</ProfileQuantity >
    </ProfileParamItems>
  </ProfileParam>
</ProfileWrapp>
  );
};