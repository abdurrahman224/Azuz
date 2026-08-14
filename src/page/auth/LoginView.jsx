import { useState } from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import InputField from '../../components/ui/InputField';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { Link } from 'react-router-dom';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert(`Email: ${email}\nPassword: ${password}`);

    // Reset input fields after submit
    setEmail('');
    setPassword('');
  };

  return (
    <Container className={''}>
      <SectionTitle>Login</SectionTitle>
      <div className="custom-padding px-7 sm:mx-0! sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-[320px] text-base font-normal text-white uppercase md:w-[400px] lg:w-[370px]"
        >
          <div className="mb-[18px] flex items-center gap-2 border border-[#D02E2E] px-4 py-2 text-[#D02E2E] normal-case">
            <span className="text-lg">•</span>
            <p className="text-sm">Incorrect email or password.</p>
          </div>

          <div className="">
            <label htmlFor="email">Email</label>
            <InputField
              id="email"
              className="mt-[10px]"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="my-[30px]">
            <label htmlFor="password" className="mb-[10px] flex items-center justify-between">
              Password{' '}
              <span className="text-base font-normal text-white lowercase">Forgot password?</span>
            </label>
            <InputField
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <PrimaryButton type="submit" className={'w-full !uppercase hover:!bg-black'}>
            Sign In
          </PrimaryButton>

          <Link to={'/registration'}>
            <h3 className="mt-4 text-center text-base font-normal normal-case">Create account</h3>
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default LoginView;
