// src/components/GA/GAListener.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gtagPageview } from '../../lib';
export const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    gtagPageview(location.pathname + location.search);
  }, [location]);

  return null;
};
