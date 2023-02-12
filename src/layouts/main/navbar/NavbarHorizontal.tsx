import { AppBar, Box, Container, Toolbar } from '@mui/material';
// @mui
import { styled } from '@mui/material/styles';
import { memo } from 'react';

// components
import { NavSectionHorizontal } from '../../../components/nav-section';
// config
import { HEADER } from '../../../config';
// utils
import cssStyles from '../../../utils/cssStyles';
//
import navConfig from './NavConfig';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  height: HEADER.MOBILE_HEIGHT,
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  left: 'auto',
  right: 0,
  color: 'inherit',
  boxShadow: 'none',
  top: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

function NavbarHorizontal() {
  return (
    <RootStyle as="nav">
      <Toolbar
        sx={{
          width: '100%',
          minHeight: '100% !important',
        }}
      >
        <NavSectionHorizontal navConfig={navConfig} />
      </Toolbar>
      <Box
        sx={(theme) => ({
          left: 0,
          right: 0,
          bottom: 0,
          height: 24,
          zIndex: -1,
          width: '100%',
          margin: 'auto',
          borderRadius: ' 50%',
          position: 'absolute',
          boxShadow: theme.customShadows.z8,
        })}
      />
    </RootStyle>
  );
}

export default memo(NavbarHorizontal);
