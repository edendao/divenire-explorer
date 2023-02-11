// @mui
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { ClaimsNewEditForm } from '../../sections/claim';

// ----------------------------------------------------------------------

export default function CertificatesNew() {
  return (
    <Page title="Certificates: Create new">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Create a new Certificate"
          links={[{ name: 'Certificates' }, { name: 'New certificate' }]}
        />
        <ClaimsNewEditForm />
      </Container>
    </Page>
  );
}
