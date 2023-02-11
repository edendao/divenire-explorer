// @mui
import { Stack, Box, Typography, Card, CardActionArea } from '@mui/material';
// utils
import { fDate } from '../../utils/formatTime';
import { fAddress } from '../../utils/formatAddress';
// hooks
import { useEvaluationList, Evaluation } from '../../hooks/useDivenire';
import { PATH_EVALUATIONS } from '../../paths';
// components
import CardList from '../../components/CardList';

export function EvaluationsList() {
  const { data, status } = useEvaluationList();

  return (
    <CardList loading={status === 'loading'} total={data?.length}>
      {data?.map((item) => (
        <Card key={item.id} sx={{ width: '100%' }}>
          <CardActionArea sx={{ p: 3 }} href={PATH_EVALUATIONS.view(item.id)}>
            <EvaluationListItem data={item} />
          </CardActionArea>
        </Card>
      ))}
    </CardList>
  );
}

// ----------------------------------------------------------------------

type EvaluationListItemProps = {
  data: Evaluation;
};

function EvaluationListItem({ data }: EvaluationListItemProps) {
  const {
    id,
    signer,
    validFrom,
    validTo,
    value,
    uri,
    claim,
    generator,
    methodology,
    revokedAt,
    updatedAt,
  } = data;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">Evaluation {id}</Typography>
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
          0
        </Typography>
      </Stack>
    </Stack>
  );
}
