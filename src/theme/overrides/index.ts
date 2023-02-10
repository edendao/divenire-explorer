import { Theme } from '@mui/material/styles';

//
import Autocomplete from './Autocomplete';
import Backdrop from './Backdrop';
import Button from './Button';
import Card from './Card';
import CssBaseline from './CssBaseline';
import Dialog from './Dialog';
import Fab from './Fab';
import Input from './Input';
import Paper from './Paper';
import Popover from './Popover';
import Tabs from './Tabs';
import Tooltip from './Tooltip';
import Typography from './Typography';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Autocomplete(theme),
    Backdrop(theme),
    Button(theme),
    Card(theme),
    CssBaseline(theme),
    Dialog(theme),
    Input(theme),
    Paper(theme),
    Popover(theme),
    Fab(theme),
    Tabs(theme),
    Tooltip(theme),
    Typography(theme)
  );
}
