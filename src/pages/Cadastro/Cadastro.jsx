import "./Cadastro.css";
import { db } from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Cadastro() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("As senhas não coincidem!");
      return;
    } else {
      {
        addDoc(collection(db, "users"), {
          nome: e.target.nome.value,
          email: e.target.email.value,
          password: e.target.password.value,
        })
          .then(() => {
            alert("Usuário cadastrado com sucesso!");
          })
          .catch((error) => {
            console.error("Erro ao cadastrar usuário: ", error);
          });
      }
      // Código para cadastrar o usuário no Firestore
    }

    return (
      <div className="cadastro-container">
        <form id="cadastro-card" onSubmit={handleSubmit}>
          <h2>Cadastro </h2>
          <input name="nome" type="text" placeholder="Usuário" required />
          <input name="email" type="email" placeholder="Email" required />
          <input
            name="passowrd"
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="configpassword" placeholder="Confirmar Senha..." />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
