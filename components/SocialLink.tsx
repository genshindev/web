/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { InlineIcon } from '@iconify/react';
import styles from '../styles/SocialLink.module.scss';

interface SocialLinkProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  href: string;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a href={href} className={styles.socialButton} target="_blank">
    <InlineIcon className={styles.icon} icon={icon} />
  </a>
);

export { SocialLink };

export default SocialLink;
