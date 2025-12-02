export default class CreateResponse {
  public static success({
    payload,
    statusCode = 201,
  }: {
    payload: BodyInit | null | undefined;
    statusCode?: number;
  }) {
    return new Response(payload, {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public static fails({
    payload,
    statusCode = 422,
  }: {
    payload: BodyInit | null | undefined;
    statusCode?: number;
  }) {
    return new Response(payload, {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
