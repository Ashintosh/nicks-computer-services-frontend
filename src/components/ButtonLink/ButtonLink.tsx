import './ButtonLink.css';
import type { ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'outline' | 'solid';
}

function ButtonLink({ href, children, variant = 'outline' }: ButtonLinkProps) {
  return (
    <a href={href} className={`button-link button-link--${variant}`}>
      {children}
    </a>
  );
}

export default ButtonLink;
