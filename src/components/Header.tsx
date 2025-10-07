import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO_URL } from '../utils/constant';

const Header = () => {

  const dispatch = useAppDispatch();
  const redirect = useNavigate();

  useEffect(() => {
    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        redirect('/browse');
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, userName: displayName }))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        redirect('/');
      }
    });

    return () => {
      authUnsubscribe();
    }
  }, [])

  return (
    <div>
      <img className="w-44" src= { LOGO_URL}
        alt="logo" />
    </div>
  )
}

export default Header