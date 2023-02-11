import Iconify from '../../components/Iconify';
import { PATH_EVALUATE } from '../../paths';

export const EvaluateNavConfig = [
  {
    subheader: 'Display',
    items: [
      {
        title: 'Generators',
        path: PATH_EVALUATE.list('generators'),
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
      },
      {
        title: 'Claims',
        path: PATH_EVALUATE.list('claims'),
        icon: <Iconify icon="carbon:document" />,
      },
      {
        title: 'Certificates',
        path: PATH_EVALUATE.list('certificates'),
        icon: <Iconify icon="carbon:certificate" />,
      },
    ],
  },
];
