import React, { useState } from 'react';
import { FaMinus } from "react-icons/fa";

// Görev listesini görüntüleyen ve görevleri silen bileşen
export default function List({ tasks, removeTask, addSuccess }) {
    let isChecked = new Array(tasks.length).fill(false);

    // Checkbox durumunu değiştirme fonksiyonu
    const handleCheckboxChange = (index) => {
        isChecked[index] = true;

        if (isChecked[index]) {
            addSuccess(tasks[index]);
            removeTask(index);
            isChecked[index] = false;
        }
    };

    return (
        <div className='listGroup'>
            <ul className='listGroup__list'>
                {tasks.map((task, index) => (
                    <li className='listGroup__list-item' key={index}>
                        <input className='listGroup__checkbox' type='checkbox'
                            checked={isChecked[index]}
                            onChange={() => handleCheckboxChange(index)}></input>
                        {task}
                        <button className='listGroup__removeButton' onClick={() => removeTask(index)}>
                            <FaMinus />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
