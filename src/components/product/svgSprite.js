import React from 'react';

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      position: 'absolute',
      top: '-9999px',
      left: '-9999px',
      opacity: 0,
      zIndex: -1,
    }}
  >
    <defs>
      <symbol height="4" viewBox="-1 -1 10 4" id="minus">
        <path d="m.764347 3.59v-3.39h8.670003v3.39z" fill="#fff" />
      </symbol>

      <symbol height="17" viewBox="0 0 18 17" width="18" id="plus">
        <path
          d="m.92445 10.2v-3.21h6.12v-6.390001h3.90005v6.390001h6.12v3.21h-6.12v6.48h-3.90005v-6.48z"
          fill="#fff"
        />
      </symbol>
    </defs>
  </svg>
);
