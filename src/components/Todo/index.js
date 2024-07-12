'use client';

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

// Kullanıcıdan görev alıp ekleyen bileşen
export default function Index({ addTask }) {
    const [task, setTask] = useState('');

    // Görev ekleme butonuna tıklanma işlemi
    const handleAddTask = () => {
        if (task.trim() !== '') {
            addTask(task);
            setTask(''); // Giriş alanını temizle
        }
    };

    return (
        <div className='inputGroup'>
            <input className='inputGroup__input' type='text' value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Please enter a new task'>
            </input>
            <button className='inputGroup__addButton' onClick={handleAddTask}>
                <FaPlus />
            </button>
        </div>
    );
}
