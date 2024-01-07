import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

import './Room.scss';
function AvailableRoom(props) {
    return (
        <div className='rounded-2xl w-60 h-36 available-room p-4'>
            <div className='flex flex-row justify-between'>
                <div className='text-lg font-bold'>{props.roomId}</div>
                <div className='text-sm font-normal mt-1'>{props.roomType}</div>
            </div>
            <div className='text-2xl font-semibold text-center pt-2'>Available</div>
            <div className='flex justify-center mt-2'>
                <FaCheckCircle size={30} className='!text-center' />
            </div>
        </div>
    );
}

export default AvailableRoom;