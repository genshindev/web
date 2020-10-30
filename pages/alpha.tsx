import React, { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import Anchor from '../components/Anchor';
import Button from '../components/Button';
import InputField from '../components/InputField';

import styles from '../styles/Alpha.module.scss';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Alpha = () => {
  const [done, setDone] = useState(false);
  const { register, errors, handleSubmit } = useForm<FormData>();

  const onSubmit = () => setDone(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>genshin.dev - Super Secret Alpha Sign-Up</title>
        <meta name="description" content="Super secret alpha sign-up page" />
      </Head>
      {done ? (
        <header className={styles.header}>
          <h1 className={styles.title}>👌 You're all set and ready to go</h1>
          <h2 className={styles.subtitle}>
            You can now use our API by following the pinned instructions in the{' '}
            <span className={styles.channel}>#alpha-test</span> channel on our{' '}
            <Anchor href="https://discord.gg/M8t9nFG">Discord Server</Anchor>{' '}
            (and don't worry, real documentation will follow once we are out of
            alpha)!
          </h2>
        </header>
      ) : (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>
              Welcome to our more or less secret alpha sign-up page 👀
            </h1>
            <h2 className={styles.subtitle}>
              If you see this page you’ve been either given a link to it by us,
              or just poked through the code of our website on GitHub. Either
              way, welcome to the alpha test!
            </h2>
          </header>

          <main>
            <form
              method="POST"
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.inputs}>
                <InputField
                  ref={register({ required: true })}
                  error={errors.username}
                  errorMessage="Invalid username."
                  autoComplete="username"
                  name="username"
                  label="Username"
                />
                <InputField
                  ref={register({
                    required: true,
                    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                  })}
                  error={errors.email}
                  errorMessage="Invalid E-Mail Address."
                  autoComplete="email"
                  type="email"
                  name="email"
                  label="E-Mail"
                />
                <InputField
                  ref={register({ required: true, minLength: 8 })}
                  error={errors.password}
                  errorMessage="Must be at least 8 characters long."
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  label="Password"
                />
              </div>
              <Button type="submit">Register</Button>
            </form>
          </main>
        </>
      )}
    </div>
  );
};

export default Alpha;
