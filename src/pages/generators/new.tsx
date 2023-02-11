// @mui
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { ClaimsNewEditForm } from '../../sections/claim';

// ----------------------------------------------------------------------

export default function GeneratorsNew() {
  return (
    <Page title="Generators: Create new">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Create a new Generator"
          links={[{ name: 'Generators' }, { name: 'New generator' }]}
        />
        <ClaimsNewEditForm />
      </Container>
    </Page>
  );
}
