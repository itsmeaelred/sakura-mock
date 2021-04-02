import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js';
import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';

// import {
//     _AWS_IDENTITY_POOL_ID_,
//     _AWS_REGION_,
//     _AWS_USER_POOL_ID_,
//     _AWS_APP_CLIENT_ID_
//   } from 'src/environments/environment';

// export const configureAmplify = () => {
//   const configure = {
//     Auth: {
//       // identityPoolId:_AWS_IDENTITY_POOL_ID_,
//       region: _AWS_REGION_,
//       userPoolId: _AWS_USER_POOL_ID_,
//       userPoolWebClientId: _AWS_APP_CLIENT_ID_,
//     },
//   }
// }


// Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

Amplify.configure(environment.amplify);
Auth.configure(environment.amplify);

Amplify.Logger.LOG_LEVEL = 'DEBUG';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
