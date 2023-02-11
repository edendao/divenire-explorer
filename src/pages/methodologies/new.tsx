// @mui
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { ClaimsNewEditForm } from '../../sections/claim';

// ----------------------------------------------------------------------

export default function MethodologiesNew() {
  return (
    <Page title="Methodologies: Create new">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Create a new Methodology"
          links={[{ name: 'Methodology' }, { name: 'New methodology' }]}
        />
        <ClaimsNewEditForm />
      </Container>
    </Page>
  );
}
