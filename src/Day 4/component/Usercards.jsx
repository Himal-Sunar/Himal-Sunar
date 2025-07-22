import React from 'react';

const UserCards = ({ user }) => {
    if (!user) return null;

    return (
        <div className="user-card" style={{
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            background: '#fff',
            maxWidth: '300px',
            margin: '1rem auto',
            textAlign: 'center'
        }}>
            <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="user-avatar"
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    border: '2px solid #eee'
                }}
            />
            <h3 style={{ margin: '0.5rem 0', fontWeight: '600' }}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
            <p style={{ color: '#555', margin: '0.25rem 0' }}>{user.email}</p>
            <p className="location" style={{ color: '#888', fontSize: '0.95rem' }}>
                {user.location.city}
            </p>
        </div>
    );
};

export default UserCards;