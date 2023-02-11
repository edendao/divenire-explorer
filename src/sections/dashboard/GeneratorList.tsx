// @mui
import { Stack, Box, Typography, Card, CircularProgress } from '@mui/material';
// utils
import { fAddress } from '../../utils/formatAddress';
// hooks
import { useGeneratorList, Generator } from '../../hooks/useDivenire';

export function GeneratorList() {
  const { data, status } = useGeneratorList();

  return (
    <Stack direction="column" spacing={2}>
      {!data ? (
        <CircularProgress size={40} />
      ) : (
        data.map((item) => (
          <Card key={item.id} sx={{ width: '100%', p: 3 }}>
            <GeneratorListItem data={item} />
          </Card>
        ))
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type GeneratorListItemProps = {
  data: Generator;
};

function GeneratorListItem({ data }: GeneratorListItemProps) {
  const { id, owner } = data;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">Generator {id}</Typography>
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
