export const FriendList = ({ friends}) => {
    return (
    <ul> {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}> <span class="status">{isOnline}</span>
         <img class="avatar" src="" alt="User avatar" width="48" />{avatar}
        <p class="name">{name}</p> 
         
        </li>
      ))}</ul>
)};