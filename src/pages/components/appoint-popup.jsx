import React , { useState } from 'react';
import { ImCross } from "react-icons/im";


const AppointPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <button className="btn text-primary-main font-medium md:text-base sm:text-sm text-xs border border-primary-main p-2 px-4 rounded" onClick={()=>document.getElementById('my_modal_2').showModal()}> Make an Appointment</button>
        <dialog id="my_modal_2" className="modal w-[80%] bg-[#858587] p-16 mt-[18vh] rounded-2xl">
            <form method="dialog" className="modal-backdrop absolute top-0 right-0 p-10">
                <button className="text-primary-main"><ImCross /></button>
            </form>
        <div className="modal-box">
        <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-2">Ready to schedule an</h1>
        <h1 className="text-5xl font-bold text-primary-main mb-10">appointment?</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
            <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md border border-gray-300"
            />
            <input
            type="text"
            placeholder="Phone Number"
            className="p-3 rounded-md border border-gray-300"
            />
            <input
            type="text"
            placeholder="Date"
            className="p-3 rounded-md border border-gray-300"
            />
            <input
            type="text"
            placeholder="Time"
            className="p-3 rounded-md border border-gray-300"
            />
        </div>
        <input
            type="text"
            placeholder="Select Service"
            className="p-3 w-full rounded-md border border-gray-300 mb-4"
        />
        <div className="flex justify-start">
            <button className="bg-red-500 text-white py-3 px-6 rounded-md">
                Submit
            </button>

        </div>
        </div>
    </div>
    </dialog>

    </div>
  );
};

export default AppointPopup;