import Elephant from '../assets/images/elephant.svg';
import WaterBuffalo from '../assets/images/water-buffalo.svg';
import Giraffe from '../assets/images/giraffe.svg';
import Hippopotamus from '../assets/images/hippopotamus.svg';
import Monkey from '../assets/images/monkey.svg';
import Zebra from '../assets/images/zebra.svg';
import Animal from '../assets/images/animal.svg';
import Bear from '../assets/images/bear.svg';
import Deer from '../assets/images/deer.svg';
import Fox from '../assets/images/fox.svg';
import Racoon from '../assets/images/racoon.svg';
import Sheep from '../assets/images/sheep.svg';

export const CONTAINER_SIDEBAR_STYLE = { height: 'calc(100vh - 302px)', overflow: 'auto', textAlign: 'center' };

export const UL_SIDEBAR_STYLE = {
  margin: 0,
  width: '100%',
  listStyle: 'none',
  padding: '30px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 150px))',
  gap: '30px',
  overflow: 'hidden auto',
  height: 'calc(100vh - 308px)',
  justifyContent: 'center',
};

export const LI_SIDEBAR_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
};

export const CONTAINER_BOARD_STYLE = {
  width: '100%', position: 'relative', backgroundColor: '#98FB98', border: '5px solid gray', height: 'calc(100vh - 250px)',
};

export default [
  {
    id: 1,
    name: 'Слон',
    img: Elephant,
  },
  {
    id: 2,
    name: 'Жираф',
    img: Giraffe,
  },
  {
    id: 3,
    name: 'Бык',
    img: WaterBuffalo,
  },
  {
    id: 4,
    name: 'Гиппопотам',
    img: Hippopotamus,
  },
  {
    id: 5,
    name: 'Обезьяна',
    img: Monkey,
  },

  {
    id: 6,
    name: 'Зебра',
    img: Zebra,
  },
  {
    id: 7,
    name: 'Животное',
    img: Animal,
  },
  {
    id: 8,
    name: 'Медведь',
    img: Bear,
  },
  {
    id: 9,
    name: 'Олень',
    img: Deer,
  },
  {
    id: 10,
    name: 'Лиса',
    img: Fox,
  },
  {
    id: 11,
    name: 'Енот',
    img: Racoon,
  },

  {
    id: 12,
    name: 'Овца',
    img: Sheep,
  },
];
