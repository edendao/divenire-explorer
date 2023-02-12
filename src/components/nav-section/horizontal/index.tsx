// @mui
import { Stack } from '@mui/material';
import { memo } from 'react';

import { NavSectionProps } from '../type';
import NavList from './NavList';

// ----------------------------------------------------------------------

const hideScrollbar = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
} as const;

const NavSectionHorizontal: React.FC<NavSectionProps> = ({ navConfig }) => (
  <Stack direction="row" sx={{ margin: '0 auto', ...hideScrollbar }}>
    {navConfig.map((group) => (
      <Stack key={group.subheader} direction="row" flexShrink={0}>
        {group.items.map((list) => (
          <NavList
            key={list.title + list.path}
            data={list}
            depth={1}
            hasChildren={!!list.children}
          />
        ))}
      </Stack>
    ))}
  </Stack>
);

export default memo(NavSectionHorizontal);
