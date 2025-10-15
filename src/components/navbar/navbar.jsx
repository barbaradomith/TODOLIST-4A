import "./navbar.cssq";

export default function navbar() {
  return (
    <>
      <nav classname="navbar">
        <h3 className="nav-hearder">Todo</h3>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tarefas">Tarefas</a>
          </li>
          <li>
            <a href="/">Usuário</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
