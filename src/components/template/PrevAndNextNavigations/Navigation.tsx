import React from 'react';

import Link from 'next/link';

interface OwnProps {
  href: string,
  as?: string,
  disabled?: boolean,
}

type Props = OwnProps;

const Navigation: React.FC<Props> = (props) => {
  const { disabled, href, as, children } = props;
  const linkOption = disabled ? 'text-gray-300' : 'text-black active:bg-blue-200 hover:bg-blue-100 duration-200 ease-in transition';
  return(
    <div className={`relative rounded-full ${linkOption}`}>
      {!disabled && 
        <Link href={href} as={as}>
          <a className='absolute h-full w-full top-0 left-0' />
        </Link>
      }
      {children}
    </div>
  );
}

export default Navigation;