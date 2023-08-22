import { Input, useAuthFormService } from '@internal/client';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { onSubmit, form, googleSignIn } = useAuthFormService();
  const { t } = useTranslation();
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          label={'EMAIL'}
          type={'email'}
          placeholder={'michel.dupont@gmail.com'}
          {...form.email}
        />
        <Input
          label={'PASSWORD'}
          type={'password'}
          placeholder={'********'}
          {...form.password}
        />
        <button className={'btn wide'} type={'submit'}>
          {t('LOGIN_USE_CREDENTIALS')}
        </button>
        <button className={'btn alt wide'} onClick={googleSignIn}>
          {t('LOGIN_USE_GOOGLE')}
        </button>
      </form>
    </>
  );
}
