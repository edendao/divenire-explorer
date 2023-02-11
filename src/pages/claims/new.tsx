// @mui
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { ClaimsNewEditForm } from '../../sections/claims';

// ----------------------------------------------------------------------

export default function ClaimsNew() {
  return (
    <Page title="Claims: Create new">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Create a new Claim"
          links={[{ name: 'Claims' }, { name: 'New claim' }]}
        />
        <ClaimsNewEditForm />
      </Container>
    </Page>
  );
}
