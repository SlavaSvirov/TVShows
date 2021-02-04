import React from "react";
import { Input, Button } from "antd";
import CustomInput from "./Input";
import styles from "./styles.module.css";

const ApplicationForm = () => {
  const [formValues, setFormValues] = React.useState({});
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
    setFormValues({});
  };

  const handleInputChange = event => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Application</h2>
      <div className={styles.formGroup}>
        <CustomInput
          onChange={handleInputChange}
          placeholder="Nickname"
          name="nickname"
          value={formValues.nickName}
        />

        <CustomInput
          onChange={handleInputChange}
          placeholder="First Name"
          name="firstName"
          value={formValues.firstName}
        />
        <CustomInput
          onChange={handleInputChange}
          placeholder="LastName"
          name="lastname"
          value={formValues.lastName}
        />
        <label className={styles.labelName}>
          Дата Рождения
          <p className={styles.inputWrapper}>
            <Input
              className={styles.formControl}
              placeholder=""
              type="date"
              name="date"
              onChange={handleInputChange}
              value={formValues.date}
              required
            ></Input>
          </p>
        </label>
      </div>
      <div className={styles.formGroup}>
        Выберите пол
        <label className={styles.gender}>
          Мужской
          <Input
            name="gender"
            type="radio"
            checked={formValues.gender === "male"}
            value="male"
            onChange={handleInputChange}
          ></Input>
        </label>
        <label className={styles.gender}>
          Женский
          <Input
            name="gender"
            type="radio"
            checked={formValues.gender === "female"}
            value="female"
            onChange={handleInputChange}
          ></Input>
        </label>
      </div>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
    </form>
  );
};
export default ApplicationForm;
