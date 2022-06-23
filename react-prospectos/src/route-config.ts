import IndicePropsectos from "./prospectos/IndiceProspectos";
import CrearPropsectos from "./prospectos/CrearProspectos"
import EditarProspectos from "./prospectos/EditarProspectos";

const rutas = [
    {path: '/prospectos', componente: IndicePropsectos},
    {path: '/prospectos/crear', componente: CrearPropsectos},
    {path: '/prospectos/editar/:id', componente: EditarProspectos},
];

export default rutas;