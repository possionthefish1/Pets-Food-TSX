function Footer() {
  return (
    <footer className='py-8 bg-slate-200 md:py-24'>
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
          <div>
            <h5 className='pb-3 font-bold text-xl uppercase'>
              LINK
            </h5>
            <ul className='grid gap-y-2 text-slate-600'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Products</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='pb-3 font-bold text-xl uppercase'>
              Interests
            </h5>
            <ul className='grid gap-y-2 text-slate-600'>
              <li>
                <a href='/'>Link1</a>
              </li>
              <li>
                <a href='/'>Link2</a>
              </li>
              <li>
                <a href='/'>Link3</a>
              </li>
              <li>
                <a href='/'>Link4</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='pb-3 font-bold text-xl uppercase'>
              Contact
            </h5>
            <ul className='grid gap-y-2 text-slate-600'>
              <li>
                <a href='/'>Dog Food</a>
              </li>
              <li>
                <a href='/'>Bankok</a>
              </li>
              <li>
                <a href='mailto: dog_food@gmail.com'>
                  dog_food@gmail.com
                </a>
              </li>
              <li>
                <a href='tel:+6612345678'>12345678</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
