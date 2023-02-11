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
import { useMethodologyList, Methodology } from '../../hooks/useDivenire';
import { PATH_METHODOLOGIES } from '../../paths';
// components
import EmptyContent from '../../components/EmptyContent';

export function MethodologiesList() {
  const { data, status } = useMethodologyList();

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
            <CardActionArea
              sx={{ p: 3 }}
              href={PATH_METHODOLOGIES.view(item.id)}
            >
              <MethodologyListItem data={item} />
            </CardActionArea>
          </Card>
        ))
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type MethodologyListItemProps = {
  data: Methodology;
};

function MethodologyListItem({ data }: MethodologyListItemProps) {
  const { id, owner } = data;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">Methodology {id}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mt: 0.5, color: 'text.secondary' }}
        >
          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            Owner: {fAddress(owner.id)}
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
