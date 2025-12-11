import z from 'zod';

export default class AuthSchema {
  public static signIn() {
    const schema = z.object({
      email: z.email(),
      password: z
        .string()
        .min(8, { error: 'password minimum 8 characters' })
        .max(16, 'password max 16 characters'),
    });

    return schema;
  }

  public static signUp() {
    const schema = z
      .object({
        name: z
          .string()
          .min(2, { error: 'name minimum 2 characters' })
          .max(64, { error: 'name max 64 characters' }),
        email: z.email(),
        password: z.string().min(8, { error: 'password minimum 8 characters' }),
        password_confirmation: z
          .string()
          .min(8, { error: 'password minimum 8 characters' }),
      })
      .superRefine((val, context) => {
        if (val.password !== val.password_confirmation) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password is not the same as confirm password',
            path: ['password_confirmation'],
          });
        }
      });

    return schema;
  }
}
