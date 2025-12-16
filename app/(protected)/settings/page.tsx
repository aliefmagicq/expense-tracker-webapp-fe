import { appConfig } from '@/app.config';
import { fetchServer } from '@/features/core/axios/fetch-server';

async function SettingsPage() {
  const res = await fetchServer({
    method: 'get',
    url: `${appConfig.laravelApiURL}/auth/me`,
    includeAuthorization: true,
  });

  return (
    <div>
      <p>{JSON.stringify(res)}</p>
    </div>
  );
}

export default SettingsPage;
