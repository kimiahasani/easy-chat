// app/utils/googleAuth.ts

export function initiateGoogleLogin(googleClientId: string, redirectUrl: string) {
   const scope = 'profile email';
   const responseType = 'token';
   const state = Math.random().toString(32).substring(9);
   const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
   const params = `client_id=${googleClientId}&redirect_uri=${redirectUrl}&response_type=${responseType}&scope=${scope}&state=${state}`;

   window.open(`${oauth2Endpoint}?${params}`, '_blank');
}

export function handleGoogleRedirect(backEndRouteUrl: string) {
   const urlParams = new URLSearchParams(window.location.hash.slice(1));
   const accessToken = urlParams.get('access_token');

   if (accessToken) {
      fetch(backEndRouteUrl, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ token: accessToken }),
      })
         .then((response) => response.json())
         .then((data) => {
            // Handle successful login
            console.log('Login successful:', data);
            window.opener.postMessage({ type: 'GOOGLE_LOGIN_SUCCESS', data }, '*');
            window.close();
         })
         .catch((error) => {
            console.error('Login error:', error);
            window.opener.postMessage(
               { type: 'GOOGLE_LOGIN_ERROR', error: error.message },
               '*'
            );
            window.close();
         });
   }
}
