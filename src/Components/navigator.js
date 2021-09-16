const Navigator = ({ setIsNav, isLoading, navMessage }) => {
  isLoading(false);
  return (
    <div
      className="navigator"
      onClick={() => {
        setIsNav(false);
      }}
    >
      <h2 className="errMessage">{navMessage}</h2>
    </div>
  );
};

export default Navigator;
