import { useMemo } from 'react';
import { useRouter } from 'next/router';
// @mui
import { Card, Container, Stack, Box } from '@mui/material';
// hooks
// components
import Page from '../../components/Page';
import { NavSectionVertical } from '../../components/nav-section';
// sections
import { GeneratorList, ExplorerNavConfig } from '../../sections/dashboard';

// ----------------------------------------------------------------------

const RENDER_MAP: Record<string, () => React.ReactNode> = {
  generators: () => <GeneratorList />,
};

export default function DashboardIndex() {
  const { query } = useRouter();
  const type = String(query.type || 'generators');

  const content = useMemo(() => {
    const renderComponent = RENDER_MAP[type];
    return renderComponent ? renderComponent() : null;
  }, [type]);

  return (
    <Page title="General: Dashboard">
      <Container maxWidth={false}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <Card sx={{ width: 240 }}>
            <NavSectionVertical pb={3} navConfig={ExplorerNavConfig} />
          </Card>
          <Box flex="1">{content}</Box>
        </Stack>
      </Container>
    </Page>
  );
}
