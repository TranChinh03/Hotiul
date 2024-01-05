import React from 'react';
import { MdCleaningServices } from "react-icons/md";

import './Room.scss';
function NeedCleanRoom(props) {
    return (
        <div className='rounded-2xl w-60 h-36 needclean-room p-4 shadow-xl hover-shadow-lg'>
            <div className='flex flex-row justify-between'>
                <div className='text-xl font-bold'>{props.roomId}</div>
                <div className='text-md font-normal mt-1'>{props.roomType}</div>
            </div>
            <div className='text-2xl font-semibold text-center pt-2'>Need Clean</div>
            <div className='flex justify-center mt-2'>
                <MdCleaningServices size={30} className='!text-center' />
            </div>
        </div>
    );
}

export default NeedCleanRoom;