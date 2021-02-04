import React, { Component } from "react";
import { Input, Button } from "antd";
import styles from "./styles.module.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    console.log(this.state.email);
    console.log(this.state.password);
  };

  render() {
    return (
      <form className={styles.form}>
        <h2>Sign In</h2>
        <div className={styles.formGroup}>
          <label className={styles.labelName}>
            E-mail
            <p className={styles.inputWrapper}>
              <i className="fas fa-user icon"></i>
              <Input
                placeholder="example@yandex.ru"
                className={styles.formControl}
                name="email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
            </p>
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelName}>
            Password
            <p className={styles.inputWrapper}>
              <i className="fas fa-key icon"></i>
              <Input
                className={styles.formControl}
                name="password"
                value={this.state.password}
                onChange={this.handleUserInput}
              />
            </p>
          </label>
        </div>
        <Button className={styles.button} onClick={this.handleClick}>
          Sign in
        </Button>
      </form>
    );
  }
}

export default LoginForm;
