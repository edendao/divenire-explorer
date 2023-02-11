import { z } from "zod";
// @mui
import { Card, Stack, Box } from "@mui/material";
// form
import { zodResolver } from '@hookform/resolvers/zod';
// divenire
import { useGroupCreate, usePrepareGroupCreate } from '../../divenire';
// hooks
import {
  useFormController,
  UseFormControllerProps,
} from "../../hooks/useFormController";
// components
import {
  FormProvider,
  SubmitButton,
  RHFTextField,
} from "../../components/hook-form";

// ----------------------------------------------------------------------

const FormValuesSchema = z.object({
  name: z.string().min(3),
  symbol: z.string().min(3),
  description: z.string().nullish(),
});

export type FormValues = z.infer<typeof FormValuesSchema>;

export type Factory = {
  type: "generators" | "methodologies";
  address: `0x${string}`;
};

export type FactoryNewEditFormProps = Omit<
  UseFormControllerProps<FormValues>,
  'onSubmit'
> & {
  isEdit?: boolean;
  factory: Factory;
};

const DEFAULT_VALUES: FormValues = {
  name: '',
  description: '',
  symbol: '',
};

export function FactoryNewEditForm({
  factory,
  isEdit,
  defaultValues = DEFAULT_VALUES,
  ...others
}: FactoryNewEditFormProps) {
  const { config } = usePrepareGroupCreate({ address: factory.address });
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
          <RHFTextField label="Description" name="description" multiline />
          <Box textAlign="right">
            <SubmitButton
              alwaysEnabled
              fullWidth={false}
              loading={status === 'loading'}
              label={!isEdit ? 'Create' : 'Save Changes'}
            />
          </Box>
        </Stack>
      </Card>
    </FormProvider>
  );
}
