import { useQuery } from 'react-query';
import {
  sdk,
  GeneratorFragmentFragment,
  ClaimFragmentFragment,
  EvaluationFragmentFragment,
  MethodologyFragmentFragment,
  CertificateFragmentFragment,
} from '../graphql';

export type Generator = GeneratorFragmentFragment;
export type Claim = ClaimFragmentFragment;
export type Evaluation = EvaluationFragmentFragment;
export type Methodology = MethodologyFragmentFragment;
export type Certificate = CertificateFragmentFragment;

export const useGeneratorList = () =>
  useQuery(['generator', 'list'], () =>
    sdk.generatorList().then((r) => r.generators)
  );

export const useGenerator = (id: string) =>
  useQuery(['generator', id], () =>
    sdk.generator({ id }).then((r) => r.generator)
  );

export const useClaimList = () =>
  useQuery(['claim', 'list'], () => sdk.claimList().then((r) => r.claims));

export const useClaim = (id: string) =>
  useQuery(['claim', id], () => sdk.claim({ id }).then((r) => r.claim));

export const useEvaluationList = () =>
  useQuery(['evaluation', 'list'], () =>
    sdk.evaluationList().then((r) => r.evaluations)
  );

export const useEvaluation = (id: string) =>
  useQuery(['evaluation', id], () =>
    sdk.evaluation({ id }).then((r) => r.evaluation)
  );

export const useMethodologyList = () =>
  useQuery(['methodology', 'list'], () =>
    sdk.methodologyList().then((r) => r.methodologies)
  );

export const useMethodology = (id: string) =>
  useQuery(['methodology', id], () =>
    sdk.methodology({ id }).then((r) => r.methodology)
  );

export const useCertificateList = () =>
  useQuery(['certificate', 'list'], () =>
    sdk.certificateList().then((r) => r.certificates)
  );

export const useCertificate = (id: string) =>
  useQuery(['certificate', id], () =>
    sdk.certificate({ id }).then((r) => r.certificate)
  );
