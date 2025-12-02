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
import ZodSchema from '@/utils/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const signUpSchema = ZodSchema.signUp();

function SignUp() {
  const [sendVerify, setSendVerify] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: 'alief khairul fadzli',
      email: 'aliefkhairulfadzli24@gmail.com',
      password: 'password_009',
      password_confirmation: 'password_009',
    },
  });

  async function onSubmit(formData: z.infer<typeof signUpSchema>) {
    setIsLoading(true);
    const url = `${appConfig.nextApiURL}/auth/sign-up`;
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
        <CardTitle>Sign-Up to your account</CardTitle>
        <CardDescription>
          Enter your name, email and password below to sign-up to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="opacity-60">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="opacity-60">Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="confirm your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {sendVerify && (
              <div className="w-full flex items-center justify-center">
                <p className="text-sm">Verification has sent to {sendVerify}</p>
              </div>
            )}

            <Button disabled={isLoading} className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <div className="w-full flex items-center justify-center space-x-2">
          <p>Already have an account?</p>
          <Link href="/sign-in">sign in</Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SignUp;
