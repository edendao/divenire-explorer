// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

type RHFTextFieldProps = TextFieldProps & {
  name: string;
};

export function RHFTextField({ name, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
