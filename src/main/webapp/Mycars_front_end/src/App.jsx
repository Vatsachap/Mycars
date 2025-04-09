// import React, { useState } from 'react';

// const App = () => {
//   const BASE_URL = 'http://localhost:8080/Mycars';
//   const [cars, setCars] = useState([]);
//   const [addForm, setAddForm] = useState({ name: '', model: '', hp: '' });
//   const [updateForm, setUpdateForm] = useState({ id: '', name: '', model: '', power_in_hp: '' });
//   const [deleteId, setDeleteId] = useState('');
//   const [message, setMessage] = useState('');

  
//   const getCars = async () => {
//     try {
//       const res = await fetch(`${BASE_URL}/List`);
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       const data = await res.json();
//       console.log(data); // Check if the data is being returned correctly
//       setCars(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
  

//   const addCar = async () => {
//     const params = new URLSearchParams(addForm).toString();
//     const res = await fetch(`${BASE_URL}/add?${params}`, { method: 'POST' });
//     const text = await res.text();
//     setMessage(text);
//     getCars();
//   };

//   const updateCar = async () => {
//     const params = new URLSearchParams();
//     params.append('id', updateForm.id);
//     if (updateForm.name) params.append('name', updateForm.name);
//     if (updateForm.model) params.append('model', updateForm.model);
//     if (updateForm.power_in_hp) params.append('power_in_hp', updateForm.power_in_hp);

//     const res = await fetch(`${BASE_URL}/updateCar?${params.toString()}`, { method: 'PUT' });
//     const text = await res.text();
//     setMessage(text);
//     getCars();
//   };

//   const deleteCar = async () => {
//     const res = await fetch(`${BASE_URL}/delete?id=${deleteId}`, { method: 'DELETE' });
//     const text = await res.text();
//     setMessage(text);
//     getCars();
//   };

//   return (
//     <div style={{ padding: '1rem' }}>
//       <h2>🚗 Mycars</h2>
//       <button onClick={getCars}>Get Cars</button>
//       <pre>{JSON.stringify(cars, null, 2)}</pre>

//       <h3>Add a Car</h3>
//       <input placeholder="Name" value={addForm.name} onChange={(e) => setAddForm({ ...addForm, name: e.target.value })} />
//       <input placeholder="Model" value={addForm.model} onChange={(e) => setAddForm({ ...addForm, model: e.target.value })} />
//       <input placeholder="HP" type="number" value={addForm.hp} onChange={(e) => setAddForm({ ...addForm, hp: e.target.value })} />
//       <button onClick={addCar}>Add</button>

//       <h3>Update a Car</h3>
//       <input placeholder="Car ID" type="number" value={updateForm.id} onChange={(e) => setUpdateForm({ ...updateForm, id: e.target.value })} />
//       <input placeholder="New Name" value={updateForm.name} onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })} />
//       <input placeholder="New Model" value={updateForm.model} onChange={(e) => setUpdateForm({ ...updateForm, model: e.target.value })} />
//       <input placeholder="New HP" type="number" value={updateForm.power_in_hp} onChange={(e) => setUpdateForm({ ...updateForm, power_in_hp: e.target.value })} />
//       <button onClick={updateCar}>Update</button>

//       <h3>Delete a Car</h3>
//       <input placeholder="Car ID" type="number" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
//       <button onClick={deleteCar}>Delete</button>

//       <p>{message}</p>
//     </div>
//   );
// };

// export default App;





import React, { useState } from 'react';
import './App.css'; // Custom CSS file for styling

const App = () => {
  const BASE_URL = 'http://localhost:8080/Mycars';
  const [cars, setCars] = useState([]);
  const [addForm, setAddForm] = useState({ name: '', model: '', hp: '' });
  const [updateForm, setUpdateForm] = useState({ id: '', name: '', model: '', power_in_hp: '' });
  const [deleteId, setDeleteId] = useState('');
  const [message, setMessage] = useState('');

  const getCars = async () => {
    try {
      const res = await fetch(`${BASE_URL}/List`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addCar = async () => {
    const params = new URLSearchParams(addForm).toString();
    const res = await fetch(`${BASE_URL}/add?${params}`, { method: 'POST' });
    const text = await res.text();
    setMessage(text);
    getCars();
  };

  const updateCar = async () => {
    const params = new URLSearchParams();
    params.append('id', updateForm.id);
    if (updateForm.name) params.append('name', updateForm.name);
    if (updateForm.model) params.append('model', updateForm.model);
    if (updateForm.power_in_hp) params.append('power_in_hp', updateForm.power_in_hp);

    const res = await fetch(`${BASE_URL}/updateCar?${params.toString()}`, { method: 'PUT' });
    const text = await res.text();
    setMessage(text);
    getCars();
  };

  const deleteCar = async () => {
    const res = await fetch(`${BASE_URL}/delete?id=${deleteId}`, { method: 'DELETE' });
    const text = await res.text();
    setMessage(text);
    getCars();
  };

  return (
    <div className="app-container">
      <h2 className="header">🚗 MyCars</h2>
      <div className="button-container">
        <button className="btn" onClick={getCars}>Get Cars</button>
      </div>
      <div className="car-list">
        <pre>{JSON.stringify(cars, null, 2)}</pre>
      </div>

      <div className="form-container">
        <h3>Add a Car</h3>
        <div className="input-group">
          <input placeholder="Name" value={addForm.name} onChange={(e) => setAddForm({ ...addForm, name: e.target.value })} />
          <input placeholder="Model" value={addForm.model} onChange={(e) => setAddForm({ ...addForm, model: e.target.value })} />
          <input placeholder="HP" type="number" value={addForm.hp} onChange={(e) => setAddForm({ ...addForm, hp: e.target.value })} />
        </div>
        <button className="btn" onClick={addCar}>Add</button>
      </div>

      <div className="form-container">
        <h3>Update a Car</h3>
        <div className="input-group">
          <input placeholder="Car ID" type="number" value={updateForm.id} onChange={(e) => setUpdateForm({ ...updateForm, id: e.target.value })} />
          <input placeholder="New Name" value={updateForm.name} onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })} />
          <input placeholder="New Model" value={updateForm.model} onChange={(e) => setUpdateForm({ ...updateForm, model: e.target.value })} />
          <input placeholder="New HP" type="number" value={updateForm.power_in_hp} onChange={(e) => setUpdateForm({ ...updateForm, power_in_hp: e.target.value })} />
        </div>
        <button className="btn" onClick={updateCar}>Update</button>
      </div>

      <div className="form-container">
        <h3>Delete a Car</h3>
        <div className="input-group">
          <input placeholder="Car ID" type="number" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
        </div>
        <button className="btn" onClick={deleteCar}>Delete</button>
      </div>

      <p className="message">{message}</p>
    </div>
  );
};

export default App;

