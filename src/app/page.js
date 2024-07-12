'use client';

import React, { useState } from 'react';
import Navbar from '../components/Todo/navbar';
import Index from '../components/Todo/index';
import List from '../components/Todo/list';
import Success from '../components/Todo/success';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [successes, setSuccesses] = useState([]);

  // Görev ekleme fonksiyonu
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Görev silme fonksiyonu (list kısmı için)
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Başarı ekleme fonksiyonu (list kısmı için)
  const addSuccess = (task) => {
    setSuccesses([...successes, task]);
  };

  // Başarı silme fonksiyonu (success kısmı için)
  const removeSuccess = (index) => {
    const newSuccesses = successes.filter((_, i) => i !== index);
    setSuccesses(newSuccesses);
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <section>
          <Index addTask={addTask} />
        </section>
        <section>
          <List tasks={tasks} removeTask={removeTask} addSuccess={addSuccess} />
        </section>
        <section>
          <Success successes={successes} removeSuccess={removeSuccess} />
        </section>
      </main>
    </div>
  );
}
