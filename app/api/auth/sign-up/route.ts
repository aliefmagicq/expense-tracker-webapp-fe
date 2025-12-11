import { appConfig } from '@/app.config';
import CreateResponse from '@/features/core/api/response';
import { fetchServer } from '@/features/core/axios/fetch-server';
import AuthSchema from '@/features/core/schemas/auth.schema';

export async function POST(request: Request) {
  const body = await request.json();
  const validate = await AuthSchema.signUp().safeParseAsync(body);

  if (!validate.success) console.log(validate.error.message);
  const data = validate.data;

  const apiLaravelUrl = `${appConfig.laravelApiURL}/auth/sign-up`;
  const res = await fetchServer({
    method: 'post',
    url: apiLaravelUrl,
    body: data,
    includeAuthorization: false,
  });

  return CreateResponse.success({
    payload: JSON.stringify({
      success: true,
      message: res.message,
      data: res.data,
    }),
  });
}
