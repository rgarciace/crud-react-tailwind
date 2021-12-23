import React from "react";
import TablaPersonajesRow from "./TablaPersonajeRow";

export default function TablePersonajes({ data, setDataToEdit, deleteData }) {
  return (
    <div className="w-11/12 md:w-1/2">
      <h2 className="font-bold text-center text-lg text-sky-300 py-2 px-5 border-b-2 mt-3">
        Datos de Personajes
      </h2>
      <table className="w-full">
        <thead>
          <tr className="border-b bg-gray-700">
            <th>Nombre</th>
            <th>Sexo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos...</td>
            </tr>
          ) : (
            data.map((el) => (
              <TablaPersonajesRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              ></TablaPersonajesRow>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
