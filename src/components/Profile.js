import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Profile.css';

class Profile extends Component {
  render() {
    const {avatar} = this.props;
    return (
      
        <div className="image-card " style={{backgroundImage: `url(${avatar})`}}></div>
      
    );
  }
}


Profile.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Profile;