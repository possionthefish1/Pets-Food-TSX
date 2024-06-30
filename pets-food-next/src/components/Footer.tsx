import Link from 'next/link';

type ListT = {
  title: string;
  contents: { text: string; link: string; hash?: string }[];
};

// @bm-b list provider
const lists: ListT[] = [
  {
    title: 'LINK',
    contents: [
      { text: 'Home', link: '/' },
      { text: 'Product', link: '/product' },
      { text: 'About', link: '/', hash: 'about' },
      { text: 'Contact', link: '/', hash: 'contact' },
    ],
  },
  {
    title: 'INTERESTS',
    contents: [
      { text: 'Link1', link: '/' },
      { text: 'Link2', link: '/' },
      { text: 'Link3', link: '/' },
      { text: 'Link4', link: '/' },
    ],
  },
  {
    title: 'CONTACT',
    contents: [
      { text: 'Dog Food', link: '/' },
      { text: 'Bangkok', link: '/' },
      { text: 'dog_food@gmail.com', link: '/' },
      { text: '12345678', link: '/' },
    ],
  },
];

function Footer() {
  return (
    <footer
      id='contact'
      className='bg-slate-200 py-8 md:py-24'
    >
      <div className='container mx-auto'>
        <div className='mx-auto grid w-[75%] grid-flow-row gap-8 md:grid-cols-[0.75fr_0.45fr_0.75fr_0.45fr]'>
          <div>
            <h4 className='pb-3 font-bold text-2xl text-amber-900 uppercase'>
              Dog Treats
            </h4>
            <p className='text-pretty text-md text-slate-500'>
              Made only from the most premium ingredients, for your
              beloved pets💖.
            </p>
          </div>
          {lists.map((list) => (
            <div key={list.title}>
              <h5 className='pb-3 font-bold text-xl uppercase'>
                {list.title}
              </h5>
              <ul className='grid gap-y-2 text-slate-600'>
                {list.contents.map((content) => (
                  // @bm-b links map
                  <li key={content.text}>
                    <Link
                      href={`${content.link}#${content.hash}`}
                    >
                      {content.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { Footer };
