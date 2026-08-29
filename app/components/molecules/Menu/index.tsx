import Navtitle from '@/app/components/atoms/Navtitle';
const Index = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-around'>
      <Navtitle text='Taller' />
      <Navtitle text='Practico' />
      <Navtitle text='Cloud' />
      <Navtitle text='Computing' />
    </div>
  );
};

export default Index;
