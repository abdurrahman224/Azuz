import { useState } from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import InputField from '../../components/ui/InputField';
import PrimaryButton from '../../components/ui/PrimaryButton';

const RegisterView = () => {
  // Separate state for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Optional: state for showing error messages
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    alert(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}`
    );

    // Reset all input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <Container className={''}>
      <SectionTitle>Create Account</SectionTitle>
      <div className="custom-padding px-7 sm:!mx-0 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-[320px] flex-col gap-7 text-base font-normal text-white uppercase md:w-[400px] lg:w-[370px]"
        >
          {error && (
            <div className="border border-[#D02E2E] px-4 py-2 font-normal text-[#D02E2E] normal-case">
              <div className="flex items-center gap-2">
                <span className="text-lg">•</span>
                <p className="text-lg">{error}</p>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="first_name">First Name</label>
            <InputField
              id="first_name"
              className="mt-[10px]"
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="last_name">Last Name</label>
            <InputField
              id="last_name"
              className="mt-[10px]"
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div>
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

          <div>
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
        </form>
      </div>
    </Container>
  );
};

export default RegisterView;
