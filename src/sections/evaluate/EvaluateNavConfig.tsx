import Iconify from '../../components/Iconify';
import { PATH_EVALUATE } from '../../paths';

export const EvaluateNavConfig = [
  {
    subheader: 'Evaluate',
    items: [
      {
        title: 'Methodologies',
        path: PATH_EVALUATE.list('generators'),
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
      },
      {
        title: 'Evaluations',
        path: PATH_EVALUATE.list('claims'),
        icon: <Iconify icon="carbon:document" />,
      },
    ],
  },
];
