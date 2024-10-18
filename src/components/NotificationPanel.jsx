import React from 'react';

const NotificationPanel = ({ notifications }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: "#412774", textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Notifications</h2>
      {notifications.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6f42c1' }}>No notifications at the moment.</p>
      ) : (
        <ul className="list-group" style={{ margin: "0", padding: '0', listStyle: 'none' }}>
          {notifications.map((notification, index) => (
            <li 
              key={index} 
              className="list-group-item" 
              style={{ 
                marginBottom: '10px', 
                background: 'linear-gradient(90deg, #412774, #6f42c1)', 
                color: 'white', 
                padding: '15px', 
                borderRadius: '8px', 
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' 
              }}
            >
              {notification}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPanel;
