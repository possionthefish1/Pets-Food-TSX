const lists = [
  {
    title: 'LINK',
    contents: [
      { text: 'Home', link: '/' },
      { text: 'Product', link: '/' },
      { text: 'About', link: '/' },
      { text: 'Contact', link: '/' },
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
    link: '/',
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
    <footer className='bg-slate-200 py-8 md:py-24'>
      <div className='container mx-auto'>
        <div className='mx-auto grid w-[75%] grid-flow-row gap-8 md:grid-cols-[0.75fr_0.45fr_0.75fr_0.45fr]'>
          <div>
            <h4 className='pb-3 font-bold text-2xl text-amber-900 uppercase'>
              Dog Treats
            </h4>
            <p className='text-pretty text-md text-slate-500'>
              Providing the finest quality ingredients specially
              formulated for your dog.
            </p>
          </div>
          {lists.map((list) => (
            <div key={list.title}>
              <h5 className='pb-3 font-bold text-xl uppercase'>
                {list.title}
              </h5>
              <ul className='grid gap-y-2 text-slate-600'>
                {list.contents.map((content) => (
                  <li key={content.text}>
                    <a href={list.link}>{content.text}</a>
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
