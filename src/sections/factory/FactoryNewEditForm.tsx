import { z } from "zod";
// @mui
import { Card, Stack, Box } from "@mui/material";
// form
import { zodResolver } from "@hookform/resolvers/zod";
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
});

export type FormValues = z.infer<typeof FormValuesSchema>;

export type Factory = {
  type: "generators" | "methodologies";
  address: `0x${string}`;
};

export type FactoryNewEditFormProps = UseFormControllerProps<FormValues> & {
  isEdit?: boolean;
  factory: Factory;
};

export function FactoryNewEditForm({
  factory,
  isEdit,
  ...others
}: FactoryNewEditFormProps) {
  const [onSubmit, methods] = useFormController({
    ...others,
    resolver: zodResolver(FormValuesSchema),
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Card sx={{ p: 3 }}>
        <Stack spacing={3}>
          <RHFTextField label="Name" name="name" />
          <RHFTextField label="Symbol" name="symbol" />
          <Box textAlign="right">
            <SubmitButton
              fullWidth={false}
              label={!isEdit ? "Create" : "Save Changes"}
            />
          </Box>
        </Stack>
      </Card>
    </FormProvider>
  );
}
