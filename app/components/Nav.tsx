const links = [
  { href: '#work', label: 'work' },
  { href: '#about', label: 'about' },
  // { href: '#art', label: 'art' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  return (
    <header className='sticky top-0 z-50 border-b border-ink/40 bg-cream/90 px-6 py-5 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center gap-10'>
        {/* '#top' is built into browsers: it scrolls to the top of the page. */}
        <a
          href='#top'
          className='font-script text-4xl text-teal transition-colors hover:text-coral'
        >
          jg
        </a>
        <nav className='flex gap-7'>
          {links.map((link) => (
            // Plain <a> for #hash links: the browser handles the smooth scroll.
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
