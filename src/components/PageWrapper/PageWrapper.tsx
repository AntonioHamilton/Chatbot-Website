import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { CommonProps } from '../CommonProps';

export const PageWrapper = ({ children }: CommonProps) => (
  <>
    <BackgroundAnimation />
    <Header />
    {children}
    <Footer />
  </>
);
