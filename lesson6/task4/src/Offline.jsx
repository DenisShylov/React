import React from 'react';

const Offline = ({ onClick }) => {
  return (
    <>
      <span class="status__text">Offline</span>
      <button class="status__btn" onClick={onClick}>
        Reconnect
      </button>
    </>
  );
};

export default Offline;
