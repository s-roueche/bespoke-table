import React from 'react';
import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        borderTop: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
