/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import githubIcon from '@iconify/icons-mdi/github';
import twitterIcon from '@iconify/icons-mdi/twitter';
import discordIcon from '@iconify/icons-mdi/discord';

import { SocialLink } from '../components/SocialLink';
import styles from '../styles/Home.module.scss';

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>genshin.dev</h1>
      <h2 className={styles.subtitle}>Coming Soon</h2>
      <div className={styles.socialLinks}>
        <SocialLink href="https://github.com/genshindev" icon={githubIcon} />
        <SocialLink href="https://twitter.com/genshindev" icon={twitterIcon} />
        <SocialLink href="https://discord.gg/M8t9nFG" icon={discordIcon} />
      </div>
    </main>
    <footer className={styles.footer}>
      <p>
        genshin.dev isn’t endorsed by miHoYo and doesn’t reflect the views or
        opinions of miHoYo or anyone officially involved in producing or
        managing Genshin Impact.
        <br />
        Genshin Impact and miHoYo are trademarks or registered trademarks of
        miHoYo. Genshin Impact © miHoYo.
      </p>
    </footer>
  </div>
);

export default Home;
