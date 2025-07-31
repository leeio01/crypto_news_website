import { useEffect, useState } from 'react';

import nft1 from '../assets/nft1.png';
import nft2 from '../assets/nft2.png';
import nft3 from '../assets/nft3.png';
import nft4 from '../assets/nft4.png';
import nft5 from '../assets/nft5.png';
import nft6 from '../assets/nft6.png';

const monkeyImages = [nft1, nft2, nft3, nft4, nft5, nft6];


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
