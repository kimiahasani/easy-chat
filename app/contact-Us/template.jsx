import { cookies } from "next/headers";
import { checkAccessToken } from "../../controller/jwt/checkToken";
import { redirect } from "next/navigation";
import "dotenv/config";

function checkJwt() {
  const accessT = String(cookies().get("accessToken").value);
  const accessS = String(String(process.env.ACCESS_SEC));
  const accessTime = String(String(process.env.ACCESS_TIME));

  const refreshT = String(cookies().get("refreshToken").value);
  const refreshS = String(String(process.env.REFRESH_SEC));

  // console.log('Got data from cookie from Chat page');
  // console.log('accessS : ', accessS, 'accessT :', accessT);

  try {
    const isAccess = checkAccessToken(accessT, accessS);
    if (!isAccess) throw new Error("expired");

    // console.log('Token is valid');
  } catch {
    // if access ok return true

    const isRefresh = checkAccessToken(refreshT, refreshS);
    // if (!isRefresh.valid) redirect('/sign');
    if (!isRefresh) redirect("/sign");

    // console.log('go to create new token');
    const newAccessToken = jwt.sign({ user: true }, accessS, { expiresIn: accessTime });
    cookies().set("accessToken", String(newAccessToken));
    // console.log('new token created and stored in cooke');
  }
}

export default function ChatTemplate({ children }) {
  checkJwt();
  return <div>{children}</div>;
}
