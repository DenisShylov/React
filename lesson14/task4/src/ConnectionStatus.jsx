import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const statusOnline = () => {
      setStatus('online');
    };

    const statusOffline = () => {
      setStatus('offline');
    };

    window.addEventListener('online', statusOnline);
    window.addEventListener('offline', statusOffline);

    return () => {
      window.removeEventListener('online', statusOnline);
      window.removeEventListener('offline', statusOffline);
    };
  }, [status]);

  return status === 'online' ? (
    <div className="status ">{status}</div>
  ) : (
    <div className="status status_offline">{status}</div>
  );
};
export default ConnectionStatus;
