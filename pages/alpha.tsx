/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import React, { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Anchor from '../components/Anchor';
import Button from '../components/Button';
import InputField from '../components/InputField';

import styles from '../styles/Alpha.module.scss';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Alpha = () => {
  const [done, setDone] = useState(false);
  const { register, errors, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        API_WEB_SIGNUP_TOKEN: process.env.NEXT_PUBLIC_API_WEB_SIGNUP_TOKEN,
      },
      body: JSON.stringify(values),
    });
    setDone(true);
  };

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
            An email has been sent to you for activation of your account, You
            can now use our API by following the pinned instructions in the
            <span className={styles.channel}>#alpha-test</span> channel on our
            <Anchor href="https://discord.gg/M8t9nFG">Discord Server</Anchor>
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
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputs}>
                <InputField
                  ref={register}
                  error={errors.username}
                  errorMessage="Invalid username."
                  autoComplete="username"
                  name="username"
                  label="Username"
                />
                <InputField
                  ref={register}
                  error={errors.email}
                  errorMessage="Invalid E-Mail Address."
                  autoComplete="email"
                  type="email"
                  name="email"
                  label="E-Mail"
                />
                <InputField
                  ref={register}
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
