/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { SocialLink } from '../components/SocialLink';
import styles from '../styles/Home.module.scss';

import githubIcon from '@iconify/icons-mdi/github';
import twitterIcon from '@iconify/icons-mdi/twitter';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>genshin.dev</h1>
        <h2 className={styles.subtitle}>Coming Soon</h2>
        <div className={styles.socialLinks}>
          <SocialLink href='https://github.com/genshindev' icon={githubIcon} />
          <SocialLink
            href='https://twitter.com/genshindev'
            icon={twitterIcon}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        genshin.dev isn’t endorsed by miHoYo and doesn’t reflect the views or
        opinions of miHoYo or anyone officially involved in producing or
        managing Genshin Impact.
        <br />
        Genshin Impact and miHoYo are trademarks or registered trademarks of
        miHoYo. Genshin Impact © miHoYo.
      </footer>
    </div>
  );
}
