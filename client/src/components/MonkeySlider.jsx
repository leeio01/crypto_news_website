import { useEffect, useState } from 'react';

import monkey from '../assets/monkey.png';
import monkey2 from '../assets/monkey2.png';
import monkey3 from '../assets/monkey3.png';
import monkey4 from '../assets/monkey4.png';
import monkey5 from '../assets/monkey5.png';
import monkey6 from '../assets/monkey6.png';

const monkeyImages = [monkey, monkey2, monkey3, monkey4, monkey5, monkey6];

export default function MonkeySlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % monkeyImages.length);
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mt-10">
      <img
        src={monkeyImages[index]}
        alt={`Monkey ${index + 1}`}
        className="w-40 h-40 object-contain transition-all duration-700 ease-in-out"
      />
    </div>
  );
}
