import React, { useState, useEffect } from "react";
import FormularioRegistro from "./components/FormularioRegistro";
import TablaPersonajes from "./components/TablaPersonajes";

// Base de datos inicial
const initialDb = [
  {
    id: 1,
    name: "Homero",
    sex: "Masculino",
  },
  {
    id: 2,
    name: "Marge",
    sex: "Femenino",
  },
  {
    id: 3,
    name: "Bart",
    sex: "Masculino",
  },
  {
    id: 4,
    name: "Lisa",
    sex: "Femenino",
  },
  {
    id: 5,
    name: "Maggie",
    sex: "Femenino",
  },
];

function App() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm("¿Seguro de eliminar este personaje?");
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 min-h-screen text-white w-screen">
      <h1 className="text-2xl font-bold uppercase text-center my-5 text-sky-300">
        Los Simpsons
      </h1>
      <FormularioRegistro
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      ></FormularioRegistro>
      <TablaPersonajes
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      ></TablaPersonajes>
    </div>
  );
}

export default App;
