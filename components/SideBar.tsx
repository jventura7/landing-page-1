import MobileNavBar from '@/components/MobileNavBar';
import { Dispatch, SetStateAction } from 'react';

interface SideBarProps {
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export default function SideBar({ setOpenMobileMenu }: SideBarProps) {
  return (
    <div className="absolute top-0 left-0 bg-opacity-30 bg-gray-900 w-full h-full z-[1]">
      <div className="absolute top-0 bottom-0 right-0 bg-white bg-opacity-100 w-3/5 p-5">
        <div
          onClick={() => setOpenMobileMenu(false)}
          className="flex justify-end"
        >
          <svg
            className="mb-10"
            width="26"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#151515" fill-rule="evenodd">
              <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
              <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
            </g>
          </svg>
        </div>
        <MobileNavBar />
      </div>
    </div>
  );
}
