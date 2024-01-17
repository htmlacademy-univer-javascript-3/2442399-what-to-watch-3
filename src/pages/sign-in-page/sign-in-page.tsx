import Footer from '../../components/footer/footer';
import { useAppDispatch } from '../../hooks';
import { useRef, useState } from 'react';
import { loginAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';

export function SignInPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const containsAnyLetters = (password: string) => /[a-zA-Z]/.test(password);

  const containsAnyNumbers = (password: string) => /[0-9]/.test(password);

  const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      if (!isValidEmail(emailRef.current.value)) {
        setErrorMessage('Please enter a valid email address');
      } else if (
        !containsAnyLetters(passwordRef.current.value) ||
        !containsAnyNumbers(passwordRef.current.value)
      ) {
        setErrorMessage('Password should contain at least one letter and one number');
      } else {
        dispatch(loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }));
        navigate('/');
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={submitHandler}>
          {errorMessage && (
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={emailRef}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

