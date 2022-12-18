import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex-row">
      <div className="bg-[#273443]">
        <div className="flex justify-between p-2 pt-4 pb-4 md:ml-5 md:mr-5 relative ">
          <div className="justify-start">
            <p className="text-white font-bold ml-1 text-14 mt-1">
              Energetika Slovenija
            </p>
          </div>
          <div className="flex">
            <TooltipComponent content="Vsebina" position="BottomCenter">
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              >
                <p>
                  <span className="text-white text-14">Tomi Šeregi,</span>{' '}
                  <span className="text-white font-bold ml-1 text-14">
                    Multimedijske Tehnologije
                  </span>
                </p>
              </div>
            </TooltipComponent>

            {isClicked.notification && (<Notification />)}
            {isClicked.userProfile && (<UserProfile />)}
          </div>
        </div>
      </div>
      <div className="w-full h-20 flex gap-3 justify-center justify-items-center content-center items-center hidden">
        <div className="">
          lol
        </div>
        <div>
          lol
        </div>
      </div>
    </div>
  );
};

export default Navbar;