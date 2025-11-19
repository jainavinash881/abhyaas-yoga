import React, { useState } from 'react';

const Schedule = () => {
  const [filter, setFilter] = useState('All');

  // Dummy Data
  const classes = [
    { id: 1, time: '07:00 AM', name: 'Hatha Yoga', type: 'Morning', intensity: 1, trainer: 'You' },
    { id: 2, time: '08:30 AM', name: 'Vinyasa Flow', type: 'Morning', intensity: 2, trainer: 'You' },
    { id: 3, time: '06:00 PM', name: 'Power Yoga', type: 'Evening', intensity: 3, trainer: 'You' },
    { id: 4, time: '10:00 AM', name: 'Weekend Detox', type: 'Weekend', intensity: 1, trainer: 'Guest' },
  ];

  const filteredClasses = filter === 'All' ? classes : classes.filter(c => c.type === filter);

  // Filter Button Style
  const getBtnStyle = (btnType) => ({
    padding: '10px 25px',
    borderRadius: '30px',
    border: `1px solid var(--primary-maroon)`,
    background: filter === btnType ? 'var(--primary-maroon)' : 'transparent',
    color: filter === btnType ? 'white' : 'var(--primary-maroon)',
    cursor: 'pointer',
    marginRight: '10px',
    marginBottom: '10px',
    fontWeight: '600'
  });

  return (
    <div className="section-padding container">
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Class Schedule</h1>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
        {['All', 'Morning', 'Evening', 'Weekend'].map(type => (
          <button key={type} onClick={() => setFilter(type)} style={getBtnStyle(type)}>
            {type}
          </button>
        ))}
      </div>

      {/* Class Cards List */}
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredClasses.map((cls) => (
          <div key={cls.id} style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.8)', padding: '25px', borderRadius: '15px',
            boxShadow: 'var(--shadow-soft)', borderLeft: '6px solid var(--primary-maroon)',
            transition: 'transform 0.2s'
          }}>
            {/* Time */}
            <div style={{ flex: '1' }}>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{cls.time}</h3>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>{cls.type}</span>
            </div>

            {/* Info */}
            <div style={{ flex: '2' }}>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-dark)' }}>{cls.name}</h4>
              <p style={{ margin: '5px 0 0', fontSize: '0.9rem' }}>
                Intensity: {'●'.repeat(cls.intensity)}{'○'.repeat(3 - cls.intensity)}
              </p>
            </div>

            {/* Button */}
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;