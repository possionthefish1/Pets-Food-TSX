import Image from 'next/image';

//@bm-b array of products
const products = [
  {
    src: '/images/dog_food_3.avif',
    title: 'Dog Food',
    content:
      'From natural ingredients, appeal to a wide range of dog breeds and needs.',
  },
  {
    src: '/images/cat_snack_1.avif',
    title: 'Cat Snack',
    content:
      'From natural ingredients, appeal to a wide range of cat breeds and needs.',
  },
  {
    src: '/images/cat_toy_1.avif',
    title: 'Cat Toy',
    content: "Toys that are suitable for cat's playtime.",
  },
  {
    src: '/images/dog_toy_1.avif',
    title: 'Dog Toy',
    content: "Toys that are suitable for dog's playtime.",
  },
];

function Intro() {
  return (
    // h3 removed md:text-3xl temp.
    <h3 className='~text-base/3xl container my-8 text-center font-bold uppercase md:my-24'>
      {/* span removed text-sm md:text-xl temp. */}
      <span className='~text-sm/2xl'>Check out our</span> <br />{' '}
      all-natural <span className='font-normal'>products</span>
    </h3>
  );
}

function BigGallery() {
  return (
    <div className='container mx-auto hidden grid-cols-2 grid-rows-2 gap-4 md:grid font-mono'>
      {/* @bm-g todo: replace these with .map(*/}
      {products.map((product) => (
        <div
          className=''
          key={product.title}
        >
          <div className='flex flex-col overflow-hidden transition-all'>
            <div className='grow overflow-hidden rounded-lg'>
              <Image
                width={500}
                height={500}
                className='rounded-lg transition-all duration-300 ease-in-out hover:scale-105'
                src={product.src}
                alt={product.title}
              />
            </div>
            <p className='font-bold'>{product.title}</p>
            <p>{product.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Gallery() {
  return (
    <section
      id='gallery'
      className='container mx-auto my-8 max-w-[900px] md:my-24 font-mono'
    >
      <Intro />
      <div className='grid auto-rows-auto grid-cols-2 gap-4 md:hidden'>
        <div className='col-span-full grid grid-cols-subgrid overflow-hidden'>
          <div className='col-span-full flex flex-col overflow-hidden bg-white'>
            <div className='overflow-hidden'>
              <Image
                width={500}
                height={500}
                className='object-cover object-bottom transition-all hover:scale-105 min-[340px]:object-center min-[340px]:pb-[30px]'
                src={'/images/dog_food_3.avif'}
                alt='Dog Food'
              />
            </div>
            <div className='ml-6'>
              <p className='font-bold'>Dog Food</p>
              <p>
                From natural ingredients, appeal to{' '}
                {/* <br className='min-[400px]:hidden' />  */}a wide
                range of dog breeds and needs.
              </p>
            </div>
          </div>
        </div>
        <div className='row-span-1 row-start-2'>
          <div className='overflow-hidden bg-white transition-all'>
            <Image
              width={500}
              height={500}
              className='w-full overflow-hidden transition-all hover:scale-110'
              src={'/images/cat_snack_1.avif'}
              alt='Cat Snack'
            />
          </div>
          <div className='ml-4'>
            <p className='font-bold'>Cat Snack</p>
            <p className='min-[400px]:hidden'>
              Kitty needs more tuna
            </p>
            <p className='max-[400px]:hidden'>
              From natural ingredients, appeal to a wide range of
              cat breeds and needs.
            </p>
          </div>
        </div>
        <div className='row-span-1 row-start-2'>
          <div className='overflow-hidden bg-white transition-all'>
            <Image
              width={500}
              height={500}
              className='w-full overflow-hidden transition-all hover:scale-110'
              src={'/images/cat_toy_1.avif'}
              alt='Cat Toy'
            />
          </div>
          <div className='ml-4'>
            <p className='font-bold'>Cat Toy</p>
            <p className='min-[400px]:hidden'>
              Whiskers loves catnip mouse
            </p>
            <p className='max-[400px]:hidden'>
              Toys that are suitable for cats playtime.
            </p>
          </div>
        </div>
      </div>
      <BigGallery />
    </section>
  );
}

export { Gallery };
