import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/fonts/LinearIcons/selection.json';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'Linearicons-Free');

const LinearIcon = (props) => <Icon {...props} />;

export default LinearIcon;
