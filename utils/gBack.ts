import https from 'https';

interface GoogleUserInfo {
   sub: string;
   name: string;
   given_name: string;
   family_name: string;
   picture: string;
   email: string;
   email_verified: boolean;
   locale: string;
}

function gBack(accessToken: string): Promise<GoogleUserInfo> {
   return new Promise((resolve, reject) => {
      const options = {
         hostname: 'www.googleapis.com',
         path: `/oauth2/v3/userinfo?access_token=${accessToken}`,
         method: 'GET',
      };

      const apiRequest = https.request(options, (apiResponse) => {
         let data = '';

         apiResponse.on('data', (chunk) => {
            data += chunk;
         });

         apiResponse.on('end', () => {
            if (apiResponse.statusCode === 200) {
               const userInfo: GoogleUserInfo = JSON.parse(data);
               resolve(userInfo);
            } else {
               reject(
                  new Error(
                     `API request failed with status ${apiResponse.statusCode}: ${data}`
                  )
               );
            }
         });
      });

      apiRequest.on('error', (error) => {
         reject(error);
      });

      apiRequest.end();
   });
}

export default gBack;
