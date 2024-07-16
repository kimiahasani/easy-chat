function gFront(
   redirectUrl: string,
   backEndRouteUrl: string,
   googleClientId: string
): Promise<any> {
   return new Promise((resolve, reject) => {
      const scope = 'profile email';
      const responseType = 'token';
      const state = Math.random().toString(32).substring(9);

      const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
      const params = `client_id=${googleClientId}&redirect_uri=${redirectUrl}&response_type=${responseType}&scope=${scope}&state=${state}`;

      const newTab = window.open(`${oauth2Endpoint}?${params}`, '_blank');

      if (!newTab) {
         reject(new Error('Failed to open newTab'));
         return;
      }

      // const checkNewTab = setInterval(() => {
      //    if (newTab.closed) {
      //       clearInterval(checkNewTab);
      //       return;
      //    }
      //    try {
      //       if (newTab.location.href.includes(redirectUrl)) {
      //          clearInterval(checkNewTab);
      //          const urlParams = new URLSearchParams(newTab.location.hash.slice(1));
      //          const accessToken = urlParams.get('access_token');
      //          // console.log('Access Token:', accessToken);
      //          newTab.close();

      //          if (!accessToken) {
      //             reject(new Error('No access token found'));
      //             return;
      //          }

      //          fetch(backEndRouteUrl, {
      //             method: 'POST',
      //             headers: { 'Content-Type': 'application/json' },
      //             body: JSON.stringify({ token: accessToken }),
      //          })
      //             .then((response) => response.json())
      //             .then((data) => {
      //                console.log('data before resolve : ', data);
      //                resolve('data');
      //                console.log('After resolve');
      //             })
      //             .catch((err) => {
      //                reject(err);
      //             });
      //       }
      //    } catch (error) {
      //       // خطای دسترسی به origin مختلف را نادیده بگیرید
      //       if (error instanceof Error) {
      //          reject(error);
      //       } else {
      //          reject(new Error('An unknown error occurred'));
      //       }
      //    }
      // }, 200);
   });
}

export default gFront;
