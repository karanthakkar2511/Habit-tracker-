import React, { useState } from 'react';

const Profile = ({ profile, updateProfile }) => {
  const [name, setName] = useState(profile.name);
  const [goal, setGoal] = useState(profile.goal);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, goal });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', backgroundColor: '#e9ecef', padding: '30px', borderRadius: '12px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ color: "#563d7c", textAlign: 'center', fontWeight: 'bold' }}>Profile Management</h2>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="mb-3">
          <label className="form-label" style={{ color: "#563d7c", fontWeight: '600' }}>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ borderRadius: '8px', padding: '10px', border: '1px solid #ced4da' }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: "#563d7c", fontWeight: '600' }}>Goal</label>
          <input
            type="text"
            className="form-control"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            style={{ borderRadius: '8px', padding: '10px', border: '1px solid #ced4da' }}
          />
        </div>
        <button type="submit" className="btn" style={{ backgroundColor: "#563d7c", color: "white", padding: '10px 20px', borderRadius: '8px', border: 'none', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
          Update Profile
        </button>
      </form>

      <h3 className="mt-4" style={{ color: "#563d7c" }}>Current Profile</h3>
      <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.15)' }}>
        <p><strong style={{ color: '#563d7c' }}>Name:</strong> {profile.name}</p>
        <p><strong style={{ color: '#563d7c' }}>Goal:</strong> {profile.goal}</p>
      </div>
    </div>
  );
};

export default Profile;
