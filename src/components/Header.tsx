import { onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../store/userSlice';
import { useEffect, useState } from 'react';
import { LOGO_URL, USER_AVATAR } from '../utils/constant';

const Header = () => {

  const dispatch = useAppDispatch();
  const redirect = useNavigate();
  const selector = useAppSelector((store) => store.user)
  const { user } = selector;
  const [userDropDownHide, setUserDropDownHide ]  = useState(true);

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
    <div className='flex justify-between bg-black bg-opacity-40 bg-gradient-to-t py-4 from-black text-white'>
      <img className="w-44" src={LOGO_URL}
        alt="logo" />
      <ul className='self-end flex'>
        <li className='px-2'><Link to="/"> Home </Link></li>
        <li className='px-2'><Link to="/"> Movies </Link></li>
        <li className='px-2'><Link to="/"> Shows </Link></li>
        <li className='px-2 relative'>
          <div className='drop-down' onClick={ () => setUserDropDownHide(!userDropDownHide)  }>
            <img src={USER_AVATAR} alt="" />
          </div>
          <ul className={`absolute bg-white text-black px-3 py-2 w-28 top-9 right-0 rounded-md ${userDropDownHide ? 'hidden' : ''}`}>
            <li className='py-2'> 
              Hi, {user?.userName}
            </li>
            <li className='py-2'><button>SignOut</button></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Header