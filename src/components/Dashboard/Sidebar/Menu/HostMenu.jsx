import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Add class' address='add-class' />
      <MenuItem icon={MdHomeWork} label='My Listings' address='my-listings' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />
    </>
  )
}

export default HostMenu
