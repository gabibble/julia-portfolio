import Link from 'next/link';

const links = [
  { href: '#work', label: 'work' },
  { href: '#about', label: 'about' },
  // { href: '#art', label: 'art' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  return (
    <header className='border-b border-ink/40 px-6 py-5'>
      <div className='mx-auto flex max-w-6xl items-center gap-10'>
        <Link
          href='/'
          className='font-script text-4xl text-teal transition-colors hover:text-coral'
        >
          jg
        </Link>
        <nav className='flex gap-7'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='transition-colors hover:text-coral'
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
