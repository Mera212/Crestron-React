import ButtonContainer from "./ButtonContainer";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Camera = () => {
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
      width: "350px",
      marginTop: "5px",
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
      margin: "5px",
      borderRadius: "15px", // Adjust spacing between buttons
    // Adjust spacing between buttons
    },
    label: {
      flexGrow: 1, // Allow label to expand to take up remaining space
      textAlign: "center",
      fontSize: "30px",
      marginBottom: "1px",
      marginTop: "5px",
    },
    floatRightContainer: {
      display: "flex",
      flexDirection: "row",
    },
    cameraControls: {
      position: "absolute",
      bottom: "1080px",
      right: "1500px",

      marginLeft: "1px",
    },
    zoom:{
      position:"fixed",
      right: "100px",
      bottom:'130px'
    }
  };

  return (
    <>
      <div>
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
      </div>
      <div style={styles.cameraControls}>
        <h1
          style={{
            position: "absolute",
            left: "1150px",
            top: "380px",
            fontSize: "30px",
          }}>
          KAMERA-OHJAUKSET
        </h1>
        <ArrowForwardIosIcon
          sx={{
            position: "absolute",
            top: "400px",
            left: "1050px",
            size: "large",
            rotate: "270deg",
            borderRadius: 2,
            fontSize: "160px",
            p: 2,
            minWidth: 300,
          }}
        />

        <ArrowForwardIosIcon
          sx={{
            position: "absolute",
            top: "520px",
            left: "1170px",
            size: "large",
            borderRadius: 2,
            fontSize: "160px",
            p: 2,
            minWidth: 300,
          }}
        />

        <ArrowForwardIosIcon
          sx={{
            position: "absolute",
            top: "650px",
            left: "1050px",
            size: "large",
            rotate: "90deg",
            borderRadius: 2,
            fontSize: "160px",
            p: 2,
            minWidth: 300,
          }}
        />

        <ArrowForwardIosIcon
          sx={{
            position: "absolute",
            top: "505px",
            left: "915px",
            size: "large",
            rotate: "180deg",
            borderRadius: 2,
            fontSize: "160px",
            p: 4,
            minWidth: 300,
          }}
        />
        
      </div>
      <div style={styles.zoom}>
      <ButtonContainer
          styles={styles}
          label="ZOOM"
          count={2}
          joinValues={["100", "101", "102"]}
          buttonLabel={["+", "-"]}
        />
        </div>

    </>
  );
};

export default Camera;
