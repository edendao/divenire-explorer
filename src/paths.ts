// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_ATTESTATIONS = '/attestations';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
};

export const PATH_ATTESTATIONS = {
  root: ROOTS_ATTESTATIONS,
  view: (id: string) => path(ROOTS_ATTESTATIONS, `/${id}`),
};
