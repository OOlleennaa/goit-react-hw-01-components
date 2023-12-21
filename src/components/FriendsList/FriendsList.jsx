import PropTypes from "prop-types";
import { FriendsStyled } from "./FriendsList.styled";
import { FriendListItem } from "components/FriendsListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <FriendsStyled>
            {friends.map(({ avatar, name, isOnline, id  }) => {
                return (
                    <FriendListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })
            }        
        </FriendsStyled>);
};

FriendList.propTypes = {
    friends: PropTypes.array
}