import React from "react";
import "./modalperfil.tsx";

interface ModalPerfilProps {
  isOpen: boolean;
  onClose: () => void;
  nombre: string;
  email: string;
  telefono: string;
}

const ModalPerfil: React.FC<ModalPerfilProps> = ({
  isOpen,
  onClose,
  nombre,
  email,
  telefono,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>Perfil de Usuario</h2>

        <div className="perfil-info">
          <p>
            <strong>Nombre:</strong> {nombre}
          </p>

          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Teléfono:</strong> {telefono}
          </p>
        </div>

        <button className="cerrar" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalPerfil;