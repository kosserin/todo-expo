export const sortByChecked = (a, b) => {
  if (a.isChecked && !b.isChecked) {
    return -1; // `a` should come before `b`
  } else if (!a.isChecked && b.isChecked) {
    return 1; // `b` should come before `a`
  } else {
    return 0; // No change in order
  }
};

export const sortByUnchecked = (a, b) => {
  if (!a.isChecked && b.isChecked) {
    return -1; // `a` should come before `b`
  } else if (a.isChecked && !b.isChecked) {
    return 1; // `b` should come before `a`
  } else {
    return 0; // No change in order
  }
};

export const sortByName = (a, b) => {
  // Use the localeCompare method to compare strings in a case-insensitive manner
  return a.title.localeCompare(b.title);
};
