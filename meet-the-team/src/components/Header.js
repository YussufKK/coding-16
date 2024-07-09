import React from 'react';

export const Header = ({ Yusuf }) => {
  return (
    <header className="header">
      <h1>{Yusuf}</h1>
    </header>
  );
};

export const Subtitle = ({ text }) => {
  return (
    <h2 className="subtitle">{text}</h2>
  );
};
