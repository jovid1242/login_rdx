const validate = {
  formValidation: (state) => {
    const reg = /\S+@\S+\.\S+/;
    if (!reg.test(String(state.email).toLowerCase())) {
      return {
        error: true,
        message: "Введите корректный e-mail",
      };
    }

    if (!state.email) {
      return { error: true, message: "Запольните поле E-mail" };
    }

    if (!state.password) {
      return { error: true, message: "Запольните поле пароль" };
    }

    if (state.password.length < 4) {
      return {
        error: true,
        message:
          "Количества символов должно быть (от 4 до 10) и на наличие заглавной буквы",
      };
    }
    return { error: false, message: "Успешно" };
  },
};

export default validate;
