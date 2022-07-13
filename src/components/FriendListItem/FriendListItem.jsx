import PropTypes from 'prop-types';
import { FriendName } from './FriendListItem.styled'
import { FriendItemLi } from './FriendListItem.styled'
import {FriendItemP} from './FriendListItem.styled'
export const FriendListItem = ({name, avatar, isOnline }) => {
    return (<FriendItemLi  > 
        <FriendName >{name}</FriendName>
        <img  src={avatar} alt="User avatar" width="48" />
        <FriendItemP isOnline = {isOnline} ></FriendItemP>
    </FriendItemLi>)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}