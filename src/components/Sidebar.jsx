import React from 'react';

const options = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'Melhores Músicas',
  },
  {
    href: '#',
    label: 'Notificações',
  },
  {
    href: '#',
    label: 'Explorar',
  },
];

const Sidebar = () => {
  return (
    <div className='w-52 bg-gray-800 text-white p-4'>
      <ul>
        {options.map((opt) => {
          return (
            <li className='hover:bg-slate-700 p-2 rounded-md'>
              <a href={opt.href}>{opt.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
