import { useQuery } from 'react-query';
import { sdk, GeneratorFragmentFragment } from '../graphql';

export type Generator = GeneratorFragmentFragment;

export const useGeneratorList = () =>
  useQuery(['generator', 'list'], () =>
    sdk.generatorList().then((r) => r.generators)
  );

export const useGenerator = (id: string) =>
  useQuery(['generator', 'list'], () =>
    sdk.generator({ id }).then((r) => r.generator)
  );
