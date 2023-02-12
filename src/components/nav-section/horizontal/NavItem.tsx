// @mui
import {
  Box,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { forwardRef } from 'react';

// config
import { ICON } from '../../../config';
import Iconify from '../../Iconify';
//
import { NavItemProps } from '../type';
import { ListItemStyle } from './style';

// ----------------------------------------------------------------------

type Props = NavItemProps & ListItemButtonProps;

const NavItem = forwardRef<HTMLDivElement & HTMLAnchorElement, Props>(
  function NavItemInner({ item, depth, active, open, ...other }, ref) {
    const { title, icon, info, children, disabled, caption } = item;

    return (
      <ListItemStyle
        ref={ref}
        open={open}
        depth={depth}
        active={active}
        disabled={disabled}
        {...other}
      >
        {icon && (
          <ListItemIcon
            sx={{
              minWidth: 'auto',
              mr: 1,
              color: 'inherit',
              flexShrink: 0,
              width: ICON.NAVBAR_ITEM,
              height: ICON.NAVBAR_ITEM,
            }}
          >
            {icon}
          </ListItemIcon>
        )}

        <ListItemText
          primary={title}
          primaryTypographyProps={{
            noWrap: true,
            variant: active ? 'subtitle2' : 'body2',
          }}
        />

        {caption && (
          <Tooltip title={caption} arrow>
            <Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
              <Iconify
                icon="eva:info-outline"
                sx={{
                  width: ICON.NAVBAR_ITEM_HORIZONTAL / -4,
                  height: ICON.NAVBAR_ITEM_HORIZONTAL / -4,
                }}
              />
            </Box>
          </Tooltip>
        )}

        {info && (
          <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
            {info}
          </Box>
        )}

        {!!children && (
          <Iconify
            icon={
              depth > 1 ? 'eva:chevron-right-fill' : 'eva:chevron-down-fill'
            }
            sx={{
              ml: 0.5,
              flexShrink: 0,
              width: ICON.NAVBAR_ITEM_HORIZONTAL,
              height: ICON.NAVBAR_ITEM_HORIZONTAL,
            }}
          />
        )}
      </ListItemStyle>
    );
  }
);

export default NavItem;
