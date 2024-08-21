import Row from "./Row"
import { useState } from "react"

export default function DashBoard() {

    const priceTest = 29.99
    const [isModalOpen, setIsModalOpen] = useState(false)


    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="navbar bg-base-100 p-3">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Pantry-Tracker</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<div className="flex flex-col items-center">
  <span className="text-xl">What's in your pantry?</span>
  <button className="btn mb-10" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</div>
<div className="overflow-x-auto flex align-items">
  <table className="table w-500">
    {/* head */}
    <thead>
      <tr>
        <th>Label</th>
        <th>Quantity</th>
        <th>Expiration Data</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <Row label="Bread" quantity="2 bags" expirationDate="02/15/2025" price={priceTest}/>
      {/* row 2 */}
      
    </tbody>
    {/* foot */}
 
  </table>
</div>
        </>
    )
}