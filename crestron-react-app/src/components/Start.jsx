import PropTypes from "prop-types"
const Start = ({setPage}) => {
  
    const handleClick = () => {
        setPage('source'); 
      };
    const styles = {
    container: {
      color: "#fff",
      width: "100vw", // Set container width to cover the whole screen
      height: "100vh", // Set container height to cover the whole screen
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
    },
    button: {
      border: "none",
      background: "none",
      padding: "0",
      opacity: "0.5",
      cursor: "pointer",
      width: "100%", // Set button width to cover the whole container
      height: "100%", // Set button height to cover the whole container
      fontSize: "100px",
      color:'white'
    },
  };

  return (
    <div >
      <div style={styles.container}>
        <button onClick={handleClick} style={styles.button}>KOSKETA NÄYTTÖÄ ALOITTAAKSESI</button>
      </div>
    </div>
  );
};

Start.propTypes = {
  setPage: PropTypes.func
}
export default Start;
