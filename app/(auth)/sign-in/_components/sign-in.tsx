'use client';

import { appConfig } from '@/app.config';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { fetchClient } from '@/utils/axios/fetch-client';
import AuthSchema from '@/utils/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const signInSchema = AuthSchema.signIn();

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const r = useRouter();
  const q = useSearchParams();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: q.get('email') || '',
      password: '',
    },
  });

  async function onSubmit(formData: z.infer<typeof signInSchema>) {
    setIsLoading(true);
    const url = `${appConfig.nextApiURL}/auth/sign-in`;
    const res = await fetchClient({
      method: 'post',
      url: url,
      body: formData,
    });

    console.log(res);
    setIsLoading(false);
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email and password below to sign-in to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign In</Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="opacity-60">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="opacity-60">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading} className="w-full">
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <div className="w-full flex items-center justify-center space-x-2">
          <p>Don&apos;t have an account?</p>
          <Link href="/sign-up">sign up</Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SignIn;
