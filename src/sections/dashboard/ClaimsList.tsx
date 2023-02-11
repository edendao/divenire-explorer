// @mui
import {
  Stack,
  Box,
  Typography,
  Card,
  CircularProgress,
  CardActionArea,
} from '@mui/material';
// utils
import { fAddress } from '../../utils/formatAddress';
// hooks
import { useClaimList, Claim } from '../../hooks/useDivenire';
import { PATH_GENERATORS } from '../../paths';
import { fDate } from '../../utils/formatTime';
// components
import EmptyContent from '../../components/EmptyContent';

export function ClaimsList() {
  const { data, status } = useClaimList();

  if (!data) {
    return <CircularProgress size={40} />;
  }

  return (
    <Stack direction="column" spacing={2}>
      {!data.length ? (
        <EmptyContent
          title="No results"
          sx={{
            color: 'text.secondary',
          }}
        />
      ) : (
        data.map((item) => (
          <Card key={item.id} sx={{ width: '100%' }}>
            <CardActionArea sx={{ p: 3 }} href={PATH_GENERATORS.view(item.id)}>
              <ClaimListItem data={item} />
            </CardActionArea>
          </Card>
        ))
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type ClaimListItemProps = {
  data: Claim;
};

function ClaimListItem({ data }: ClaimListItemProps) {
  const { id, signer, validFrom, validTo, value, uri } = data;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">Claim {id}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mt: 0.5, color: 'text.secondary' }}
        >
          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            Signer: {fAddress(signer.id)} - Valid from: {fDate(validFrom)} -{' '}
            {fDate(validTo)}
          </Typography>
        </Stack>
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
}
