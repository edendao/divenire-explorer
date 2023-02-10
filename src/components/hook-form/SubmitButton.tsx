// form
import { useFormState } from 'react-hook-form';
// @mui
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

// ----------------------------------------------------------------------

export type SubmitButtonProps = LoadingButtonProps & {
  label?: string;
  alwaysEnabled?: boolean;
};

export function SubmitButton({
  label = 'Submit',
  children,
  ...others
}: SubmitButtonProps) {
  const { isSubmitting, isDirty, isValid } = useFormState();

  return (
    <LoadingButton
      type="submit"
      loading={isSubmitting}
      disabled={!isDirty || !isValid}
      variant="contained"
      size="large"
      {...others}
    >
      {children || label}
    </LoadingButton>
  );
}
