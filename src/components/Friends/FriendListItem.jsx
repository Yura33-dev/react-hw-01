import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

function FriendListItem({ friend: { avatar, isOnline, name } }) {
  const classes = ['status'];

  isOnline ? classes.push('online') : classes.push('offline');

  return (
    <div>
      <img className={styles.image} src={avatar} alt={name} width="48" />
      <p className={styles.title}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.object,
};

export default FriendListItem;
