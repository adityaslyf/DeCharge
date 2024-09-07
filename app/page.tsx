import Navbar from './Navbar/page';
import Hero from './Hero/page';
import Management from './Management/page';
export default function Home() {
  return (
    <div className=' bg-black h-screen p-10 space-y-8'>
      <div><Navbar /></div>
      <div><Hero /></div>
      <div><Management /></div>
    </div>
  );
}
