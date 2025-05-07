import { TextInput, PasswordInput, Button } from "@mantine/core"
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../Services/UserService"
import { loginValidation } from "../../Services/FormValidation"
import { notifications } from "@mantine/notifications"
const form = {
    email: "",
    password: "",
}

const Login = () => {
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setFormError({ ...formError, [event.target.name]: "" });
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if (valid) {
            loginUser(data).then((response) => {
                console.log(response);
                console.log(response);
                setData(form);
                notifications.show({
                    title: "Ви увійшли в систему",
                    message: "Перенаправлення головну сторінку...",
                    withCloseButton: true,
                    icon: <IconCheck size={20} />,
                    color: "teal"
                })
                setTimeout(() => {
                    navigate("/");
                }, 1000)
            }).catch((error) => {
                console.log(error);
                notifications.show({
                    title: "Помилка при вході в систему",
                    message: error.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX size={20} />,
                    color: "red",
                })

            })
        }


    }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
        <div className="text-2xl font-semibold">Увійти</div>


        {/* Email input field*/}
        <TextInput
            value={data.email}
            name="email"
            onChange={handleChange}
            withAsterisk leftSectionPointerEvents="none"
            leftSection={<IconAt />}
            error={formError.email}
            label="Email"
            placeholder="Напишіть Вашу email"
            size="lg"
        />

        {/* Password input field */}
        <PasswordInput
            value={data.password}
            name="password"
            onChange={handleChange}
            leftSection={<IconLock />}
            error={formError.password}
            label="Пароль"
            withAsterisk
            placeholder="Введіть свій пароль"
            size="lg"
        />

        <Button onClick={handleSubmit} color="purpleHeart.4" size="lg" variant="filled">Увійти</Button>
        <div className="text-lg mx-auto">Немає аккаунту? <span onClick={() => { navigate("/signup"); setFormError(form); setData(form) }} className="text-purple-heart-400 hover:underline cursor-pointer">Зареєструватися</span></div>
    </div>
}

export default Login