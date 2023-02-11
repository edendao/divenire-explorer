// @mui
import { Stack, Box, Typography, Card, CardActionArea } from '@mui/material';
// utils
import { fAddress } from '../../utils/formatAddress';
// hooks
import { useGeneratorList, Generator } from '../../hooks/useDivenire';
import { PATH_GENERATORS } from '../../paths';
// components
import CardList from '../../components/CardList';

export function GeneratorsList() {
  const { data, status } = useGeneratorList();

  return (
    <CardList loading={status === 'loading'} total={data?.length}>
      {data?.map((item) => (
        <Card key={item.id} sx={{ width: '100%' }}>
          <CardActionArea sx={{ p: 3 }} href={PATH_GENERATORS.view(item.id)}>
            <GeneratorListItem data={item} />
          </CardActionArea>
        </Card>
      ))}
    </CardList>
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
