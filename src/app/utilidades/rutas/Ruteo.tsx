import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionesCrear } from "../../componentes/Canciones/CancionesCrear";
import { CancionesListar } from "../../componentes/Canciones/CancionesListar";
import { CancionesAdmin } from "../../componentes/Canciones/CancionesAdmin";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/songscre" element={<CancionesCrear />} />
      <Route path="/songslis" element={<CancionesListar />} />
      <Route path="/songsadm" element={<CancionesAdmin />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};