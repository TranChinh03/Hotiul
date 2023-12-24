import React from 'react';
import { FaTools } from "react-icons/fa";

import './Room.scss';
function FixingRoom(props) {
    return (
        <div className='rounded-xl w-60 h-36 fixing-room p-4 shadow-xl hover-shadow-lg'>
            <div className='flex flex-row justify-between'>
                <div className='text-xl font-bold'>R.{props.roomId}</div>
                <div className='text-md font-normal mt-1'>{props.roomType}</div>
            </div>
            <div className='text-2xl font-semibold text-center pt-2'>Fixing</div>
            <div className='flex justify-center mt-2'>
                <FaTools size={30} className='!text-center' />
            </div>
        </div>
    );
}

export default FixingRoom;