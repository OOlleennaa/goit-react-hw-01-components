import { FriendsStyled, FriendsParam, FriendsStatus, FriendsPhoto,FriendsName } from "./Friends.styled";


export const FriendList = ({ friends}) => {
    return (
    <FriendsStyled> {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsParam key={id}> <FriendsStatus class="status">{isOnline}</FriendsStatus>
         <FriendsPhoto class="avatar" src="" alt="User avatar" width="48" />{avatar}
        <FriendsName class="name">{name}</FriendsName> 
         
        </FriendsParam>
      ))}</FriendsStyled>
)};