import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

import './Room.scss';
import { LuLogOut } from "react-icons/lu";

function ConfirmcheckoutRoom(props) {
    return (
        <div className='rounded-xl w-60 h-36 confirmcheckout-room p-4 shadow-xl hover-shadow-lg'>
            <div className='flex flex-row justify-between'>
                <div className='text-xl font-bold'>R.{props.roomId}</div>
                <div className='text-md font-normal mt-1'>{props.roomType}</div>
            </div>
            <div className='text-2xl font-semibold text-center pt-2'>Checkout</div>
            <div className='flex justify-center mt-2'>
                <LuLogOut size={30} className='!text-center' />
            </div>
        </div>
    );
}

export default ConfirmcheckoutRoom;