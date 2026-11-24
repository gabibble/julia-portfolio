import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
  FaArrowRightLong,
  FaArrowDownLong,
} from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Hero() {
  const buttonClass =
    'flex items-center gap-2 whitespace-nowrap border border-ink rounded-2xl p-4 text-base sm:gap-3 sm:text-lg lg:p-6 lg:text-xl lift';

  return (
    <div className='mx-auto mt-8 mb-16 grid w-full max-w-[calc(72rem+3rem)] grid-cols-1 gap-3 px-6 md:mt-24 md:grid-cols-[4fr_3fr]'>
      <section className='@container aspect-[5/4] bg-[url(/images/riso-card-bg.webp)] bg-size-[100%_100%] bg-center bg-no-repeat text-cream sm:aspect-[1160/743]'>
        <div className='flex h-full flex-col justify-between p-[7cqw] pt-[4cqw]'>
          <h1 className='mx-auto flex flex-col pt-[3cqw] font-script'>
            <span className='block text-[19cqw]/[1.1]'>julia</span>
            <span className='-mt-[0.15em] ml-[1.3em] block text-[9cqw]/[1.1]'>
              giebultowicz
            </span>
          </h1>
          <div>
            <p className='mb-[0.5em] text-[clamp(1rem,3.7cqw,1.5rem)]/[1.2] font-normal'>
              Software engineer with an
              <br />
              eye for design.
            </p>
            <p className='flex items-center justify-between text-[clamp(0.875rem,2.8cqw,1.125rem)] tracking-wide'>
              <span className='flex items-center gap-2'>
                <FaLocationDot className='-ml-1 size-[1.3em]' />
                Portland, OR
              </span>
              <span className='flex gap-3'>
                <a
                  href='https://github.com/gabibble'
                  aria-label='GitHub'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='size-[1.3em] transition hover:scale-110' />
                </a>
                <a
                  href='https://www.linkedin.com/in/julia-giebultowicz/'
                  aria-label='LinkedIn'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin className='size-[1.3em] transition hover:scale-110' />
                </a>
                <a href='mailto:juliagieb@gmail.com' aria-label='Email'>
                  <FaEnvelope className='size-[1.3em] transition hover:scale-110' />
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-2 gap-3'>
        <a href='#about' className={buttonClass}>
          about me <FaArrowDownLong className='size-5' />
        </a>
        <a
          href='/julia-giebultowicz-resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={`${buttonClass} bg-ink text-cream`}
        >
          résumé <FiArrowUpRight className='size-7' strokeWidth={2.5} />
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
