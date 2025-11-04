import { useRef, useEffect } from 'react';

function Test() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return <input ref={ref} placeholder="Test input" />;
}

export default Test;
