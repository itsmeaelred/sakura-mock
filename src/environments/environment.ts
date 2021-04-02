// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const baseUrl = "http://localhost:4200/api/";
export const environment = {
  production: false,
  amplify: {
    // 以下がAWS Amplify(Auth)の設定
    Auth: {
      // identityPoolId: 'ap-northeast-1:b7af109b-f40b-4ab3-b34a-4d9f615cb73b',
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_KJ0cXniN5',
      userPoolWebClientId: '6qs1gp0ihh4j3midi9bcmasrg4'
     }
    }
  };

// export const _AWS_IDENTITY_POOL_ID_ = "ap-northeast-1:b7af109b-f40b-4ab3-b34a-4d9f615cb73b";
// export const _AWS_REGION_ = "ap-northeast-1";
// export const _AWS_USER_POOL_ID_ = "ap-northeast-1_z0WGvFZrD";
// export const _AWS_APP_CLIENT_ID_ = "4okkuqjq2fgid166vlqn99v9kj";


// Initialize the Amazon Cognito credentials provider
// CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
//   getApplicationContext(),
//   "ap-northeast-1:b7af109b-f40b-4ab3-b34a-4d9f615cb73b", // Identity pool ID
//   Regions.AP_NORTHEAST_1 // Region
// );
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
