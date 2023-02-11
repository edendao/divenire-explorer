// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_CLAIM = '/claim';
const ROOTS_EVALUATE = '/evaluate';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  list: (type: string) => path(ROOTS_DASHBOARD, `?type=${type}`),
};

export const PATH_CLAIM = {
  root: ROOTS_CLAIM,
  list: (type: string) => path(ROOTS_CLAIM, `?type=${type}`),
  view: (id: string) => path(ROOTS_CLAIM, `/${id}`),
};

export const PATH_EVALUATE = {
  root: ROOTS_EVALUATE,
  list: (type: string) => path(ROOTS_EVALUATE, `?type=${type}`),
  view: (id: string) => path(ROOTS_EVALUATE, `/${id}`),
};
