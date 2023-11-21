import "./styles.css";

interface ICard {
  title: string;
  price: string;
  oldPrice?: string;
  installments: number;
  image: string;
}

export default function Card({
  title,
  price,
  oldPrice,
  installments,
  image,
}: ICard) {
  //hover in buy-box
  // const [hover, setHover] = useState(false);
  // const handleHover = () => {

  //   setHover(!hover);
  // };

  return (
    <div className="card">
      <div className="card-pic">
        <img src={image} alt={title} />
        <div className="buy-box">
          <ul>
            <li>PP</li>
            <li>P</li>
            <li>M</li>
            <li>G</li>
            <li>GG</li>
            <li>XGG</li>
          </ul>
          <button>COMPRAR</button>
        </div>
      </div>

      <div className="card-info">
        <strong>{title}</strong>
        <div className="card-prices">
          <span>R$ {price}</span>
          {oldPrice && <span className="card-old-price">R$ {oldPrice}</span>}
        </div>
        <div className="card-installments">
          <span>Em até {installments}x sem juros no cartão</span>
        </div>
      </div>
    </div>
  );
}
