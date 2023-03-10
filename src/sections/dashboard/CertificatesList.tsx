// @mui
import { Stack, Box, Typography, Card, CardActionArea } from '@mui/material';
// hooks
import { Certificate, useCertificateList } from '../../hooks/useDivenire';
import { PATH_CERTIFICATES } from '../../paths';
// components
import CardList from '../../components/CardList';

export function CertificatesList() {
  const { data, status } = useCertificateList();

  return (
    <CardList loading={status === 'loading'} total={data?.length}>
      {data?.map((item) => (
        <Card key={item.id} sx={{ width: '100%' }}>
          <CardActionArea sx={{ p: 3 }} href={PATH_CERTIFICATES.view(item.id)}>
            <CertificateListItem data={item} />
          </CardActionArea>
        </Card>
      ))}
    </CardList>
  );
}

// ----------------------------------------------------------------------

type CertificateListItemProps = {
  data: Certificate;
};

function CertificateListItem({ data }: CertificateListItemProps) {
  const { id, claim, generator, evaluation, methodology } = data;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">Certificate {id}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mt: 0.5, color: 'text.secondary' }}
        >
          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            Claim: {claim.id} - Evaluation: {evaluation.id}
          </Typography>
        </Stack>
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
          0
        </Typography>
      </Stack>
    </Stack>
  );
}
