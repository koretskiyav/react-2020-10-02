import React from 'react';

export default function Navigation(props) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {props.restaurants.map((restaurant) => (
        <button
          style={{
            marginRight: '.75rem',
            backgroundColor: '#e0e0e0',
            color: '#000000de',
            border: 'none',
            boxShadow:
              '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
            padding: '6px 16px',
            fontSize: '0.875rem',
            minWidth: '64px',
            boxSizing: 'border-box',
            transition:
              'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: '500',
            lineHeight: '1.75',
            borderRadius: '4px',
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
          }}
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
