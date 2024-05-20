import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
