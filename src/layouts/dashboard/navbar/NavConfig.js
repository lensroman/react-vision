// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  browsers: getIcon('Browsers'),
  tracking: getIcon('Tracking'),
  teams: getIcon('Teams'),
  api: getIcon('API'),
  automation: getIcon('Automation'),
  settings: getIcon('Settings'),
  payment: getIcon('Payment'),
  support: getIcon('Support'),
  logOut: getIcon('LogOut'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: 'Browsers', path: PATH_DASHBOARD.general.app, icon: ICONS.browsers },
      { title: 'Tracking', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.tracking },
      { title: 'Teams', path: PATH_DASHBOARD.general.analytics, icon: ICONS.teams },
      { title: 'API', path: PATH_DASHBOARD.general.banking, icon: ICONS.api },
      { title: 'Automation', path: PATH_DASHBOARD.general.booking, icon: ICONS.automation },
      { title: 'Settings', path: PATH_DASHBOARD.general.booking, icon: ICONS.settings },
      { title: 'Payment', path: PATH_DASHBOARD.general.booking, icon: ICONS.payment },
      { title: 'Support', path: PATH_DASHBOARD.general.booking, icon: ICONS.support },
      { title: 'Log Out', path: PATH_DASHBOARD.general.booking, icon: ICONS.logOut },
    ],
  },
];

export default navConfig;
