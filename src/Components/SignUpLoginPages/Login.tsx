import { TextInput, PasswordInput, Button, LoadingOverlay } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../Services/UserService"
import { loginValidation } from "../../Services/FormValidation"
import { useDisclosure } from "@mantine/hooks"
import ResetPassword from "./ResetPassword"
import { useDispatch } from "react-redux"
import { errorNotification, successNotification } from "../../Services/NotificationService"
import { setUser } from "../../Slices/UserSlice"
const form = {
    email: "",
    password: "",
}

const Login = () => {
    const dispatch = useDispatch();
    const [opened, { open, close }] = useDisclosure(false);
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
            setLoading(true);
            loginUser(data).then((response) => {
                // console.log(response);
                setData(form);
                successNotification("Ви увійшли в систему", "Перенаправлення головну сторінку...")
                setTimeout(() => {
                    setLoading(false);
                    dispatch(setUser(response));
                    navigate("/");
                }, 1000)
            }).catch((error) => {
                setLoading(false);
                console.log(error);
                errorNotification("Помилка при вході в систему", error.response.data.errorMessage)

            })
        }


    }

    return <>

        <LoadingOverlay
            visible={loading}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'purpleHeart.4', type: 'bars' }}
        />

        <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
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

            <Button loading={loading} onClick={handleSubmit} color="purpleHeart.4" size="lg" variant="filled">Увійти</Button>
            <div className="text-lg mx-auto">Немає аккаунту? <span onClick={() => { navigate("/signup"); setFormError(form); setData(form) }} className="text-purple-heart-400 hover:underline cursor-pointer">Зареєструватися</span></div>
            <div onClick={open} className="text-purple-heart-400 hover:underline cursor-pointer text-center">Забули пароль?</div>
        </div>
        <ResetPassword opened={opened} close={close} />
    </>
}

export default Login