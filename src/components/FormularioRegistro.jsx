import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: "",
  sex: "",
};

export default function FormularioRegistro({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //Evita la recarga de la página
    if (!form.name || !form.sex) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm); //inicializa o deja vacío los inputs
    setDataToEdit(null);
  };

  return (
    <div className="w-11/12 md:w-1/2">
      <h2 className="font-bold text-center text-lg text-sky-300 py-2 px-5 border-b-2 my-3">
        {dataToEdit?"Editar Personaje":"Agregar Personaje"}
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit} action="">
        <input
          className="py-1 px-3 rounded-md m-1 text-gray-800 focus:outline-cyan-500 ease-in-out duration-300"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          className="py-1 px-3 rounded-md m-1 text-gray-800 focus:outline-cyan-500 ease-in-out duration-300"
          type="text"
          name="sex"
          placeholder="Sexo"
          onChange={handleChange}
          value={form.sex}
        />
        <div className="flex justify-between">
          <input
            className="px-3 py-1 w-1/2 mr-1 my-2 ease-in-out duration-300 bg-sky-600 hover:bg-sky-400 rounded-md cursor-pointer"
            type="submit"
            value={dataToEdit?"Editar":"Agregar"}
          />
          <input
            className="px-3 py-1 w-1/2 ml-1 my-2 ease-in-out duration-300 bg-red-600 hover:bg-red-400 rounded-md cursor-pointer"
            type="reset"
            value="Limpiar"
            onClick={handleReset}
          />
        </div>
      </form>
    </div>
  );
}
