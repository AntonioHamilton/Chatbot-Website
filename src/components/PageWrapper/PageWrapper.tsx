import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import { Header } from '../Header/Header';
import { FloatingMenu } from '../FloatingMenu/FloatingMenu';
import { CommonProps } from '../CommonProps';

export const PageWrapper = ({ children }: CommonProps) => (
  <>
    <BackgroundAnimation />
    <Header />
    {children}
    <FloatingMenu />
  </>
);
