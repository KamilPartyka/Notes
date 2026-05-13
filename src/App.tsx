// import { useEffect } from 'react';
// import { account } from './appwrite';
import { Menu } from '@sidebar/components/Menu';
import { NotesPage } from '@/pages/NotesPage';

export default function App() {
  // useEffect(() => {
  //   // @ts-expect-error - This is just for testing purposes, not a production-ready login flow.
  //   async function login(email, password) {
  //     const loggedIn = await account.createEmailPasswordSession({
  //       email,
  //       password,
  //     });

  //     console.log(loggedIn);
  //   }

  //   login(
  //     import.meta.env.VITE_APPWRITE_LOGIN_EMAIL,
  //     import.meta.env.VITE_APPWRITE_LOGIN_PASSWORD
  //   );
  // }, []);
  // TODO

  return (
    <>
      <Menu />
      <NotesPage />
    </>
  );
}
