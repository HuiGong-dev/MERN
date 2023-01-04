const useFormStyles = () => ({
  root: {
    "& .MuiTextField-root": {
      margin: "2px",
    },
  },
  paper: {
    padding: "10px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 1,
  },
});

export default useFormStyles;
