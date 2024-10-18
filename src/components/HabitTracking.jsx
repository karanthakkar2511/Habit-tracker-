import React from 'react';

const HabitTracking = ({ habits, updateHabit }) => {
  const toggleComplete = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    );
    updateHabit(updatedHabits);
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="text-center mb-4" style={{ color: "#412774" }}>Habit Tracking</h2>
      <ul className="list-group">
        {habits.map((habit, index) => (
          <li 
            key={index} 
            className="list-group-item d-flex justify-content-between align-items-center mb-3" 
            style={{ 
              borderRadius: '10px', 
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', 
              backgroundColor: habit.completed ? '#e6f7e6' : '#fff' 
            }}
          >
            <div>
              <span className={habit.completed ? "text-success" : ""} style={{ fontWeight: 'bold', fontSize: '18px' }}>
                {habit.name}
              </span>
              <br />
              <small className="text-muted">Goal: {habit.goal}</small>
            </div>
            <button 
              className={`btn ${habit.completed ? 'btn-success' : ''}`} 
              style={{ 
                color: habit.completed ? 'white' : '#412774', 
                backgroundColor: habit.completed ? '#28a745' : 'transparent', 
                border: `1px solid ${habit.completed ? '#28a745' : '#412774'}`, 
                borderRadius: '20px', 
                padding: '5px 15px' 
              }} 
              onClick={() => toggleComplete(index)}
            >
              {habit.completed ? 'Completed' : 'Mark as Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracking;
