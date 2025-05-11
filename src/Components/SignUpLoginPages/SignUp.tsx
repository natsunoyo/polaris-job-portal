import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, TextInput } from "@mantine/core"
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../Services/UserService";
import { signUpValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
}

const SignUp = () => {
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const handleChange = (event: any) => {

        if (typeof (event) == "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: signUpValidation(name, value) })
        if (name === "password" && data.confirmPassword !== "") {
            let err = "";
            if (data.confirmPassword !== value) err = "Паролі не збігаються.";
            setFormError({ ...formError, [name]: signUpValidation(name, value), confirmPassword: err });

        }
        if (name === "confirmPassword") {
            if (data.password !== value) setFormError({ ...formError, [name]: "Паролі не збігаються." });
            else setFormError({ ...formError, confirmPassword: "" });
        }

    }
    const handleSubmit = () => {

        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = signUpValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "Паролі не збігаються.";
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);

        if (valid === true) {
            setLoading(true);
            registerUser(data).then((response) => {
                console.log(response);
                setData(form);
                notifications.show({
                    title: "Реєстрація успішна!",
                    message: "Перенаправлення сторінку входу на портал...",
                    withCloseButton: true,
                    icon: <IconCheck size={20} />,
                    color: "teal"
                })
                setTimeout(() => {
                    setLoading(false);
                    navigate("/login");
                }, 1000)

            }).catch((error) => {
                setLoading(false);
                console.log(error);
                notifications.show({
                    title: "Помилка при реєстрації",
                    message: error.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX size={20} />,
                    color: "red",
                })

            })
        }
    }
    return <>
        <LoadingOverlay
            visible={loading}
            zIndex={1000}
            className="translate-x-1/2"
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'purpleHeart.4', type: 'bars' }}
        />
        <div className="w-1/2 px-20 flex flex-col justify-center gap-2">
            <div className="text-2xl font-semibold">Реєстрація</div>

            {/* Full name input field*/}
            <TextInput
                value={data.name}
                name="name"
                onChange={handleChange}
                withAsterisk
                error={formError.name}
                label="ПІБ"
                placeholder="Напишіть повні ПІБ"
                size="md" />

            {/* Email input field*/}
            <TextInput
                value={data.email}
                name="email"
                onChange={handleChange}
                withAsterisk leftSectionPointerEvents="none"
                error={formError.email}
                leftSection={<IconAt />}
                label="Email"
                placeholder="Напишіть Вашу email"
                size="md"
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
                size="md"
            />

            {/* Password confirmation input field */}
            <PasswordInput
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                leftSection={<IconLock />}
                error={formError.confirmPassword}
                label="Підтвердіть пароль"
                withAsterisk
                placeholder="Введіть свій пароль ще раз"
                size="md"
            />

            {/* Account types */}
            <Radio.Group
                value={data.accountType}
                onChange={handleChange}
                size="md"
                label="Хто Ви?"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio className="py-4 px-6 border border-woodsmoke-800 rounded-lg hover:bg-woodsmoke-900/50 has-[:checked]:border-purple-heart-300  has-[:checked]:bg-purple-heart-700/50 transition-all ease-in-out" color="purpleHeart.4" value="APPLICANT" label="Шукач" />
                    <Radio className="py-4 px-6 border border-woodsmoke-800 rounded-lg hover:bg-woodsmoke-900/50 has-[:checked]:border-purple-heart-300  has-[:checked]:bg-purple-heart-700/50 transition-all ease-in-out" color="purpleHeart.4" value="EMPLOYER" label="Роботодавець" />
                </Group>
            </Radio.Group>

            {/* You agree to sell your soul to our company lol */}
            <Checkbox
                color="purpleHeart.4" size="md" label={<>Я погоджуюся з {' '} <Anchor c="purpleHeart.4" size="lg">політикою конфіденційності</Anchor> та <Anchor c="purpleHeart.4" size="lg">загальними правилами платформи</Anchor></>}
            />

            <Button loading={loading} onClick={handleSubmit} color="purpleHeart.4" size="md" variant="filled">Зареєструватися</Button>
            <div className="text-lg mx-auto">Маєте аккаунт? <span onClick={() => { navigate("/login"); setFormError(form); setData(form) }} className="text-purple-heart-400 hover:underline cursor-pointer">Увійти</span></div>
        </div>
    </>
}

export default SignUp