import React from "react";
import { useState } from "react";

const Formvalidationhoc = (Reusecomponents) => {
  const Resuableform = () => {
    const [formerror, setformerror] = useState({
      name: "",
      rollno: "",
      class: "",
      ragistrationno: "",
      fathername: "",
      mothername: "",
      fathermobileno: "",
      mothermobileno: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    });

    //  Form validation----------------------------------------------------------------------
    function validateForm(forms) {
      let error = {};
      let isValid = true;
      const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      const phoneRegex = /^\d{10}$/;
      const zipRegex = /^\d{6}$/;
      const numberRegex = /\d/;

      if (!forms.name) {
        isValid = false;
        error.name = "Feild is required!";
      } else if (specialChars.test(forms.name)) {
        isValid = false;
        error.name = "Special char not allowed!";
      } else if (numberRegex.test(forms.name)) {
        isValid = false;
        error.name = "no not allowed!";
      } else if (forms.name.length < 2) {
        isValid = false;
        error.name = "Invalid length!";
      }

      if (!forms.rollno) {
        isValid = false;
        error.rollno = "Feild is required!";
      } else if (specialChars.test(forms.rollno)) {
        isValid = false;
        error.rollno = "Special char not allowed!";
      } else if (!numberRegex.test(forms.rollno)) {
        isValid = false;
        error.rollno = "Only no allowed";
      } else if (forms.rollno.length > 3) {
        isValid = false;
        error.rollno = "Length can't greatter then 3!";
      }
      if (!forms.class) {
        isValid = false;
        error.class = "Feild is required!";
      } else if (forms.class > 12) {
        isValid = false;
        error.class = "invalid class!";
      } else if (specialChars.test(forms.class)) {
        isValid = false;
        error.class = "Special char not allowed!";
      } else if (!numberRegex.test(forms.class)) {
        isValid = false;
        error.class = "Only no allowed";
      } else if (forms.class.length > 2) {
        isValid = false;
        error.class = "Length can't greatter then 2!";
      }
      if (!forms.ragistrationno) {
        isValid = false;
        error.ragistrationno = "Feild is required!";
      } else if (specialChars.test(forms.ragistrationno)) {
        isValid = false;
        error.ragistrationno = "Special char not allowed!";
      } else if (!numberRegex.test(forms.ragistrationno)) {
        isValid = false;
        error.ragistrationno = "Only no allowed";
      } else if (forms.ragistrationno.length > 5) {
        isValid = false;
        error.ragistrationno = "Length can't greatter then 5!";
      }
      if (!forms.fathername) {
        isValid = false;
        error.fathername = "Feild is required!";
      } else if (specialChars.test(forms.fathername)) {
        isValid = false;
        error.fathername = "Special char not allowed!";
      } else if (numberRegex.test(forms.fathername)) {
        isValid = false;
        error.fathername = "Only not allowed";
      } else if (forms.fathername.length < 2) {
        isValid = false;
        error.fathername = "Invalid length!";
      }

      if (!forms.mothername) {
        isValid = false;
        error.mothername = "Feild is required!";
      } else if (specialChars.test(forms.mothername)) {
        isValid = false;
        error.mothername = "Special char not allowed!";
      } else if (numberRegex.test(forms.mothername)) {
        isValid = false;
        error.mothername = "Only not allowed";
      } else if (forms.mothername.length < 2) {
        isValid = false;
        error.mothername = "Invalid length!";
      }

      if (!forms.fathermobileno) {
        isValid = false;
        error.fathermobileno = "Feild is required!";
      } else if (specialChars.test(forms.fathermobileno)) {
        isValid = false;
        error.fathermobileno = "Special char not allowed!";
      } else if (!numberRegex.test(forms.fathermobileno)) {
        isValid = false;
        error.fathermobileno = "Only no allowed";
      } else if (!phoneRegex.test(forms.fathermobileno)) {
        isValid = false;
        error.fathermobileno = "Invalid length!";
      }

      if (!forms.mothermobileno) {
        isValid = false;
        error.mothermobileno = "Feild is required!";
      } else if (specialChars.test(forms.mothermobileno)) {
        isValid = false;
        error.mothermobileno = "Special char not allowed!";
      } else if (!numberRegex.test(forms.mothermobileno)) {
        isValid = false;
        error.mothermobileno = "Only no allowed";
      } else if (!phoneRegex.test(forms.mothermobileno)) {
        isValid = false;
        error.mothermobileno = "Invalid length!";
      }
      if (!forms.street) {
        isValid = false;
        error.street = "Feild is required!";
      } else if (specialChars.test(forms.street)) {
        isValid = false;
        error.street = "Special char not allowed!";
      } else if (forms.street.length < 2) {
        isValid = false;
        error.street = "Invalid length!";
      }

      if (!forms.city) {
        isValid = false;
        error.city = "Feild is required!";
      } else if (specialChars.test(forms.city)) {
        isValid = false;
        error.city = "Special char not allowed!";
      } else if (numberRegex.test(forms.city)) {
        isValid = false;
        error.city = "no not allowed";
      } else if (forms.city.length < 2) {
        isValid = false;
        error.city = "Invalid length!";
      }

      if (!forms.state) {
        isValid = false;
        error.state = "Feild is required!";
      } else if (specialChars.test(forms.state)) {
        isValid = false;
        error.state = "Special char not allowed!";
      } else if (numberRegex.test(forms.state)) {
        isValid = false;
        error.state = "no not allowed";
      } else if (forms.state.length < 2) {
        isValid = false;
        error.state = "Invalid length!";
      }

      if (!forms.zip) {
        isValid = false;
        error.zip = "Feild is required!";
      } else if (specialChars.test(forms.zip)) {
        isValid = false;
        error.zip = "Special char not allowed!";
      } else if (!numberRegex.test(forms.zip)) {
        isValid = false;
        error.zip = "Only no allowed";
      } else if (!zipRegex.test(forms.zip)) {
        isValid = false;
        error.zip = "ivalid length!";
      }

      setformerror({ ...error });
      return isValid;
    }

    return (
      <Reusecomponents validateForm={validateForm} formerror={formerror} />
    );
  };
  return Resuableform;
};

export default Formvalidationhoc;
