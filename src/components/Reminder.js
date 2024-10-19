import React from 'react'

function Reminder({reminder, index, onDelete}) {
    
    console.log("index");
  return (
    <div className='h-[120px] w-full rounded-xl p-2 bg-[#151d23] mt-3 mb-3'>
        <div className='w-full h-full flex'>
            {/* left */}
            <div className='w-[80%] h-full p-2 flex flex-col gap-1 text-[#8d8c8f]'>
                <div className='text-3xl'>{reminder.timePart}</div>
                <div>{reminder.trimmedResponse}</div>
            </div>

            {/* right */}
            <div className="flex flex-col justify-center h-full item-center w-[15%]">
                <button onClick={() => onDelete(index)} class className="h-fit p-2 rounded-3xl bg-[#41474c] hover:bg-[#2e3236] text-md text-[#c0bec3]">Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Reminder