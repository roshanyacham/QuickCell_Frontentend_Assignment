import React from 'react';
import '../styles/usericon.css';

function UserIcon({ name, available }) {
    return (
      <div className={`user-icon ${available ? 'available' : 'unavailable'}`}>
        <span>{name[0]}</span> {/* Display the first letter of the name as a placeholder */}
      </div>
    );
  }
  
  export default UserIcon;