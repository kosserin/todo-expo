import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: 'calc(100% - 40px)',
    marginHorizontal: 'auto',
    marginTop: 48,
  },
  mainHeading: {
    fontSize: 40,
    fontFamily: "Inter_900Black",
    marginBottom: 8,
    color: "white",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Inter_400Regular",
    color: "white",
  },
});
