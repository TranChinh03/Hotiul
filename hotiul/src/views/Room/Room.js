import React, { useState, useEffect } from "react";
import RoomItem from "../../components/room/RoomItem";
import { Input, Select } from 'antd';
import { FaSearch } from "react-icons/fa";
import '../../../src/components/room/Room.scss';
import { getData } from "../../controller/getData.ts";

// const listRoom = [
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'available',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'inUse',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'available',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'confirmCheckout',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'fixing',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'needClean',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'confirmCheckin',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'available',
//   },
//   {
//     roomId: '101',
//     roomType: 'Single',
//     roomStatus: 'available',
//   },

// ]
export const Room = () => {


  const [isLoading, setIsLoading] = useState(true)
  const [listRoom, setListRoom] = useState([])

  const fetchData = async () => {
    await Promise.all([
      getData('/ROOM').then(data => {
        console.log(data)
        setListRoom(data.map(item => {
          return {
            roomId: item.ID,
            roomType: item.TypeName,
            roomStatus: item.Status
          }
        }))
      })
    ])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleRoomClick = (room) => {
    // Handle the room click event here
    console.log('Room clicked:', room);
  };

  return (
    <div className="flex justify-center label-input-field">
      <div className="w-max mx-8">
        <div className="flex flex-row">
          <div className="search flex-1">
            <div className="label-input-field font-medium">Search</div>
            <Input
              className="w-64 drop-shadow-xl rounded-2xl border-gray-100"
              size="large"
              placeholder="Search"
              prefix={<FaSearch className="mr-2" color="#BCBCBC" />} />
          </div>
          <div className="float-right flex flex-row">
            <div className="flex flex-col">
              <div className="label-input-field font-medium">Room Status</div>
              <Select
                className="!rounded-2xl border-gray-50 drop-shadow-xl"
                defaultValue=""
                style={{ width: 150, height: 40 }}
                onChange={handleChange}
                options={[
                  { value: '', label: '- Select Status -' },
                  { value: 'available', label: 'Available' },
                  { value: 'confirmCheckin', label: 'Checkin' },
                  { value: 'confirmCheckout', label: 'Checkout' },
                  { value: 'inUse', label: 'In Use' },
                  { value: 'fixing', label: 'Fixing' },
                  { value: 'needClean', label: 'Need Clean' },
                ]}
              />
            </div>
            <div className="flex flex-col ml-4">
              <div className="label-input-field font-medium">Room Type</div>
              <Select
                className="!rounded-2xl border-gray-50 drop-shadow-xl"
                defaultValue=""
                style={{ width: 150, height: 40 }}
                onChange={handleChange}
                options={[
                  { value: '', label: '- Select Type -' },
                  { value: 'single', label: 'Single' },
                  { value: 'double', label: 'Double' }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-4 lg:gap-8 xl:gap-12 mt-8">
          {listRoom.map((item, index) => (
            <RoomItem
              onClick={() => handleRoomClick(item)}
              key={index}
              roomId={item.roomId}
              roomType={item.roomType}
              roomStatus={item.roomStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};