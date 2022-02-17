import React, { useState, useEffect } from 'react';


const Dimensions = () => {
  const [dimentions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  const { width, height } = dimentions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
