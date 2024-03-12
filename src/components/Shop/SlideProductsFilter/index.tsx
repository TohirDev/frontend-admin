type Props = {
  tabs?: string;
};

const SlideProductsFilter = (props: Props) => {
  const { tabs } = props;
  return <div>{tabs}</div>;
};

export default SlideProductsFilter;
