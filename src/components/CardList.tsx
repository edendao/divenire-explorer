import { Card, Skeleton, Stack, StackProps } from '@mui/material';
import EmptyContent from './EmptyContent';

export type CardListProps = StackProps & {
  loading?: boolean;
  total?: number;
  perPage?: number;
};

const renderContent = (content: React.ReactNode, stackProps?: StackProps) => (
  <Stack spacing={2} direction="column" {...stackProps}>
    {content}
  </Stack>
);

export default function CardList(
  props: React.PropsWithChildren<CardListProps>
) {
  const { loading, total = 0, perPage = 12, children, ...others } = props;

  if (loading) {
    const content = [...Array(12)].map((item, index) => (
      <SkeletonCardListItem key={index} />
    ));

    return renderContent(content, others);
  }

  if (!total) {
    return (
      <EmptyContent
        title="No results"
        sx={{
          color: 'text.secondary',
        }}
      />
    );
  }

  return renderContent(children, others);
}

function SkeletonCardListItem() {
  return (
    <Card sx={{ width: '100%' }}>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ width: 0.5 }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row">
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
          </Stack>
          <Skeleton variant="text" sx={{ width: 40 }} />
        </Stack>
      </Stack>
    </Card>
  );
}
