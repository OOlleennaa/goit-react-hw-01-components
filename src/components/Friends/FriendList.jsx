import { FriendsStyled, FriendsParam, FriendsStatus, FriendsPhoto,FriendsName } from "./Friends.styled";


export const FriendList = ({ friends}) => {
    return (
    <FriendsStyled> {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsParam key={id}> <FriendsStatus>{isOnline}</FriendsStatus>
         <FriendsPhoto src={avatar} alt={name} width="48" />{avatar}
        <FriendsName >{name}</FriendsName> 
         
        </FriendsParam>
      ))}</FriendsStyled>
)};