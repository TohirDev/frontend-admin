export const CustomRightArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="custom-react-multiple-carousel__arrow custom-react-multiple-carousel__arrow--right custom-border-right"
      onClick={() => onClick()}
    ></button>
  );
};

export const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="custom-react-multiple-carousel__arrow custom-react-multiple-carousel__arrow--left custom-border-left"
      onClick={() => onClick()}
    ></button>
  );
};
