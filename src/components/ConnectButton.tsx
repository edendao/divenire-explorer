// @mui
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
// rainbowkit
import { ConnectButton as BaseConnectButton } from '@rainbow-me/rainbowkit';
//
import Iconify from './Iconify';

const NetworkIcon = styled("img")(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: "50%",
}));

export default function ConnectButton(props: ButtonProps) {
  return (
    <BaseConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        const buttonProps: ButtonProps = {
          ...props,
          variant: "contained",
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
            <Button {...buttonProps} color="error" onClick={openConnectModal}>
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
            endIcon={<Iconify icon="ic:round-arrow-drop-down" />}
            onClick={openChainModal}
          >
            {chain.name}
          </Button>
        );
      }}
    </BaseConnectButton.Custom>
  );
}
