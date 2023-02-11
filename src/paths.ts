// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_CLAIM = '/claim';
const ROOTS_EVALUATE = '/evaluate';
const ROOTS_GENERATORS = '/generators';
const ROOTS_EVALUATIONS = '/evaluations';
const ROOTS_METHODOLOGIES = '/methodologies';
const ROOTS_CERTIFICATES = '/certificates';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  list: (type: string) => path(ROOTS_DASHBOARD, `?type=${type}`),
};

export const PATH_CLAIM = {
  root: ROOTS_CLAIM,
  list: (type: string) => path(ROOTS_CLAIM, `?type=${type}`),
};

export const PATH_EVALUATE = {
  root: ROOTS_EVALUATE,
  list: (type: string) => path(ROOTS_EVALUATE, `?type=${type}`),
};

export const PATH_GENERATORS = {
  root: ROOTS_GENERATORS,
  view: (id: string) => path(ROOTS_GENERATORS, `/${id}`),
};

export const PATH_EVALUATIONS = {
  root: ROOTS_EVALUATIONS,
  view: (id: string) => path(ROOTS_EVALUATIONS, `/${id}`),
};

export const PATH_METHODOLOGIES = {
  root: ROOTS_METHODOLOGIES,
  view: (id: string) => path(ROOTS_METHODOLOGIES, `/${id}`),
};

export const PATH_CERTIFICATES = {
  root: ROOTS_CERTIFICATES,
  view: (id: string) => path(ROOTS_CERTIFICATES, `/${id}`),
};
