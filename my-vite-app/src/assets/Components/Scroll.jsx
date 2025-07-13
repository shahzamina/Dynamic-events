import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll= () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to top without any animation
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

export default Scroll;
