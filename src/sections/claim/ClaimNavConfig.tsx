import Iconify from '../../components/Iconify';
import { PATH_CLAIM } from '../../paths';

export const ClaimNavConfig = [
  {
    subheader: 'Display',
    items: [
      {
        title: 'Generators',
        path: PATH_CLAIM.list('generators'),
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
      },
      {
        title: 'Claims',
        path: PATH_CLAIM.list('claims'),
        icon: <Iconify icon="carbon:document" />,
      },
      {
        title: 'Certificates',
        path: PATH_CLAIM.list('certificates'),
        icon: <Iconify icon="carbon:certificate" />,
      },
    ],
  },
];
