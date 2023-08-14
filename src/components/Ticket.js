// components/Ticket.js
import React from "react";
import "./Ticket.css";

const userLogos = {
  '1': './imgs/user_1_logo.png',
  '2': './imgs/user_2_logo.png',
  '3': './imgs/user_3_logo.png',
  '4': './imgs/user_4_logo.png',
  '5': './imgs/user_5_logo.png',
  // Add more entries for other user IDs
};
// let str = `./imgs/${userLogos[1]}`
const Ticket = ({ ticket }) => {
  // console.log(ticket)
  const userLogo = userLogos[ticket.userId] || 'default_logo.png';
  // console.log(str);
  return (
    <div className={`ticket `}>
      <div className=" m-2 py-2 px-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-100 " key={ticket.id}>
        <div className="mb-1 px-1 text-sm max-w-sm dark:text-gray-400 flex justify-between">
          <p>{ticket.id}</p>
          {/* <p><HiUserCircle className=" scale-125" /></p> */}
          {/* <img src={`./imgs/${userLogo}`} alt={`User ${ticket.userId} Logo`} /> */}
          {ticket.userId}
        </div>
        <>
          <input type="checkbox" className='checkbox' />
          <span className="mb-2 text-lg font-medium tracking-tight text-gray-900 text-left ">
            {ticket.title}
          </span>
        </>
        <br></br>
        <div className="p-1 h-6 w-24 border rounded-lg shadow-md text-[10px] flex items-center justify-center gap-1">
          <span>{ticket.tag}</span>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
