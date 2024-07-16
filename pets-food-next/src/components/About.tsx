'use client';
import Link from 'next/link';
import Image from 'next/image'
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

type AboutProp = { isLove: boolean; onSwap: () => void };

function SmallAbout({ isLove, onSwap }: AboutProp) {
  return (
    // 1000vw use 450px
    <div className='mx-auto grid grid-cols-1 justify-center overflow-hidden py-8 md:hidden'>
      <div className='ml-2'>
        <h3 className='font-bold text-2xl uppercase underline decoration-2 decoration-pink-500 decoration-wavy'>
          about us
        </h3>
        <h2 className='font-bold text-4xl uppercase'>
          proudly raised, grown &amp; produced
          <span className='text-red-700'> in thailand</span>
        </h2>
      </div>
      <div className='mx-auto h-[400px] overflow-hidden rounded-lg sm:h-[600px]'>
        <Image
          className='mt-4 rounded-lg object-cover object-[0_-175px] transition-all hover:scale-[105%] sm:object-[0_-275px]'
          src='https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2701&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='White fur cat doing funny face, its mouth open ajar and its yellow eyes with black iris inside open wide as if it has been caught by surprise.'
          width={500}
          height={500}
        />
      </div>
      <div className='ml-2 grid grid-cols-subgrid'>
        <p className='my-4'>
          We invite you to experience the difference that Thai
          quality and care can make in your pet's life. Discover
          delicious, nutritious food formulated with love and
          respect for both your pet and the environment.{' '}
        </p>
        <Link
          onClick={onSwap}
          href='/#about'
          className='w-[312px] rounded-md bg-rose-400 px-4 py-4 text-center font-bold text-white text-xl uppercase transition-all duration-500 hover:border-rose-700 hover:bg-rose-700 md:px-10'
        >
          {isLove ? 'Discover who we are' : 'We are pet lovers'}
        </Link>
      </div>
    </div>
  );
}

function BigAbout({ isLove, onSwap }: AboutProp) {
  return (
    <div className='mx-auto hidden w-[75%] grid-cols-2 gap-24 md:grid md:gap-16 md:p-4 lg:h-[600px]'>
      <div className='overflow-hidden rounded-lg'>
        <Image
          className='w-[350px] overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:scale-[115%] md:w-full lg:scale-[115%] lg:object-[0_-75px] lg:hover:scale-[120%]'
          src='https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2701&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Cat Face'
          width={500}
          height={1000}
        />
      </div>
      <div className='relative grid content-center py-8'>
        <h3 className='font-bold text-2xl uppercase underline decoration-2 decoration-pink-500 decoration-wavy'>
          about us
        </h3>
        <h2 className='font-bold text-4xl uppercase'>
          proudly raised,
          <br />
          grown &amp; produced <br />
          <span className='text-red-700'>in thailand</span>
        </h2>
        <p className='my-8'>
          We invite you to experience the difference that Thai
          quality and care can make in your pet's life. Discover
          delicious, nutritious food formulated with love and
          respect for both your pet and the environment.{' '}
        </p>
        <Link
          onClick={onSwap}
          href='/#about'
          className='w-[312px] text-nowrap rounded-md bg-rose-400 px-10 py-4 text-center font-bold text-white text-xl uppercase transition-all duration-500 hover:border-rose-700 hover:bg-rose-700'
        >
          {isLove ? 'Discover who we are' : 'We are pet lovers'}
        </Link>
        <div className='absolute inset-[0_0_auto_auto] inline-block w-fit rounded-full bg-gray-500 p-4 transition-all duration-[300ms] hover:scale-125'>
          <svg
            role='graphics-symbol'
            fill='white'
            className='h-[30px]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z' />
          </svg>
        </div>
      </div>
    </div>
  );
}

function About() {
  // const router = useRouter();

  // const handleScrollToProduct = () => {
  //   const element = document.getElementById('user1');
  //   if (element) {
  //     window.scroll({ top: element.offsetTop, behavior: 'smooth' });
  //   }
  // };

  // useEffect(() => {
  //   if (router.asPath.includes('#user1')) {
  //     handleScrollToProduct();
  //   }
  // }, [router.asPath, handleScrollToProduct]);
  return (
    <section
      className='container mx-auto my-8 max-w-[1280px] overflow-hidden rounded-lg bg-slate-100 md:my-24'
      id='about'
    >
      <SmallAbout
        isLove={isLove}
        onSwap={handleSwap}
      />
      <BigAbout
        isLove={isLove}
        onSwap={handleSwap}
      />
    </section>
  );
}

export { About };
