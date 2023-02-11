import { useRouter } from 'next/router';
// form
import { useForm, FieldValues, UseFormProps } from 'react-hook-form';

export type UseFormControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TResult = any
> = UseFormProps<TFieldValues, TContext> & {
  redirect?: string | ((result: TResult) => string | false) | false;
  onSubmit: (values: TFieldValues) => Promise<TResult> | TResult;
  onSubmitSuccess?: (result: TResult) => void | Promise<void>;
  onSubmitError?: (error: any) => void | Promise<void>;
};

export function useFormController<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TResult = any
>(props: UseFormControllerProps<TFieldValues, TContext, TResult>) {
  const {
    redirect = false,
    onSubmit,
    onSubmitError = () => {},
    onSubmitSuccess = () => {},
    ...useFormProps
  } = props;

  const { push } = useRouter();
  const methods = useForm({ mode: 'onBlur', ...useFormProps });

  const { reset, handleSubmit } = methods;

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      const response = await onSubmit(data);

      reset(data);

      const redirectPath =
        typeof redirect === 'function' ? redirect(response) : redirect || false;

      onSubmitSuccess(response);

      if (redirectPath) {
        push(redirectPath);
      }
    } catch (e) {
      onSubmitError(e);
    }
  });

  return [handleSubmitForm, methods] as const;
}
