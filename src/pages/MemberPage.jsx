import React from 'react';

const MemberPage = () => {
  const members = [
    { name: 'Soobin', role: 'Leader' },
    { name: 'Yeonjun', role: 'Main Dancer' },
    { name: 'Beomgyu', role: 'Visual' },
    { name: 'Taehyun', role: 'Main Vocalist' },
    { name: 'Huening Kai', role: 'Maknae' }
  ];

  return (
    <div>
      <h2 className="content-title">Member TXT</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '24px' 
      }}>
        {members.map(member => (
          <div key={member.name} style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '700', 
              color: 'var(--moa-pink-600)',
              marginBottom: '8px'
            }}>
              {member.name}
            </h3>
            <p style={{ color: 'var(--grey-500)', fontSize: '0.875rem' }}>
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberPage;
