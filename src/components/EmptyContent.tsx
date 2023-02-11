// @mui
import { styled } from '@mui/material/styles';
import { Typography, Box, BoxProps } from '@mui/material';
//
import Image from './Image';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
}));

// ----------------------------------------------------------------------

export type EmptyContentProps = BoxProps & {
  title: string;
  img?: string;
  description?: string;
};

export default function EmptyContent({
  title,
  description,
  img,
  ...other
}: EmptyContentProps) {
  return (
    <RootStyle {...other}>
      <Box sx={{ mb: 3, width: '100%', maxWidth: 640 }}>
        <Image
          ratio="21/9"
          alt="empty content"
          src={img || '/assets/illustrations/illustration_empty_content.svg'}
          layout="fill"
        />
      </Box>

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </RootStyle>
  );
}
