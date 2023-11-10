import { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex items-center gap-2">
      <img src="/Flag.png" alt="Flag" className="w-8 h-6" />
      <h1 className="text-2xl text-jassspro-pink font-normal lett-spacing">
        COSPLAYER
      </h1>
    </div>
  );
};

export default Header;
