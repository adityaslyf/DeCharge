import Navbar from './Navbar/page';
import Hero from './Hero/page';
import Management from './Management/page';

export default function Home() {
  return (
    <div className='bg-black  flex flex-col container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-6'>
      <div className="sticky top-0 z-50 bg-black">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Hero />
      </div>
      <div className="flex-grow">
        <Management />
      </div>
    </div>
  );
}
  