// @mui
import { Stack, Box, Typography, Card } from '@mui/material';
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

export function GeneratorList() {
  return (
    <Stack direction="column" spacing={2}>
      {ITEMS.map((item) => (
        <Card key={item.id} sx={{ width: '100%', p: 3 }}>
          <GeneratorListItem data={item} />
        </Card>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type GeneratorListItemProps = {
  data: Record<string, any>;
};

function GeneratorListItem({ data }: GeneratorListItemProps) {
  const { name, symbol, description, id, owner } = data;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">
          {name} ({symbol})
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mt: 0.5, color: 'text.secondary' }}
        >
          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            {owner.id}
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
