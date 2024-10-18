import React from 'react';

const Dashboard = ({ habits }) => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #6D28D9, #B794F4)', minHeight: '100vh', padding: '20px' }}>
      <h2 className="text-white text-center mb-4">Dashboard</h2>
      <div className="row">
        {habits.map((habit, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div 
              className="card shadow-sm" 
              style={{
                border: "none",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              <div 
                className="card-header text-white" 
                style={{
                  backgroundColor: "#6D28D9", 
                  borderBottom: "3px solid #B794F4",
                  textAlign: "center",
                  padding: "15px"
                }}
              >
                <h5>{habit.name}</h5>
              </div>
              <div className="card-body" style={{ padding: "20px" }}>
                <p className="card-text"><strong>Goal:</strong> {habit.goal}</p>
                <p className="card-text"><strong>Streak:</strong> {habit.streak}</p>
                <p className="card-text"><strong>Progress:</strong> {habit.progress}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
