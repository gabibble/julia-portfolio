export default function Footer() {
  return (
    <footer className='mx-auto w-full max-w-[calc(72rem+3rem)] px-6 pb-10'>
      <p className='border-t border-ink/40 pt-6 text-center text-sm'>
        Designed and coded by Julia Giebultowicz ·{' '}
        <a
          href='https://github.com/gabibble/julia-portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className='whitespace-nowrap underline underline-offset-4 hover:text-coral'
        >
          view the code
        </a>{' '}
        · 2026
      </p>
    </footer>
  );
}
