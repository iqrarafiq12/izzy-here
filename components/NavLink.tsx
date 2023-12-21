import Image from 'next/image';
import { Socials } from '@/constants';

function NavLink() {
  return (
    <div className='inline-flex items-center justify-center px-3 gap-3 py-2 '>
      {Socials.map((social) => (
        <a 
          key={social.url} 
          href={social.href}  // Assuming 'href' is the property containing the link URL
          target="_blank"  // Opens the link in a new tab
          rel="noopener noreferrer"  // Recommended for security reasons
        >
          <Image 
            src={social.url}  // A 'url' for the image source
            alt={social.name}  // Use a more descriptive alt text if possible
            width={25}
            height={25}
          />
        </a>
      ))}
    </div>
  );
}

export default NavLink;
