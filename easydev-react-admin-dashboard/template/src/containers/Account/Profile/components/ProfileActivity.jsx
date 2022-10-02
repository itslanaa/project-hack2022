import React from 'react';
import PropTypes from 'prop-types';

const ProfileActivity = ({
  img, name, date, children,
}) => (
  <div className="profile__activity">
    <div className="profile__activity-avatar">
      <img src={img} alt="" />
    </div>
    <div>
      <p className="profile__activity-name">{name}
        <span className="profile__activity-date"> {date}</span>
      </p>
      {children}
    </div>
  </div>
);

ProfileActivity.propTypes = {
  date: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ProfileActivity.defaultProps = {
  date: '',
  img: '',
  name: '',
};

export default ProfileActivity;
