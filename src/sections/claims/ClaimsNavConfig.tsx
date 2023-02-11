import Iconify from '../../components/Iconify';

export const ClaimsNavConfig = [
  {
    subheader: 'Display',
    items: [
      {
        title: 'Generators',
        path: '/claims?type=generators',
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
      },
      {
        title: 'Claims',
        path: '/claims?type=claims',
        icon: <Iconify icon="carbon:document" />,
      },
      {
        title: 'Certifications',
        path: '/claims?type=certifications',
        icon: <Iconify icon="carbon:certificate" />,
      },
    ],
  },
];
