import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName && goal && startDate) {
      addHabit({ name: habitName, goal, startDate, frequency });
      setHabitName('');
      setGoal('');
      setStartDate('');
      setFrequency('daily');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 shadow" style={{ backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <div className="mb-3">
        <label htmlFor="habitName" className="form-label" style={{ color: "#412774", fontWeight: "bold" }}>Habit Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="habitName" 
          value={habitName} 
          onChange={(e) => setHabitName(e.target.value)} 
          required 
          style={{ borderRadius: '8px', padding: '10px' }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="goal" className="form-label" style={{ color: "#412774", fontWeight: "bold" }}>Goal</label>
        <input 
          type="text" 
          className="form-control" 
          id="goal" 
          value={goal} 
          onChange={(e) => setGoal(e.target.value)} 
          required 
          style={{ borderRadius: '8px', padding: '10px' }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label" style={{ color: "#412774", fontWeight: "bold" }}>Start Date</label>
        <input 
          type="date" 
          className="form-control" 
          id="startDate" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          required 
          style={{ borderRadius: '8px', padding: '10px' }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="frequency" className="form-label" style={{ color: "#412774", fontWeight: "bold" }}>Frequency</label>
        <select 
          className="form-select" 
          id="frequency" 
          value={frequency} 
          onChange={(e) => setFrequency(e.target.value)} 
          style={{ borderRadius: '8px', padding: '10px' }}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit" className="btn" style={{ backgroundColor: "#412774", color: "white", padding: '10px 20px', borderRadius: '8px', border: 'none' }}>
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
