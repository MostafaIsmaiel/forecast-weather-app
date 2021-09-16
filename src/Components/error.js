const Error = ({ isError, isLoading, errorMessage }) => {
  isLoading(false);
  return (
    <div
      className="error"
      onClick={() => {
        isError(false);
      }}
    >
      <h2 className="errMessage">{errorMessage}</h2>
    </div>
  );
};

export default Error;
