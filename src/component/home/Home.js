//component
import { Herosection } from './Herosection';
import { Prevent } from './Prevent';
import { Symtom } from './Symtom';
import { Precaution } from './Precaution';

export const Home = () => {
  return (
    <>
      <Herosection />
      <Prevent />
      <Symtom />
      <Precaution />
    </>
  );
};
