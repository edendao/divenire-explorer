// @mui
import { Box, Card, Container, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

import { NavSectionVertical } from '../components/nav-section';
// components
import Page from '../components/Page';
// path
import { PATH_DASHBOARD } from '../paths';
// sections
import {
  CertificatesList,
  ClaimsList,
  EvaluationsList,
  ExplorerNavConfig,
  GeneratorsList,
  MethodologiesList,
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
            <NavSectionVertical pb={1} navConfig={ExplorerNavConfig} />
          </Card>
          <Box flex="1">{content}</Box>
        </Stack>
      </Container>
    </Page>
  );
}
