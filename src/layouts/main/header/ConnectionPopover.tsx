// @mui
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// rainbowkit
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NetworkIcon = styled('img')(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
}));

export default function ConnectPopover() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        const buttonProps: ButtonProps = {
          variant: 'contained',
          disableElevation: true,
        };

        if (!connected) {
          return (
            <Button {...buttonProps} onClick={openConnectModal}>
              Connect Wallet
            </Button>
          );
        }

        if (chain.unsupported) {
          return (
            <Button {...buttonProps} color="error" onClick={openChainModal}>
              Wrong network
            </Button>
          );
        }

        return (
          <Button
            {...buttonProps}
            color="inherit"
            startIcon={
              chain.hasIcon ? (
                <NetworkIcon
                  src={chain.iconUrl}
                  sx={{ background: chain.iconBackground }}
                />
              ) : undefined
            }
            endIcon={<ArrowDropDown />}
            onClick={openChainModal}
          >
            {chain.name}
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
}
