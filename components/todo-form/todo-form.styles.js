import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  search: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 2,
    borderBottomColor: "#10154d",
    borderLeftWidth: 2,
    borderLeftColor: "#10154d",
    paddingLeft: 8,
  },
  searchButton: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#10154d",
  },
});
