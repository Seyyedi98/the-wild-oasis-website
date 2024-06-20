import Spinner from "../_components/Spinner";

const loading = () => {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading Cabin data</p>
    </div>
  );
};

export default loading;
