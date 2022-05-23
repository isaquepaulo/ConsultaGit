import "./styles.css";

type Props = {
  img: string;
};

const ResultCardImg = ({ img }: Props) => {
  return (
    <div className="result-container-img ">
      <img className="img-fluid" src={img}></img>
    </div>
  );
};

export default ResultCardImg;
