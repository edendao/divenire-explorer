import Iconify from '../../components/Iconify';

export const ExplorerNavConfig = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Generators',
        path: '/dashboard?type=generators',
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
      },
      {
        title: 'Methodologies',
        path: '/dashboard?type=methodologies',
        icon: <Iconify icon="carbon:list-boxes" />,
      },
      {
        title: 'Claims',
        path: '/dashboard?type=claims',
        icon: <Iconify icon="carbon:document" />,
      },
      {
        title: 'Evaluations',
        path: '/dashboard?type=evaluations',
        icon: <Iconify icon="carbon:improve-relevance" />,
      },
      {
        title: 'Certifications',
        path: '/dashboard?type=certifications',
        icon: <Iconify icon="carbon:certificate" />,
      },
    ],
  },
];
