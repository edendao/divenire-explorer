// @mui
import { Box, CardActionArea, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// rainbowkit
import { ConnectButton } from '@rainbow-me/rainbowkit';
// components
import EnsAvatar from '../../../components/EnsAvatar';
// hooks
import { useMainnetEnsName } from '../../../hooks/useMainnet';
// utils
import { fAddress } from '../../../utils/formatAddress';
import { fBalance } from '../../../utils/formatBalance';
import { fENS } from '../../../utils/formatENS';
// wagmi
import { useAccount, useBalance } from 'wagmi';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

export type NavbarAccountProps = {
  isCollapse: boolean | undefined;
};

export default function NavbarAccount({ isCollapse }: NavbarAccountProps) {
  const { address } = useAccount();
  const ensName = useMainnetEnsName(address);
  const { data: balance } = useBalance({ address });

  const displayName = ensName
    ? fENS(ensName)
    : address && fAddress(address as string);

  const displayBalance = balance
    ? `${fBalance(parseFloat(balance.formatted))} ${balance.symbol}`
    : undefined;

  return (
    <ConnectButton.Custom>
      {({ openAccountModal }) => (
        <RootStyle
          sx={{
            ...(isCollapse && {
              bgcolor: 'transparent',
            }),
          }}
        >
          <CardActionArea onClick={openAccountModal}>
            <Stack direction="row" alignItems="center" py={2} px={2.5}>
              <EnsAvatar address={address} />
              <Box
                sx={{
                  ml: 2,
                  transition: (theme) =>
                    theme.transitions.create('width', {
                      duration: theme.transitions.duration.shorter,
                    }),
                  ...(isCollapse && {
                    ml: 0,
                    width: 0,
                  }),
                }}
              >
                <Typography variant="subtitle2" noWrap>
                  {displayName}
                </Typography>
                <Typography
                  variant="body2"
                  noWrap
                  sx={{ color: 'text.secondary' }}
                >
                  {displayBalance}
                </Typography>
              </Box>
            </Stack>
          </CardActionArea>
        </RootStyle>
      )}
    </ConnectButton.Custom>
  );
}
