/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import React, { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../components/Button';
import InputField from '../components/InputField';

import styles from '../styles/Alpha.module.scss';

interface FormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const RequestPasswordReset = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [apiError, setApiError] = useState<boolean | Record<string, any>>(
    false,
  );

  const { register, errors, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    setApiError(false);

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_API_URL
        }/user/requestResetPassword?email=${encodeURIComponent(values.email)}`,
      );

      if (!response.ok) {
        throw response;
      }

      return setEmailSent(true);
    } catch (err) {
      return setApiError(err.json ? await err.json() : true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>genshin.dev - Request Password Reset</title>
        <meta name="description" content="Request Password Reset page" />
      </Head>
      {emailSent ? (
        <header className={styles.header}>
          <h1 className={styles.title}>👌 Awesome</h1>
          <h2 className={styles.subtitle}>
            We have sent you an email with further instructions to reset your
            password, hope this doesnt happen again :)
          </h2>
        </header>
      ) : (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>Lost your password? 👀</h1>
            <h2 className={styles.subtitle}>
              Enter your email below and we can start the process to resetting
              it!
            </h2>
            {apiError ? (
              typeof apiError === 'object' && apiError.error ? (
                <h2 className={styles['error-text']}>{apiError.error}</h2>
              ) : (
                <h2 className={styles['error-text']}>
                  Oops looks like the API returned an unknown error, if this
                  keeps happening you should contact a dev though discord
                </h2>
              )
            ) : null}
          </header>

          <main>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputs}>
                <InputField
                  ref={register}
                  error={errors.email}
                  errorMessage="Invalid E-Mail Address."
                  autoComplete="email"
                  type="email"
                  name="email"
                  label="E-Mail"
                />
              </div>
              <Button type="submit">Reset Password</Button>
            </form>
          </main>
        </>
      )}
    </div>
  );
};

export default RequestPasswordReset;
