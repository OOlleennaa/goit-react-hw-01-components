import React from "react";
import PropTypes from "prop-types";
import { FriendsParam, FriendsStatus, FriendsPhoto, FriendsName } from "./Friends.styled";


export const FriendListItem = ({id, isOnline , avatar, name}) => {
    return (
    
      <FriendsParam key={id}>
            <FriendsStatus status={isOnline}></FriendsStatus>
            <FriendsPhoto src={avatar} alt={name} width="48" />
            <FriendsName >{name}</FriendsName> 
         
        </FriendsParam>  
      );
    }


// FriendListItem.propTypes = {
//   status: PropTypes.bool,
//   avatar: PropTypes.string,
//   name: PropTypes.string
// }