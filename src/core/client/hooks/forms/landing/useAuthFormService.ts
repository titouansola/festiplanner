import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Credentials } from '@internal/types';
import { isClient } from '@internal/utils';
import { useAuthService } from '../../auth/useAuthService';

export function useAuthFormService() {
  const { register, handleSubmit } = useForm<Credentials>();
  useAuthService();
  let callbackUrl: string;

  if (isClient()) {
    callbackUrl = location.href + '/dashboard';
  }

  const onSubmit: SubmitHandler<Credentials> = credentials =>
    signIn('credentials', { ...credentials, callbackUrl });

  return {
    onSubmit: handleSubmit(onSubmit),
    googleSignIn: () => signIn('google', { callbackUrl }),
    form: {
      email: register('email', { required: true }),
      password: register('password', { required: true }),
    },
  };
}
