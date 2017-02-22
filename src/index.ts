require('offline-plugin/runtime').install();
require.context('./assets/img', true, /^\.\//);
require('!!style-loader!css-loader!sass-loader!./index.scss');
import './vendor';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app';
platformBrowserDynamic().bootstrapModule(AppModule);
