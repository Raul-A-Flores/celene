import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='body_main'>
    <div className='relative'>
      <Navbar />
      <Hero />
      <Footer />
    </div>


  </div>
);

export default Page;
