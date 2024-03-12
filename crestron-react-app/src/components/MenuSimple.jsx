import ButtonContainer from "./ButtonContainer";

const MenuSimple = ({setSubpage}) => {
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
      marginTop: "20px",
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
      borderWidht: "2px",
      margin: "5px",

        borderColor:"white",
      color: "white",
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
    <ButtonContainer
         styles={styles}
          label="VALIKKO"
          setSubpage={setSubpage}
          count={3}
          joinValues={["1", "2", "3"]}
          buttonLabel={[
            "VALAISTUS",
            "AUDIO",
            "PROJEKTORI",
          ]}
        />
  );
};

export default MenuSimple;










