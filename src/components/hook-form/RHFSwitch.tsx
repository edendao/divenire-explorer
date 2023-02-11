// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Switch, FormControlLabel, FormControlLabelProps } from "@mui/material";

// ----------------------------------------------------------------------

export type RHFSwitchProps = Omit<FormControlLabelProps, "control"> & {
  name: string;
};

export function RHFSwitch({ name, ...other }: RHFSwitchProps) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}
