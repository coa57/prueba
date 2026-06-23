interface NavbarProps {
  onPerfil?: () => void;
  onCarrito?: () => void;
  onCatalogo?: () => void;
  onContacto?: () => void;
  onContactos?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onPerfil,
  onCarrito,
  onCatalogo,
  onContacto,
  onContactos,
}) => {
  return (
    <header
      style={{
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Mi Proyecto
      </div>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <button
              onClick={onCatalogo}
              style={buttonStyle}
            >
              📚 Catálogo
            </button>
          </li>

          <li>
            <button
              onClick={onCarrito}
              style={buttonStyle}
            >
              🛒 Carrito
            </button>
          </li>

          <li>
            <button
              onClick={onPerfil}
              style={buttonStyle}
            >
              👤 Perfil
            </button>
          </li>

          <li>
            <button
              onClick={onContacto}
              style={buttonStyle}
            >
              📞 Contacto
            </button>
          </li>

          <li>
            <button
              onClick={onContactos}
              style={buttonStyle}
            >
              👥 Contactos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#334155",
  color: "#fff",
  border: "none",
  padding: "0.6rem 1rem",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "0.95rem",
  transition: "all 0.2s ease",
};

export default Navbar;