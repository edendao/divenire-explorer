import { useRouter } from 'next/router';
// @mui
import { Card, Container, Stack, Box, Toolbar, Button } from '@mui/material';
// hooks
// components
import Page from '../../components/Page';
import { NavSectionVertical } from '../../components/nav-section';
// sections
import { GeneratorListItem, ClaimsNavConfig } from '../../sections/claims';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ITEMS = [
  {
    name: 'name',
    symbol: 'symbol',
    description: 'description',
    id: '0x',
    owner: {
      id: '0x',
    },
  },
  {
    name: 'name',
    symbol: 'symbol',
    description: 'description',
    id: '0x',
    owner: {
      id: '0x',
    },
  },
];

export default function ClaimsIndex() {
  return (
    <Page title="Claims: Dashboard">
      <Container maxWidth={false}>
        <Toolbar>
          <Box flex="1" />
          <Button
            variant="soft"
            startIcon={<Iconify icon="carbon:add" />}
            disableElevation
          >
            Create
          </Button>
        </Toolbar>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <Card sx={{ width: 240 }}>
            <NavSectionVertical pb={3} navConfig={ClaimsNavConfig} />
          </Card>
          <Box flex="1">
            <Stack direction="column" spacing={2}>
              {ITEMS.map((item) => (
                <Card key={item.id} sx={{ width: '100%', p: 3 }}>
                  <GeneratorListItem data={item} />
                </Card>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Page>
  );
}
