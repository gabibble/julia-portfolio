export default function Hero() {
  const buttonClass = 'border border-teal rounded-xl p-4 flex-1';

  return (
    <div className='mx-auto my-8 flex w-full max-w-4xl gap-3 p-6'>
      <div className='flex flex-4 flex-col gap-3'>
        <section className='flex min-h-[360px] flex-col justify-between rounded-2xl border bg-linear-135 from-coral via-teal to-aqua p-12 pt-7 text-cream'>
          <h1 className='mx-auto flex min-w-[360px] flex-col font-script'>
            <span className='block text-8xl'>julia</span>
            <span className='-mt-2 ml-[1.3em] block text-5xl'>
              giebultowicz
            </span>
          </h1>
          <div>
            <p className='mb-2 max-w-[60%] text-[16px]/[18px]'>
              Software engineer with an eye for design.
            </p>
            <p className='flex justify-between text-xl'>
              <span>Portland, OR</span>
              <span>G L E</span>
            </p>
          </div>
        </section>
        <section className='flex w-full gap-3'>
          <a href='#about' className={`${buttonClass}`}>
            about
          </a>
          <a href='#contact' className={`${buttonClass} bg-teal text-cream`}>
            get in touch
          </a>
        </section>
      </div>
      <div className='relative hidden flex-3 overflow-hidden rounded-xl md:block'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src='/images/julia.webp'
          alt='Julia Giebultowicz Photo'
        ></img>
      </div>
    </div>
  );
}
