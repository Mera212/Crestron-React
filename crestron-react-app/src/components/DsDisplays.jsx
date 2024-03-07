import ButtonContainer from "./ButtonContainer";

const DsDisplays = () => {
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
      borderRadius: "15px", // Adjust spacing between buttons
    },
    label: {
      flexGrow: 1, // Allow label to expand to take up remaining space
      textAlign: "center",
      fontSize: "30px",
      marginBottom: "1px",
    },
    ds:{
        display:"flex",
       
    }
  };
  return (
    <>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    <div style={styles.ds}>
    <ButtonContainer
      styles={styles}
      label="CV-14 ESINTYJÄHUONE VASEN"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
     <ButtonContainer
      styles={styles}
      label="NÄYTTÖ"
      count={2}
      joinValues={[
        "100",
        "101",
      ]}
      buttonLabel={[
        "ON",
        "OFF",
      ]}
    />
    </div>
    </>
  );
};

export default DsDisplays;
