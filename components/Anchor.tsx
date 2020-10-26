import { HTMLAttributes, PureComponent } from 'react';
import Link from 'next/link';

import styles from '../styles/Anchor.module.scss';

type AnchorProps = {
  href: string;
  label?: string;
} & HTMLAttributes<HTMLAnchorElement>;

export default function Anchor({
  label,
  onClick,
  children,
  href,
  className,
  ...props
}: AnchorProps) {
  const external = href && !href.startsWith('/');

  const link = (
    <a
      onClick={onClick}
      target={external ? '_blank' : null}
      aria-label={label}
      className={[styles.anchor, className].join(' ')}
      {...props}
    >
      {children}
    </a>
  );

  if (href) return <Link href={href}>{link}</Link>;
  else return link;
}
