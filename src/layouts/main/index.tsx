import { useState, ReactNode } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import { useResponsive } from '../../hooks/useResponsive';
// config
import { HEADER } from '../../config';
//
import DashboardHeader from './header';
import NavbarVertical from './navbar/NavbarVertical';
import NavbarHorizontal from './navbar/NavbarHorizontal';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const isDesktop = useResponsive('up', 'lg');
  const [open, setOpen] = useState(false);

  return (
    <>
      <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout />

      {isDesktop ? (
        <NavbarHorizontal />
      ) : (
        <NavbarVertical
          isOpenSidebar={open}
          onCloseSidebar={() => setOpen(false)}
        />
      )}

      <Box
        component="main"
        sx={{
          px: { lg: 2 },
          pt: {
            xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
            lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
          },
          pb: {
            xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
            lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
