import { z } from 'zod';
// @mui
import { Card, Stack, Box } from '@mui/material';
// form
import { zodResolver } from '@hookform/resolvers/zod';
// divenire
import { useGroupCreate, usePrepareGroupCreate } from '../../divenire';
// utils
import { getContractAddress } from '../../utils/getContractAddress';
// hooks
import {
  useFormController,
  UseFormControllerProps,
} from '../../hooks/useFormController';
// components
import {
  FormProvider,
  SubmitButton,
  RHFTextField,
} from '../../components/hook-form';

// ----------------------------------------------------------------------

const FormValuesSchema = z.object({
  name: z.string().min(3),
  symbol: z.string().min(3),
  description: z.string().nullish(),
});

export type FormValues = z.infer<typeof FormValuesSchema>;

export type ClaimsNewEditFormProps = Omit<
  UseFormControllerProps<FormValues>,
  'onSubmit'
> & {
  isEdit?: boolean;
};

const DEFAULT_VALUES: FormValues = {
  name: '',
  description: '',
  symbol: '',
};

export function ClaimsNewEditForm({
  isEdit,
  defaultValues = DEFAULT_VALUES,
  ...others
}: ClaimsNewEditFormProps) {
  const { config } = usePrepareGroupCreate({
    address: getContractAddress('generators'),
  });

  const { data, write, status } = useGroupCreate(config);

  const [onSubmit, methods] = useFormController({
    ...others,
    defaultValues,
    onSubmit: (data) => {
      write?.();
      return data;
    },
    resolver: zodResolver(FormValuesSchema),
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Card sx={{ p: 3 }}>
        <Stack spacing={3}>
          <RHFTextField label="Name" name="name" />
          <RHFTextField label="Symbol" name="symbol" />
          <RHFTextField
            label="Description"
            name="description"
            multiline
            rows={4}
          />
          <Box textAlign="right">
            <SubmitButton
              alwaysEnabled
              fullWidth={false}
              loading={status === 'loading'}
              label={!isEdit ? 'Create claim' : 'Save Changes'}
            />
          </Box>
        </Stack>
      </Card>
    </FormProvider>
  );
}
