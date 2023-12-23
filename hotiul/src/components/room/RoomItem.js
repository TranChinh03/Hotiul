import React from 'react';
import AvailableRoom from './AvailableRoom';
import InUseRoom from "./InUseRoom";
import ConfirmCheckinRoom from "./ConfirmCheckinRoom";
import ConfirmcheckoutRoom from "./ConfirmCheckoutRoom";
import FixingRoom from "./FixingRoom";
import NeedCleanRoom from "./NeedCleanRoom";
function RoomItem(props) {
    const roomStatus = props.roomStatus;
    const roomId = props.roomId;
    const roomType = props.roomType;
    // Render the appropriate component based on roomStatus
    const renderRoomComponent = () => {
        switch (roomStatus) {
            case 'available':
                return <AvailableRoom roomId={roomId} roomType={roomType} />;
            case 'inUse':
                return <InUseRoom roomId={roomId} roomType={roomType} />;
            case 'confirmCheckin':
                return <ConfirmCheckinRoom roomId={roomId} roomType={roomType} />;
            case 'confirmCheckout':
                return <ConfirmcheckoutRoom roomId={roomId} roomType={roomType} />;
            case 'fixing':
                return <FixingRoom roomId={roomId} roomType={roomType} />;
            case 'needClean':
                return <NeedCleanRoom roomId={roomId} roomType={roomType} />;
            default:
                // Handle the case where roomStatus is not recognized
                return null;
        }
    };
    return (
        <div>
            {renderRoomComponent()}
        </div>
    );
}

export default RoomItem;