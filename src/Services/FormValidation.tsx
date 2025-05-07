const signUpValidation = (name: string, value: string) => {
    switch (name) {
        case "name":
            if (value.length === 0) return "Вкажіть свої ПІБ.";
            return "";
        case "email":
            if (value.length === 0) return "Вкажіть свій email.";
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) return "Неправильна адреса електрононої пошти.";
            return "";
        case "password":
            if (value.length === 0) return "Введіть свій пароль.";
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/.test(value)) return "Пароль повинен містити від 8 до 15 символів, включаючи одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.";
            return "";
        default:
            return "";


    }
}

const loginValidation = (name: string, value: string) => {
    switch (name) {
        case "email":
            if (value.length === 0) return "Вкажіть свій email."
            return "";
        case "password":
            if (value.length === 0) return "Введіть свій пароль."
            return "";
        default:
            return "";
    }
}

export { signUpValidation, loginValidation };