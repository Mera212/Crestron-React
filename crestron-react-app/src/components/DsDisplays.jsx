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
      width: "350px",

      marginTop: "5px",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#1655a2",
      height: "45px",
      width: "81px",
      textAlign: "center",
      color: "white",
      borderWidht: "2px",
      borderColor: "white",
      margin: "1px",
      borderRadius: "15px", // Adjust spacing between buttons
    },
    buttonSelected: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1px",
      height: "45px",
      width: "81px",
      textAlign: "center",
      backgroundColor: "#249889",
      borderWidht: "2px",
      margin: '1px',
      borderColor: "white",
      color: "white",
      borderRadius: "15px", // Adjust spacing between buttons
    },
    label: {
      flexGrow: 1, // Allow label to expand to take up remaining space
      textAlign: "center",
      fontSize: "15px",
      marginBottom: "1px",
    },
    ds: {
      display: "flex",
      height: "70px",
    },
    dsContainer: {},
  };
  return (
    <>
      <div style={styles.ds}>
        <ButtonContainer
          styles={styles}
          label="CV-14 ESINTYJÄHUONE VASEN"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
        <ButtonContainer
          styles={styles}
          label="NÄYTTÖ"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
      </div>
      <div style={styles.ds}>
        <ButtonContainer
          styles={styles}
          label="CV-07 ESIINTYJÄHUONE OIKEA"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
        <ButtonContainer
          styles={styles}
          label="NÄYTTÖ"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
      </div>
      <div style={styles.ds}>
        <ButtonContainer
          styles={styles}
          label="C-118 ESIINTYJÄHUONE VASEN"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
        <ButtonContainer
          styles={styles}
          label="NÄYTTÖ"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
      </div>
      <div>
      <div style={styles.ds}>
        <ButtonContainer
          styles={styles}
          label="C-111 ESIINTYJÄHUONE VASEN"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
        <ButtonContainer
          styles={styles}
          label="NÄYTTÖ"
          count={2}
          joinValues={["100", "101"]}
          buttonLabel={["ON", "OFF"]}
        />
      </div>
      <div>
        <div style={styles.ds}>
          <ButtonContainer
            styles={styles}
            label="B-117 VAHTIMESTARI"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
          <ButtonContainer
            styles={styles}
            label="NÄYTTÖ"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
        </div>
        <div style={styles.ds}>
          <ButtonContainer
            styles={styles}
            label="C-139 KÄYTÄVÄ"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
          <ButtonContainer
            styles={styles}
            label="NÄYTTÖ"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
        </div>
        <div style={styles.ds}>
          <ButtonContainer
            styles={styles}
            label="CV-126 VAATESÄILYTYS"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
          <ButtonContainer
            styles={styles}
            label="NÄYTTÖ"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
        </div>
        <div style={styles.ds}>
          <ButtonContainer
            styles={styles}
            label="C-207 ESIINTYJÄ LÄMPIÖ"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
          <ButtonContainer
            styles={styles}
            label="NÄYTTÖ"
            count={2}
            joinValues={["100", "101"]}
            buttonLabel={["ON", "OFF"]}
          />
        </div></div>
      </div>
    </>
  );
};

export default DsDisplays;
