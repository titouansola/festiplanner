import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { useTranslation } from 'react-i18next';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ label, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { t } = useTranslation();
    return (
      <div className={'labeled-input'}>
        <input ref={ref} {...props} />
        <label>{t(label)}</label>
      </div>
    );
  }
);
