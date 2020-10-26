import Head from 'next/head';
import React, { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Anchor from '../components/Anchor';
import Button from '../components/Button';
import InputField from '../components/InputField';

import styles from '../styles/Alpha.module.scss';

export default function Alpha() {
  const [done, setDone] = useState(false);
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (data) => setDone(true);

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
                  register={register}
                  setValue={setValue}
                  autoComplete="username"
                  name="username"
                  label="Username"
                />
                <InputField
                  register={register}
                  setValue={setValue}
                  autoComplete="email"
                  type="email"
                  name="email"
                  label="E-Mail"
                />
                <InputField
                  register={register}
                  setValue={setValue}
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
}
