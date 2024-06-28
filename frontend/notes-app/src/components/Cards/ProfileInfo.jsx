import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
      {getInitials("Udith Jeewapadma")}
      </div>
      <div>
        <p className='text-sm font-medium'>Udith Jeewapadma</p>
        <button className='text-blue-500 hover:underline' onClick={onLogout}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
