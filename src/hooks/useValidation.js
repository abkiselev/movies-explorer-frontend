import { useEffect, useState } from 'react'
import { emailRegexp } from '../utils/regexp'

function UseValidation() {
  const [values, setValues] = useState({})
  const [isValuesValid, setIsValuesValid] = useState({})
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  function handleValues(e) {
    setValues({ ...values, [e.target.name]: e.target.value })

    switch (e.target.name) {
      case 'email':
        validateEmail(e.target.value)
        break
      default:
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage })
        setIsValuesValid({ ...isValuesValid, [e.target.name]: e.target.validity.valid })
        break
    }
  }

  function setInitialValues(initialInputs) {
    setValues(initialInputs)
    setIsValuesValid(initialInputs)
    setErrors(initialInputs)
  }

  function validateEmail(inputText) {
    if (!String(inputText).toLowerCase().match(emailRegexp)) {
      setErrors({ ...errors, email: 'Пока это не похоже на e-mail...' })
      setIsValuesValid({ ...isValuesValid, email: false })
    } else {
      setErrors({ ...errors, email: '' })
      setIsValuesValid({ ...isValuesValid, email: true })
    }
  }

  useEffect(() => {
    if (
      Object.values(isValuesValid).every((i) => i === true) &&
      Object.values(isValuesValid).length !== 0
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [isValuesValid])

  return {
    isFormValid,
    values,
    handleValues,
    errors,
    setInitialValues,
    setIsFormValid,
    setErrors,
    setValues,
    isValuesValid,
    setIsValuesValid,
  }
}

export default UseValidation
