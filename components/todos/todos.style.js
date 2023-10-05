import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignSelf: 'stretch',
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: "rgba(255, 255, 255, .8)",
    borderRadius: 16,
  },
});
