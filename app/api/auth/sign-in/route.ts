import { appConfig } from '@/app.config';
import CreateResponse from '@/features/core/api/response';
import AuthSession from '@/features/core/auth/auth';
import { fetchServer } from '@/features/core/axios/fetch-server';
import AuthSchema from '@/features/core/schemas/auth.schema';

export async function POST(request: Request) {
  const body = await request.json();
  const validate = await AuthSchema.signIn().safeParseAsync(body);

  if (!validate.success) console.log(validate.error.message);
  const data = validate.data;

  const apiLaravelUrl = `${appConfig.laravelApiURL}/auth/sign-in`;
  const res = await fetchServer({
    method: 'post',
    url: apiLaravelUrl,
    body: data,
    includeAuthorization: false,
  });

  const resData = res.data;
  await new AuthSession().createSession({
    session: {
      token: { ...resData.token },
      userId: resData.user.id,
      email: resData.user.email,
    },
  });

  return CreateResponse.success({
    payload: JSON.stringify({
      success: true,
      message: res.message,
      data: res.data,
    }),
  });
}
