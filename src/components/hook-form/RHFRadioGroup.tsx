// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  Radio,
  RadioGroup,
  FormHelperText,
  RadioGroupProps,
  FormControlLabel,
} from '@mui/material';

// ----------------------------------------------------------------------

export type RHFRadioGroupProps = RadioGroupProps & {
  name: string;
  options: {
    label: string;
    value: any;
  }[];
};

export function RHFRadioGroup({ name, options, ...other }: RHFRadioGroupProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <RadioGroup {...field} row {...other}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
