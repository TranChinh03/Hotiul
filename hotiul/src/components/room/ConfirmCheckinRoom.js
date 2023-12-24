import React from 'react';
import { LuLogIn } from "react-icons/lu";

import './Room.scss';
function ConfirmCheckinRoom(props) {
    return (
        <div className='rounded-xl w-60 h-36 confirmcheckin-room p-4 shadow-xl hover-shadow-lg'>
            <div className='flex flex-row justify-between'>
                <div className='text-xl font-bold'>R.{props.roomId}</div>
                <div className='text-md font-normal mt-1'>{props.roomType}</div>
            </div>
            <div className='text-2xl font-semibold text-center pt-2'>Checkin</div>
            <div className='flex justify-center mt-2'>
                <LuLogIn size={30} className='!text-center' />
            </div>
        </div>
    );
}

export default ConfirmCheckinRoom;