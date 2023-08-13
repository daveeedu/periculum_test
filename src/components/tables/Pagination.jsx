import React from 'react';
import { IBack, IDoubleBack, IDoubleForward, IForward } from '../../utils/icons.utils';

export default function Pagination() {
  return (
    <nav className="flex  bg-white pt-3 pb-7 px-4 md:mr-10 mr-4 sm:px-0 md:ml-0 ml-4">
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <img src={IDoubleForward} alt='IDoubleForward' className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          <img src={IForward} alt='IForward' className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pageNumber) => (
          <a
            key={pageNumber}
            href="#"
            className={`inline-flex items-center  ${pageNumber === 2 ? ' text-indigo-600' : 'border-transparent'} px-4 pt-4 text-sm font-medium ${pageNumber === 2 ? 'text-[#407BFF]' : 'text-gray-500'} `}
            aria-current={pageNumber === 2 ? 'page' : undefined}
          >
            {pageNumber}
          </a>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-start">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <img src={IBack} alt="IBack" className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          <img src={IDoubleBack} alt='IDoubleBack' className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
