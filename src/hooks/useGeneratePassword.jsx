import { useState } from "react";

function useGeneratePassword(selectedCheckboxes, maxlength) {
  // filter selected checkboxes
  const filteredCheckboxes = selectedCheckboxes?.filter(
    (checkbox) => checkbox.selected
  );

  // store new password
  const [password, setPassword] = useState("");

  /**
   *
   * @param {*} type string
   * @returns string
   *
   * It will create a new string based on user selected checkboxes
   */
  const generateString = (type) => {
    let compeleteString = "";
    switch (type) {
      case "numbers":
        compeleteString += "0123456789";
        break;
      case "special":
        compeleteString += "!@#$%^&*";
        break;
      case "small":
        compeleteString += "abcdefghijklmnopqrstuvwxyz";
        break;
      case "capital":
        compeleteString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
    }

    return compeleteString;
  };

  const generatePassword = () => {
    // generate string for selected checbox and join them
    const str = filteredCheckboxes
      .map((checkbox) => generateString(checkbox.name))
      .join("");

    // create a new password
    let newPassword = "";

    // taking character from random index to create new password
    for (let i = 0; i < maxlength; i++) {
      newPassword += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(newPassword);
  };

  return { password, generatePassword };
}

export default useGeneratePassword;
