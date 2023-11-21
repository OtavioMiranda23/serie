import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container">
        <h3>INSTITUCIONAL</h3>
        <a>Quem somos</a>
        <a>Contato</a>
        <a>Central de Atendimento</a>
      </div>
      <div className="footer-container">
        <h3>CONTATO</h3>
        <a>(11) 3035-0520</a>
        <a>De Segunda à Sexta</a>
        <a>De Segunda à Sexta</a>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M22.0371 7.18604C22.0288 6.75701 21.9944 6.32889 21.9341 5.90404C21.8623 5.52614 21.7402 5.15955 21.5711 4.81404C21.201 4.08334 20.6076 3.48961 19.8771 3.11904C19.5338 2.95075 19.1696 2.82901 18.7941 2.75704C18.366 2.69552 17.9345 2.66045 17.5021 2.65204C17.3191 2.64504 17.0821 2.64204 16.9721 2.64204L7.12412 2.63904C7.01412 2.63904 6.77712 2.64204 6.59412 2.64904C6.16509 2.6573 5.73696 2.6917 5.31212 2.75204C4.93422 2.82388 4.56763 2.94596 4.22212 3.11504C3.49146 3.48524 2.89775 4.0786 2.52712 4.80904C2.35888 5.15235 2.23714 5.51656 2.16512 5.89204C2.10332 6.32012 2.06792 6.75161 2.05912 7.18404C2.05312 7.36704 2.04912 7.60404 2.04912 7.71404L2.04712 17.562C2.04712 17.672 2.05012 17.909 2.05712 18.092C2.06539 18.5211 2.09978 18.9492 2.16012 19.374C2.23197 19.7519 2.35405 20.1185 2.52312 20.464C2.89332 21.1947 3.48668 21.7884 4.21712 22.159C4.56044 22.3273 4.92465 22.449 5.30012 22.521C5.72822 22.5826 6.1597 22.6176 6.59212 22.626C6.77512 22.633 7.01212 22.636 7.12212 22.636L16.9701 22.638C17.0801 22.638 17.3171 22.635 17.5001 22.628C17.9291 22.6197 18.3573 22.5853 18.7821 22.525C19.16 22.4532 19.5266 22.3311 19.8721 22.162C20.6031 21.792 21.1972 21.1986 21.5681 20.468C21.7364 20.1247 21.8581 19.7605 21.9301 19.385C21.9919 18.957 22.0273 18.5255 22.0361 18.093C22.0421 17.91 22.0461 17.673 22.0461 17.563L22.0471 7.71604C22.0471 7.60604 22.0441 7.36904 22.0371 7.18604ZM12.2641 19.596H12.2611C11.0708 19.5958 9.89947 19.2974 8.85412 18.728L5.07412 19.719L6.08612 16.026C5.30257 14.6664 4.98949 13.0861 5.19542 11.5304C5.40134 9.9747 6.11477 8.53037 7.22509 7.42137C8.33541 6.31237 9.78059 5.60066 11.3366 5.39658C12.8925 5.19251 14.4724 5.50747 15.8311 6.29263C17.1899 7.0778 18.2516 8.2893 18.8518 9.7393C19.4519 11.1893 19.5569 12.7968 19.1505 14.3126C18.7441 15.8283 17.849 17.1676 16.6039 18.1229C15.3588 19.0782 13.8334 19.596 12.2641 19.596Z"
              fill="#0D0C0C"
            />
            <path
              d="M12.2671 6.54006C11.2082 6.53975 10.1685 6.82314 9.25624 7.36075C8.34395 7.89836 7.59235 8.67056 7.07959 9.59705C6.56684 10.5235 6.31166 11.5705 6.34059 12.629C6.36952 13.6875 6.68151 14.719 7.24411 15.6161L7.38511 15.8401L6.78611 18.0261L9.02911 17.4381L9.24511 17.5661C10.1582 18.1068 11.1999 18.3921 12.2611 18.3921H12.2641C13.8359 18.3923 15.3435 17.7682 16.4551 16.6569C17.5667 15.5457 18.1913 14.0384 18.1916 12.4666C18.1919 10.8948 17.5677 9.38722 16.4565 8.2756C15.3452 7.16398 13.8379 6.53933 12.2661 6.53906L12.2671 6.54006ZM15.7511 15.0101C15.62 15.2265 15.4456 15.4135 15.2387 15.5593C15.0319 15.7051 14.7971 15.8064 14.5491 15.8571C14.1748 15.9213 13.7906 15.8973 13.4271 15.7871C13.0824 15.6796 12.7436 15.5541 12.4121 15.4111C11.1818 14.7937 10.1332 13.867 9.36911 12.7221C8.95229 12.192 8.69927 11.5518 8.64111 10.8801C8.63631 10.6028 8.68931 10.3275 8.79675 10.0719C8.90418 9.81619 9.06369 9.58569 9.26511 9.39506C9.32464 9.32716 9.39756 9.27229 9.4793 9.23392C9.56105 9.19554 9.64984 9.17448 9.74011 9.17206C9.85811 9.17206 9.97711 9.17206 10.0811 9.17806C10.1911 9.18306 10.3371 9.13606 10.4811 9.48406C10.6311 9.84006 10.9871 10.7171 11.0311 10.8061C11.0594 10.8527 11.0755 10.9057 11.0781 10.9602C11.0808 11.0146 11.0697 11.0689 11.0461 11.1181C11.0012 11.225 10.9413 11.3251 10.8681 11.4151C10.7781 11.5191 10.6811 11.6471 10.6011 11.7271C10.5111 11.8161 10.4191 11.9121 10.5221 12.0901C10.7896 12.5481 11.1236 12.964 11.5131 13.3241C11.9357 13.6998 12.4207 13.999 12.9461 14.2081C13.1241 14.2981 13.2281 14.2821 13.3321 14.1631C13.4361 14.0441 13.7771 13.6431 13.8961 13.4651C14.0151 13.2871 14.1331 13.3171 14.2961 13.3761C14.4591 13.4351 15.3361 13.8661 15.5141 13.9561C15.6921 14.0461 15.8111 14.0891 15.8551 14.1631C15.9039 14.4495 15.8677 14.7439 15.7511 15.0101Z"
              fill="#0D0C0C"
            />
          </svg>
          <a>Whatsapp</a>
        </div>
      </div>
      <div className="footer-container">
        <h3>POLÍTICAS</h3>
        <a>Prazos e Entregas</a>
        <a>Formas de pagamentos</a>
        <a>Promoções e Descontos</a>
        <a>Politica de privacidade</a>
        <a>Trocas e devoluções</a>
      </div>
      <div className="payments">
        <h3>FORMAS DE PAGAMENTO</h3>

        <div className="payments-icons">
          <img src="./src/assets/visa.png" alt="Visa icone" />
          <img src="./src/assets/mastercard.png" alt="Mastercard icone" />
          <img src="./src/assets/dinersclub.png" alt="Dinersclub icone" />
          <img src="./src/assets/hipercard.png" alt="Hipercard icone" />
          <img src="./src/assets/elo.png" alt="Elo icone" />
          <img src="./src/assets/Frame570.png" alt="Discover icone" />
          <img
            src="./src/assets/americanexpress.png"
            alt="American express icone"
          />
          <img src="./src/assets/jbc.png" alt="Jbc icone" />
          <img src="./src/assets/boleto.png" alt="Boleto icone" />
          <img src="./src/assets/pix.png" alt="Pix icone" />
        </div>
      </div>
    </footer>
  );
}
