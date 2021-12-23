import React from "react";

import { PencilIcon, TrashIcon } from '@heroicons/react/solid';


export default function TablaPersonajesRow({ el, setDataToEdit, deleteData }) {
  
  return (
    <tr className="border-b">
      <td className="py-2 text-center">{el.name}</td>
      <td className="py-2 text-center">{el.sex}</td>
      <td className="py-2 flex justify-center">
        <PencilIcon onClick={()=>setDataToEdit(el)} className="h-5 text-gray-400 hover:text-sky-500 cursor-pointer"/>
        <TrashIcon onClick={()=>deleteData(el.id)} className="h-5 text-gray-400 hover:text-red-500 cursor-pointer"/>
      </td>
    </tr>
  );
}
