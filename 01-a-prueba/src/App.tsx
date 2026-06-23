import { useState } from "react";
import Navbar from "./componentes/Navbar";
import ModalPerfil from "./componentes/modalperfil";
import "./App.css";

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <Navbar
        onPerfil={() => setIsProfileOpen(true)}
        onCarrito={() => alert("Carrito")}
        onCatalogo={() => alert("Catálogo")}
        onContacto={() => alert("Contacto")}
        onContactos={() => alert("Contactos")}
      />

      {/* MODAL PERFIL */}
      <ModalPerfil
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        nombre="Juan Pérez"
        email="juan@email.com"
        telefono="+591 70000000"
      />

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <h1>Bienvenido a Mi Proyecto</h1>
        <p>
          Usa el botón <strong>👤 Perfil</strong> del navbar para abrir el modal.
        </p>

        <section className="card">
          <h2>Inicio</h2>
          <p>Este es el contenido principal de tu aplicación.</p>
        </section>
      </main>
    </div>
  );
}

export default App;