import ButtonContainer from "./ButtonContainer";
import VolumeSlider from "./VolumeSlider";

const Audio = () => {
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
      marginTop: "80px",
      marginBottom: "80px",
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
      borderColor: "white",
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
      borderColor: "white",
      color: "white",
      borderRadius: "15px", // Adjust spacing between buttons
    },
    label: {
      flexGrow: 1, // Allow label to expand to take up remaining space
      textAlign: "center",
      fontSize: "30px",
      marginBottom: "1px",
    },
    audio: {
      display: "flex",
      flexWrap: "wrap", // Allow items to wrap to the next row
      justifyContent: "space-around",
      width: "480px",
    },
    horizontal: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginTop: "80px",
      marginLeft: "100px",
    },
  };
  return (
    <>
      <div style={styles.horizontal}>
        <span style={styles.audio}>
          <VolumeSlider label={"PROG"} />
          <VolumeSlider label={"MIC 1"} />
          <VolumeSlider label={"MIC 2"} />
        </span>
        <div>
          <ButtonContainer
            styles={styles}
            label="PA"
            count={2}
            buttonLabel={["PÄÄLLE", "POIS"]}
            joinValues={["120", "121"]}
          />

          <ButtonContainer
            styles={styles}
            label="HEIKKOKUULOISET"
            count={2}
            buttonLabel={["PÄÄLLE", "POIS"]}
            joinValues={["122", "123"]}
          />
        </div>
      </div>
    </>
  );
};

export default Audio;
