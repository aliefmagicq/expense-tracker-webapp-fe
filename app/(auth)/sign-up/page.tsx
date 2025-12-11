import { Suspense } from 'react';
import SignUp from '../../../features/auth/sign-up/components/sign-up';

function SignUpPage() {
  return (
    <div className="min-h-screen grid grid-cols-2 place-items-center">
      <Suspense fallback={<p>Loading...</p>}>
        <SignUp />
      </Suspense>
    </div>
  );
}

export default SignUpPage;
