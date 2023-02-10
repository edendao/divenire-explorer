import { ReactNode } from 'react';
// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type FormProviderProps = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  innerRef?: React.Ref<HTMLFormElement>;
  onSubmit?: VoidFunction;
};

export function FormProvider({
  children,
  onSubmit,
  innerRef,
  methods,
}: FormProviderProps) {
  return (
    <Form {...methods}>
      <form ref={innerRef} onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}
