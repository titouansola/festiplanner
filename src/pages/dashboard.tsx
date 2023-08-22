import { useAuthService, useMeQuery } from '@internal/client';

export default function Dashboard() {
  const { session, signOut } = useAuthService();
  const { user, isLoading } = useMeQuery();

  if (!session || !user) {
    return null;
  }

  if (isLoading) {
    // TODO loader
    return null;
  }

  return (
    <div>
      Dashboard
      <button className={'btn'} onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}
