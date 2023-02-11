// @mui
import { enUS } from '@mui/material/locale';
// wagmi
import { goerli, mainnet } from 'wagmi/chains';

// GENERAL
// ----------------------------------------------------------------------

export const APP = {
  title: 'Divenire',
  description: '',
  keywords: [],
};

export const CHAINS = process.env.NODE_ENV === 'development' ? [goerli] : [];

export const CONTRACTS = {
  systemAcl: '0x6Dc0f8bbcC4B5E0bbbF197311782760B25E5Ca63',
  systemStorage: '0x7A683eb2CcDB8cDDDAce9547c4B6A459cF3c979d',
  generators: '0x81d19034c8b93993f9B0579CF04179aEf1aaE7b1',
  methodologies: '0x8ee60128f99BFDEb6AeAbA3033aB8d49048E8ea6',
  impact: '0xb601842D061C6fb1517f7bE18767Fb4C07dcc569',
  certificates: '0x5773B6535Ffd78b1a1f5F7D49Bc92110ec2F6b85',
  retirements: '0x030c18a9a830F2D04260B437c5045A1fe08AEFb1',
};

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// MULTI LANGUAGES
// ----------------------------------------------------------------------

const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
  },
];

export const I18N = {
  allLangs,
  defaultLang: allLangs[0], // English
};
