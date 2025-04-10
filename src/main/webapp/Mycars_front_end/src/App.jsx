import React, { useState } from 'react';
import './App.css'; // Custom CSS file for styling

const App = () => {
  const BASE_URL = 'http://localhost:8080/Mycars';
  const [cars, setCars] = useState([]);
  const [addForm, setAddForm] = useState({ name: '', model: '', hp: '' });
  const [updateForm, setUpdateForm] = useState({ id: '', name: '', model: '', power_in_hp: '' });
  const [deleteId, setDeleteId] = useState('');
  const [message, setMessage] = useState('');

  // const getCars = async () => {
  //   try {
  //     const res = await fetch(`${BASE_URL}/List`);
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }
  //     const data = await res.json();
  //     setCars(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const getCars = async () => {
    try {
      const res = await fetch(`${BASE_URL}/List`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCars(data); // The 'data' will include the 'id' as well
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
        {cars.length === 0 ? (
          <p>No cars to display</p>
        ) : (
          // <table>
          //   <thead>
          //     <tr>
          //       <th>Name</th>
          //       <th>Model</th>
          //       <th>Horsepower (HP)</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {cars.map((car, index) => (
          //       <tr key={index}>
          //         <td>{car.name}</td>
          //         <td>{car.model ?? 'N/A'}</td>
          //         <td>{car.power_in_hp}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
          <table>
  <thead>
    <tr>
      <th>ID</th> {/* Add this column for ID */}
      <th>Name</th>
      <th>Model</th>
      <th>Horsepower (HP)</th>
    </tr>
  </thead>
  <tbody>
    {cars.map((car) => (
      <tr key={car.id}> {/* Use car.id for a unique key */}
        <td>{car.id}</td> {/* Display ID */}
        <td>{car.name}</td>
        <td>{car.model ?? 'N/A'}</td>
        <td>{car.power_in_hp}</td>
      </tr>
    ))}
  </tbody>
</table>

        )}
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


