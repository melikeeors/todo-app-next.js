import React from 'react';
import { FaMinus } from "react-icons/fa";
import { MdDone } from "react-icons/md";

export default function Success({ successes, removeSuccess }) {
  return (
    <div className='successGroup'>
      <ul className='successGroup__list'>
        {successes.map((success, index) => (
          <li className='successGroup__list-item' key={index}>
            <MdDone className='successGroup__doneIcon' />{success}
            <button className='successGroup__removeButton' onClick={() => removeSuccess(index)}>
              <FaMinus />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
