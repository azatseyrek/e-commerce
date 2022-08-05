import SignInForm from '../../components/sign-in-form/sign-in-form.components';
import SignUpForm from '../../components/sign-up-form/signu-up-form.components';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
