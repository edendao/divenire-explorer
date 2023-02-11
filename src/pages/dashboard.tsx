import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
// @mui
import { Card, Container, Stack, Box } from '@mui/material';
// path
import { PATH_DASHBOARD } from '../paths';
// components
import Page from '../components/Page';
import { NavSectionVertical } from '../components/nav-section';
// sections
import {
  GeneratorsList,
  ClaimsList,
  ExplorerNavConfig,
  EvaluationsList,
  MethodologiesList,
  CertificatesList,
} from '../sections/dashboard';

// ----------------------------------------------------------------------

const RENDER_MAP: Record<string, () => React.ReactNode> = {
  generators: () => <GeneratorsList />,
  claims: () => <ClaimsList />,
  evaluations: () => <EvaluationsList />,
  methodologies: () => <MethodologiesList />,
  certificates: () => <CertificatesList />,
};

export default function DashboardIndex() {
  const { query, push, isReady } = useRouter();
  const type = query.type && String(query.type);

  const content = useMemo(() => {
    if (!type) {
      return null;
    }

    const renderComponent = RENDER_MAP[type];
    return renderComponent ? renderComponent() : null;
  }, [type]);

  useEffect(() => {
    if (isReady && !type) {
      push(PATH_DASHBOARD.list('generators'));
    }
  }, [isReady, type]); // eslint-disable-line

  return (
    <Page title="General: Dashboard">
      <Container maxWidth={false}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="flex-start"
        >
          <Card sx={{ width: 240 }}>
            <NavSectionVertical pb={3} navConfig={ExplorerNavConfig} />
          </Card>
          <Box flex="1">{content}</Box>
        </Stack>
      </Container>
    </Page>
  );
}
