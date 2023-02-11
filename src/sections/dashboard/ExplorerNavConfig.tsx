import Iconify from '../../components/Iconify';
import { PATH_DASHBOARD } from '../../paths';

export const ExplorerNavConfig = [
  {
    subheader: 'Display',
    items: [
      {
        title: 'Generators',
        path: PATH_DASHBOARD.list('generators'),
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
      },
      {
        title: 'Methodologies',
        path: PATH_DASHBOARD.list('methodologies'),
        icon: <Iconify icon="carbon:list-boxes" />,
      },
      {
        title: 'Claims',
        path: PATH_DASHBOARD.list('claims'),
        icon: <Iconify icon="carbon:document" />,
      },
      {
        title: 'Evaluations',
        path: PATH_DASHBOARD.list('evaluations'),
        icon: <Iconify icon="carbon:improve-relevance" />,
      },
      {
        title: 'Certifications',
        path: PATH_DASHBOARD.list('certifications'),
        icon: <Iconify icon="carbon:certificate" />,
      },
    ],
  },
];
