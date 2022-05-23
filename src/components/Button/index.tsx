import "./styles.css";

type Props = {
  text: string;
};

const ButtonCustom = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary btn-text">
        <h6 className="mt-1">{text}</h6>
      </button>
    </div>
  );
};

export default ButtonCustom;
