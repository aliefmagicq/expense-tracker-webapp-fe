import { Suspense } from 'react';
import SignIn from '../../../features/auth/sign-in/components/sign-in';

function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-2 place-items-center">
      <Suspense fallback={<p>Loading...</p>}>
        <SignIn />
      </Suspense>
    </div>
  );
}

export default SignInPage;
