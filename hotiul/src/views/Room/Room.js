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
  const [listRoomFiltered, setListRoomFiltered] = useState([]);
  const [listRoomType, setListRoomType] = useState([]);
  // load list room with true status
  // Confirm Checkin 
  //    find booking where roomId = currentRoomId
  //    where currentDate = CheckIn
  //          status != need clean && != fixing
  // Confirm Checkout
  //    find booking where roomId = currentRoomId
  //    where currentDate = CheckOut
  //          
  // Need Clean
  //    find booking where roomId = currentRoomId
  //    is need clean
  // In Use
  //    confirmCheckin < currentDate < confirmCheckout
  // Fixing
  //    is fixing
  // Available
  //    is available

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
        setListRoomFiltered(data.map(item => {
          return {
            roomId: item.ID,
            roomType: item.TypeName,
            roomStatus: item.Status
          }
        }));
      })
    ])
    await Promise.all(([
      getData('ROOM_TYPE').then(data => {
        setListRoomType(data.map(item => {
          return {
            label: item.TypeName,
            value: item.TypeName
          }
        }))
      })
    ]))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => { }, [listRoomFiltered])
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const handleTypeChange = (value) => {
    setTypeFilter(value);
    console.log("Type", value);
    if (value != '') {
      if (statusFilter != '') {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword) && item.roomStatus === statusFilter && item.roomType === value))
      }
      else {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword) && item.roomType === value))
      }
    }
    else {
      if (statusFilter != '') {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword) && item.roomStatus === statusFilter))
      }
      else {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword)))
      }
    }
  }
  const handleStatusChange = (value) => {
    setStatusFilter(value);
    if (value != '') {
      if (typeFilter != '') {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword) && item.roomStatus === value && item.roomType === typeFilter))
      }
      else {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword) && item.roomStatus === value))
      }
    }
    else {
      if (typeFilter != '') {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword) && item.roomType === typeFilter))
      }
      else {
        setListRoomFiltered(listRoom.filter(item => item.roomId.includes(searchKeyword)))
      }
    }
  };
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
    if (typeFilter == '' && statusFilter == '') {
      setListRoomFiltered(listRoom.filter(item => item.roomId.includes(event.target.value)));
    }
    else if (statusFilter == '') {
      setListRoomFiltered(listRoom.filter(item => item.roomId.includes(event.target.value) && item.roomType === typeFilter));
    }
    else if (typeFilter == '') {
      setListRoomFiltered(listRoom.filter(item => item.roomId.includes(event.target.value) && item.roomStatus === statusFilter))
    }
    else {
      setListRoomFiltered(listRoom.filter(item => item.roomId.includes(event.target.value) && item.roomStatus === statusFilter && item.roomType === typeFilter))
    }
  }
  const handleRoomClick = (room) => {
    // Handle the room click event here
    console.log('Room clicked:', room);
  };
  const [rerenderFlag, setRerenderFlag] = useState(false);
  return (
    <div className="flex justify-center label-input-field">
      <div className="w-max mx-8">
        <div className="flex flex-row">
          <div className="search flex-1">
            <div className="label-input-field font-medium">Search</div>
            <Input
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
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
                onChange={handleStatusChange}
                options={[
                  { value: '', label: '- Select Status -' },
                  { value: 'Available', label: 'Available' },
                  { value: 'Confirm Checkin', label: 'Checkin' },
                  { value: 'Confirm Checkout', label: 'Checkout' },
                  { value: 'In Use', label: 'In Use' },
                  { value: 'Fixing', label: 'Fixing' },
                  { value: 'Cleaning', label: 'Need Clean' },
                ]}
              />
            </div>
            <div className="flex flex-col ml-4">
              <div className="label-input-field font-medium">Room Type</div>
              <Select
                className="!rounded-2xl border-gray-50 drop-shadow-xl"
                defaultValue=""
                style={{ width: 150, height: 40 }}
                onChange={handleTypeChange}
                options={[{ label: '- Select Type -', value: '' }, ...listRoomType]}
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-4 lg:gap-8 xl:gap-12 mt-8">
          {listRoomFiltered.map((item, index) => (
            <RoomItem
              key={item.roomId}
              listRoomFiltered={listRoomFiltered}
              onClick={() => handleRoomClick(item)}
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