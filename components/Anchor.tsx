/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import React, { HTMLAttributes } from 'react';
import Link from 'next/link';

import styles from '../styles/Anchor.module.scss';

interface AnchorProps {
  href: string;
  label?: string;
}

const Anchor = ({
  label,
  onClick,
  children,
  href,
  className,
  ...props
}: AnchorProps & HTMLAttributes<HTMLAnchorElement>) => {
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

  if (href) {
    return <Link href={href}>{link}</Link>;
  }

  return link;
};

export default Anchor;
