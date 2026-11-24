import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

const contactLinks = [
  {
    href: 'mailto:juliagieb@gmail.com',
    label: 'juliagieb@gmail.com',
    Icon: FaEnvelope,
  },
  {
    href: 'https://www.linkedin.com/in/julia-giebultowicz/',
    label: 'linkedin.com/in/julia-giebultowicz',
    Icon: FaLinkedin,
  },
  {
    href: 'https://github.com/gabibble',
    label: 'github.com/gabibble',
    Icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      className='mx-auto mt-16 w-full max-w-[calc(72rem+3rem)] px-6 pb-24'
    >
      <div className='flex flex-col gap-8 rounded-[20px] bg-teal px-8 py-12 text-cream md:flex-row md:items-center md:justify-between md:px-16 md:py-20'>
        <h2 className='flex flex-col self-center font-script text-6xl leading-none md:self-auto md:text-8xl'>
          <span>get in</span>
          <span className='ml-[1.3em]'>touch</span>
        </h2>
        <ul className='flex flex-col gap-4'>
          {contactLinks.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className='flex items-center gap-3 text-lg break-all underline-offset-4 hover:underline'
              >
                <Icon className='size-6 shrink-0' />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
