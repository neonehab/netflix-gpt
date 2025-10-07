import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAppDispatch } from "../store/hooks";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };


  const handleSubmitClick = () => {

    const msg: string | null = isSignInForm ? validateLoginData(null, email.current?.value, password.current?.value) :
      validateLoginData(name.current?.value, email.current?.value, password.current?.value);
    setErrorMessage(msg);

    if (msg) return;

    // SignIn and SIgnup logic

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value || '',
        password.current?.value || ''
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value
          }).then(() => {
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, userName: displayName}))
            console.log("Profile updated")
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current?.value || '', password.current?.value || '')
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="flex items-center min-h-screen">
        <img
          className="absolute top-0 -z-10"
          src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg"
          alt=""
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black m-auto p-12 w-3/12 text-white rounded-lg bg-opacity-70 "
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              id="name"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-600"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-600"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-600"
          />

          <p className="text-red-700 font-semibold">{errorMessage}</p>

          <button className="p-4 my-4 bg-red-700 w-full" type="submit" onClick={handleSubmitClick}>
            {" "}
            Submit
          </button>
          {
            <p onClick={toggleSignInForm} className="cursor-pointer">
              {isSignInForm
                ? "New to Netflix? Signup Now"
                : "Already a user? Sign In"}
            </p>
          }
        </form>
      </div>
    </div>
  );
};

export default Login;
