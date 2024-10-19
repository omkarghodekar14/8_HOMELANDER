// import React, { useState, useEffect } from "react";

// export default function ReminderForm({ toggleListening }) {
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Time:", time);
//     console.log("Message:", message);
//   };

//   const handleXyzClick = () => {
//     if (isListening) {
//       stopListening();
//       console.log("Stopped Listening:", recognizedText);
//     } else {
//       startListening();
//       console.log("Started Listening...");
//     }
//   };

//   return (
//     <div className="h-[47%] rounded-2xlbg-[#151d23] text-white">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//         <div className="flex item-center w-full h-[40px]">
//           <h3 className="text-center flex justify-center items-center text-xl">Time</h3>
//           <input
//             type="time"
//             id="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="bg-[#252d32] rounded-md text-white px-10 ml-[68px]"
//             required
//           />
//         </div>

//         <div className="flex item-center w-full h-[40px] gap-8 ">
//           <h3 className="text-center flex justify-center items-center text-xl">Message</h3>
//           <input
//             type="text"
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="p-2 bg-[#252d32] px-3 rounded-md text-white w-full outline-none"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-700 hover:bg-blue-950 text-white p-2 rounded"
//         >
//           Submit
//         </button>

//         <button
//           type="button"
//           className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
//           onClick={toggleListening}
//         >
//           XYZ
//         </button>
//       </form>
//     </div>
//   );
// }
