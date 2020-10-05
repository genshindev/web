/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { PureComponent } from 'react';
import { InlineIcon } from '@iconify/react';
import styles from '../styles/SocialLink.module.scss';

type SocialLinkProps = {
  icon: any;
  href: string;
};

export class SocialLink extends PureComponent<SocialLinkProps> {
  render() {
    const { icon, href } = this.props;

    return (
      <a href={href} className={styles.socialButton}>
        <InlineIcon className={styles.icon} icon={icon} />
      </a>
    );
  }
}
