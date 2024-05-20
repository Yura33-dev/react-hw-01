import PropTypes from 'prop-types';

import styles from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles['profile-info']}>
        <img
          className={styles['profile-image']}
          src={image}
          alt="User avatar"
        />

        <p className={styles['profile-name']}>{name}</p>
        <p className={styles['profile-tag']}>@{tag}</p>
        <p className={styles['profile-location']}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles['stats-item']}>
          <span className={styles['stats-key']}>Followers</span>
          <span className={styles['stats-value']}>{stats.followers}</span> 
        </li>

        <li className={styles['stats-item']}>
          <span className={styles['stats-key']}>Views</span>
          <span className={styles['stats-value']}>{stats.views}</span> 
        </li>

        <li className={styles['stats-item']}>
          <span className={styles['stats-key']}>Likes</span>
          <span className={styles['stats-value']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
