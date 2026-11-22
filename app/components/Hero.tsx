import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
  FaArrowRightLong,
} from 'react-icons/fa6';

export default function Hero() {
  const buttonClass =
    'flex items-center gap-3 border border-ink rounded-2xl p-6 text-xl';

  return (
    <div className='mx-auto my-8 grid w-full max-w-6xl grid-cols-1 gap-3 md:grid-cols-[4fr_3fr]'>
      <section className='flex aspect-[1160/743] flex-col justify-between bg-[url(/images/riso-card-bg.webp)] bg-contain bg-center bg-no-repeat p-12 pt-7 text-cream'>
        <h1 className='mx-auto flex flex-col pt-6 font-script'>
          <span className='block text-8xl lg:text-9xl'>julia</span>
          <span className='-mt-2 ml-[1.3em] block text-5xl lg:text-6xl'>
            giebultowicz
          </span>
        </h1>
        <div>
          <p className='mb-3 text-lg/5 font-normal lg:text-2xl/7'>
            Software engineer with an
            <br />
            eye for design.
          </p>
          <p className='text-md flex items-center justify-between tracking-wide lg:text-lg'>
            <span className='flex items-center gap-2'>
              <FaLocationDot className='-ml-1 size-5 lg:size-6' />
              Portland, OR
            </span>
            <span className='flex gap-3'>
              <a
                href='https://github.com/gabibble'
                aria-label='GitHub'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='size-5 transition hover:scale-110 lg:size-6' />
              </a>
              <a
                href='https://www.linkedin.com/in/julia-giebultowicz/'
                aria-label='LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className='size-5 transition hover:scale-110 lg:size-6' />
              </a>
              <a href='mailto:juliagieb@gmail.com' aria-label='Email'>
                <FaEnvelope className='size-5 transition hover:scale-110 lg:size-6' />
              </a>
            </span>
          </p>
        </div>
      </section>
      <section className='grid grid-cols-2 gap-3'>
        <a href='#about' className={buttonClass}>
          about <FaArrowRightLong className='size-6' />
        </a>
        <a href='#contact' className={`${buttonClass} bg-ink text-cream`}>
          get in touch <FaArrowRightLong className='size-6' />
        </a>
      </section>
      <div className='relative col-start-2 row-span-2 row-start-1 hidden overflow-hidden rounded-3xl border md:block'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src='/images/julia-riso.webp'
          alt='Portrait of Julia'
        />
      </div>
    </div>
  );
}
