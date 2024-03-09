import ButtonContainer from "./ButtonContainer";

const Projector = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column", // For vertical buttons
      marginBottom: "10px",
    },
    horizontalContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "583px",
      marginTop: "60px",
      marginBottom: "60px",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#1655a2",
      height: "75px",
      width: "135px",
      textAlign: "center",
      color: "white",
      borderWidht: "2px",
        borderColor:"white",
      margin: "5px",
      borderRadius: "15px", // Adjust spacing between buttons
    },
    buttonSelected: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      height: "75px",
      width: "135px",
      textAlign: "center",
      backgroundColor: "#249889",
      color: "white",
      borderWidht: "2px",
        borderColor:"white",
      borderRadius: "15px", // Adjust spacing between buttons
    },
    label: {
      flexGrow: 1, // Allow label to expand to take up remaining space
      textAlign: "center",
      fontSize: "30px",
      marginBottom: "1px",
    },
  };
  return (
    <>
      <ButtonContainer
        styles={styles}
        label="KAMERA VALINTA"
        count={3}
        joinValues={["100", "101", "102"]}
        buttonLabel={["1", "2", "3"]}
      />
      <ButtonContainer
        styles={styles}
        label="PC:T"
        count={4}
        joinValues={["100", "101", "102"]}
        buttonLabel={["1", "2", "TRICASTER", "MYKISTÄ KUVA"]}
      />
      <ButtonContainer
        styles={styles}
        label="PROJEKTORI"
        count={2}
        joinValues={["100", "101", "102"]}
        buttonLabel={["ON", "OFF"]}
      />
    </>
  );
};

export default Projector;
