import React from 'react';

const Location = () => {
    return (
        <div className='px-5'>
            <form action="">
                <div>
                    <label htmlFor="location" className='font-medium'>Location for breakfast</label>
                    <input type="text" />
                    <label htmlFor="dates" className='font-medium'>Delivery Dates</label>
                    <ul className='mt-5'>
                        <div className='grid grid-cols-4 my-5'>
                        <li><input type="radio" className='h-5 w-5' />Mon</li>
                        <li><input type="radio" className='h-5 w-5' />Tue</li>
                        <li><input type="radio"  className='h-5 w-5' />Wed</li>
                        <li><input type="radio"  className='h-5 w-5' />Thur</li>
                        </div>
                       <div className='grid grid-cols-4 my-5'>
                       <li><input type="radio" className='h-5 w-5' />Fri</li>
                        <li><input type="radio" className='h-5 w-5' />Sat</li>
                        <li><input type="radio"  className='h-5 w-5' />Sun</li>
                       </div>
                    </ul>
                    <div className='grid grid-cols-2'>
                    <label htmlFor="time"  className='font-medium'>Select Delivery time:</label>
                    <select name="" id="" className='text-center'>
                        <option value="">7-8 Am</option>
                        <option value="">8-9 Am</option>
                        <option value="">9-10 Am</option>
                    </select>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Location;
