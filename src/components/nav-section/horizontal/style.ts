// @mui
import { alpha, styled } from '@mui/material/styles';
import { Popover, ListItemButton, ListItemButtonProps } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { NAVBAR } from '../../../config';

// ----------------------------------------------------------------------

export interface ListItemStyleProps extends ListItemButtonProps {
  open: boolean;
  active: boolean;
  depth: number;
}

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})<ListItemStyleProps>(({ active, depth, open, theme }) => {
  const activeStyle = {
    color: theme.palette.primary.main,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  };

  const activeSubStyle = {
    boxShadow: 'none',
  };

  const hoverStyle = {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  };

  return {
    textTransform: 'capitalize',
    margin: theme.spacing(0, 0, 0, 1),
    padding: theme.spacing(0, 1),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    height: NAVBAR.DASHBOARD_ITEM_HORIZONTAL_HEIGHT,
    '&:first-of-type': {
      marginLeft: 0,
    },
    '&:hover': hoverStyle,
    // Active item
    ...(active && {
      ...activeStyle,
      '&:hover': { ...activeStyle },
    }),
    // Active item sub
    ...(active &&
      depth !== 1 && {
        ...activeSubStyle,
        '&:hover': { ...activeSubStyle },
      }),
    // Sub item
    ...(depth && {
      ...(depth > 1 && {
        width: '100%',
        margin: 0,
        paddingRight: 0,
        paddingLeft: theme.spacing(1),
      }),
    }),
    // Open
    ...(open && !active && hoverStyle),
  };
});

// ----------------------------------------------------------------------

export const PaperStyle = styled(Popover)(({ theme }) => ({
  pointerEvents: 'none',
  '& .MuiPopover-paper': {
    width: 160,
    pointerEvents: 'auto',
    padding: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    boxShadow: theme.customShadows.dropdown,
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    ...cssStyles(theme).bgBlur(),
  },
}));
