import { appConfig } from '@/app.config';
import { fetchServer } from '@/utils/axios/fetch-server';

async function SettingsPage() {
  const res = await fetchServer({
    method: 'get',
    url: `${appConfig.laravelApiURL}/auth/me`,
    includeAuthorization: true,
  });

  console.log(JSON.stringify(res, null, 2));

  return (
    <div>
      <p>{JSON.stringify(res)}</p>
    </div>
  );
}

export default SettingsPage;
