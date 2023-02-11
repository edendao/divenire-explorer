// @mui
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { ClaimsNewEditForm } from '../../sections/claim';

// ----------------------------------------------------------------------

export default function EvaluationsNew() {
  return (
    <Page title="Evaluations: Create new">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Create a new Evaluation"
          links={[{ name: 'Evaluations' }, { name: 'New evaluation' }]}
        />
        <ClaimsNewEditForm />
      </Container>
    </Page>
  );
}
