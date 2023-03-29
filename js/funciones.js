document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const subject = document.querySelector('#subject');
  const message = document.querySelector('#message');

  function validate() {
    const specialCharRegex = /^(?=.*[A-Za-z])[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/;
    const specialCharExtRegex =
      /^(?=.*[A-Za-z])[A-Za-zñÑáéíóúÁÉÍÓÚüÜàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛçÇñÑÿŸœŒæÆßðÐøØåÅ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    const nameValue = name.value;
    const emailValue = email.value;
    const subjectValue = subject.value;
    const messageValue = message.value;

    const setValid = (element) => {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
    };

    const setInvalid = (element) => {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
    };

    /**
     * input name validation
     */
    if (nameValue.length == 0) {
      errors['name'] = 'Este campo es obligatorio';
      setInvalid(name);
    } else if (!specialCharRegex.test(nameValue)) {
      errors['name'] = 'Este campo no puede tener caracteres especiales';
      setInvalid(name);
    } else if (!specialCharExtRegex.test(nameValue)) {
      errors['name'] = 'Este campo no puede tener caracteres especiales';
      setInvalid(name);
    } else {
      errors['name'] = '';
      setValid(name);
    }

    /**
     * input email validation
     */
    if (emailValue.length == 0) {
      errors['email'] = 'Este campo es obligatorio';
      setInvalid(email);
    } else if (!emailRegex.test(emailValue)) {
      errors['email'] = 'El correo no es válido';
      setInvalid(email);
    } else {
      errors['email'] = '';
      setValid(email);
    }

    /**
     * input subject validation
     */
    if (subjectValue.length == 0) {
      errors['subject'] = 'Este campo es obligatorio';
      setInvalid(subject);
    } else {
      errors['subject'] = '';
      setValid(subject);
    }

    /**
     * input message validation
     */
    if (messageValue.length == 0) {
      errors['message'] = 'Este campo es obligatorio';
      setInvalid(message);
    } else {
      errors['message'] = '';
      setValid(message);
    }

    Object.entries(errors).forEach(([fieldName, errorMsg]) => {
      const helpElem = document.querySelector(`#${fieldName}Help`);
      if (errorMsg) {
        helpElem.textContent = errorMsg;
        setInvalid(helpElem.parentElement.querySelector(`#${fieldName}`));
      } else {
        helpElem.textContent = '';
      }
    });

    return Object.values(errors).every((errorMsg) => !errorMsg);
  }

  name.addEventListener('input', () => {
    const helpElem = document.querySelector('#nameHelp');
    helpElem.textContent = '';
    name.classList.remove('is-invalid');
  });
  email.addEventListener('input', () => {
    const helpElem = document.querySelector('#emailHelp');
    helpElem.textContent = '';
    email.classList.remove('is-invalid');
  });
  subject.addEventListener('input', () => {
    const helpElem = document.querySelector('#subjectHelp');
    helpElem.textContent = '';
    subject.classList.remove('is-invalid');
  });
  message.addEventListener('input', () => {
    const helpElem = document.querySelector('#messageHelp');
    helpElem.textContent = '';
    message.classList.remove('is-invalid');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validate()) {
    } else {
      alert('El formulario se envió correctamente');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
      name.classList.remove('is-valid', 'is-invalid');
      email.classList.remove('is-valid', 'is-invalid');
      subject.classList.remove('is-valid', 'is-invalid');
      message.classList.remove('is-valid', 'is-invalid');
    }
  });
});
