

export default function (){

    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Añadir Tarea</h2>
            <input
            className="border p-2 rounded w-full mb-2"
            placeholder="Añadir Tarea"
            type="text"/>
            <h2 className="text-xl font-bold mb-2">Agregar Etiqueta</h2>
            <input 
            className="border p-2 rounded w-full mb-2"
            placeholder="Agregar Etiqueta"
            type="text"/>
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >Agregar
            </button>
        </div>
    )
}