import "./styles.css";

export default function Newsletter() {
  return (
    <div className="newsletter section">
      <div className="newsletter-text">
        <span>Assine nossa newsletter!</span>
        <span>Receba descontos e novidades da furia por e-mail</span>
      </div>
      <div className="form-newsletter">
        <input type="text" placeholder="Seu nome" />
        <div>
          <input type="text" placeholder="Seu e-mail" />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}
