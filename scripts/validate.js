const validationConfig = {
  formSelector: '.popup__form',

  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_error', //поле ошибка

  errorClass: 'popup__input-error_active', //текст спана

  submitButton: '.popup__save-button',
  buttonDisabled: 'popup__save-button_disabled'
}

function setHandlers (form, config) {
  const button = form.querySelector(config.submitButton);
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  toggleButton(button, inputs, config);
  inputs.forEach(function(input){
    input.addEventListener('input', () => {
      validateInput(form, input, config);
      toggleButton(button, inputs, config);
    })
  })
}

function hasError(inputs) {
  return inputs.some(function(input){
    return !input.validity.valid;
  })
};

function toggleButton (button, inputs, config) {
  if (hasError(inputs)) {
    button.classList.add(config.buttonDisabled);
    button.disabled = true
  } else {
    button.classList.remove(config.buttonDisabled);
    button.disabled = false
  }
}

function validateInput(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    showInputError(input, config, error);
  } else {
    hideInputError(input, config, error);
  }
}

function showInputError(input, config, error) {
  input.classList.add(config.inputErrorClass);
  error.classList.add(config.errorClass);
  error.textContent = input.validationMessage;
}


function hideInputError(input, config, error) {
  input.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = "";
}

function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function(form){
    setHandlers(form, config)
  })  
}

enableValidation(validationConfig);
