import { useState } from 'react';

export const LoveBtn = () => {
    const [isLove, setIsLove] = useState<boolean>(true);

    const handleSwap = () => {
        setIsLove(!isLove);
      };
  return (
    <div>LoveBtn</div>
  )
}

// small
<Link
          onClick={onSwap}
          href='/#about'
          className='w-[312px] rounded-md bg-rose-400 px-4 py-4 text-center font-bold text-white text-xl uppercase transition-all duration-500 hover:border-rose-700 hover:bg-rose-700 md:px-10'
        >
          {isLove ? 'Discover who we are' : 'We are pet lovers'}
        </Link>

// big
<Link
onClick={onSwap}
href='/#about'
className='w-[312px] text-nowrap rounded-md bg-rose-400 px-10 py-4 text-center font-bold text-white text-xl uppercase transition-all duration-500 hover:border-rose-700 hover:bg-rose-700'
>
{isLove ? 'Discover who we are' : 'We are pet lovers'}
</Link>