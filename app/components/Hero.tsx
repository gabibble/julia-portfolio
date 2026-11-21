export default function Hero() {
  const buttonClass = 'border border-ink rounded-2xl p-6 flex-1 text-xl';

  return (
    <div className='mx-auto my-8 flex w-full max-w-6xl gap-3'>
      <div className='flex flex-4 flex-col gap-3'>
        <section className='flex aspect-[1160/743] flex-col justify-between bg-[url(/images/riso-card-bg.webp)] bg-contain bg-center bg-no-repeat p-12 pt-7 text-cream'>
          <h1 className='mx-auto flex flex-col pt-6 font-script'>
            <span className='block text-9xl'>julia</span>
            <span className='-mt-2 ml-[1.3em] block text-6xl'>
              giebultowicz
            </span>
          </h1>
          <div>
            <p className='mb-2 max-w-[60%] text-[20px]/[23px]'>
              Software engineer with an eye for design.
            </p>
            <p className='flex justify-between text-[26px]'>
              <span>Portland, OR</span>
              <span>G L E</span>
            </p>
          </div>
        </section>
        <section className='flex w-full gap-3'>
          <a href='#about' className={`${buttonClass}`}>
            about →
          </a>
          <a href='#contact' className={`${buttonClass} bg-ink text-cream`}>
            get in touch →
          </a>
        </section>
      </div>
      <div className='relative hidden flex-3 overflow-hidden rounded-3xl border md:block'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src='/images/julia-riso.webp'
          alt='Julia Giebultowicz Photo'
        ></img>
      </div>
    </div>
  );
}
