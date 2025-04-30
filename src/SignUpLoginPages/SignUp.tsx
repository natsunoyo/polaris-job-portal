import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const SignUp = () => {
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
        <div className="text-2xl font-semibold">Реєстрація</div>

        {/* Full name input field*/}
        <TextInput
            withAsterisk
            label="ПІБ"
            placeholder="Напишіть повні ПІБ"
            size="lg" />

        {/* Email input field*/}
        <TextInput
            withAsterisk leftSectionPointerEvents="none"
            leftSection={<IconAt />}
            label="Email"
            placeholder="Напишіть Вашу email"
            size="lg"
        />

        {/* Password input field */}
        <PasswordInput
            leftSection={<IconLock />}
            label="Пароль"
            withAsterisk
            placeholder="Введіть свій пароль"
            size="lg"
        />

        {/* Password confirmation input field */}
        <PasswordInput
            leftSection={<IconLock />}
            label="Підтвердіть пароль"
            withAsterisk
            placeholder="Введіть свій пароль ще раз"
            size="lg"
        />

        <Checkbox
            color="purpleHeart.4" size="lg" label={<>Я погоджуюся з {' '} <Anchor c="purpleHeart.4" size="lg">політикою конфіденційності</Anchor> та <Anchor c="purpleHeart.4" size="lg">загальними правилами платформи</Anchor></>}
        />

        <Button color="purpleHeart.4" size="lg" variant="filled">Зареєструватися</Button>
        <div className="text-lg mx-auto">Маєте аккаунт? <Link to="/login" className="text-purple-heart-400 hover:underline">Увійти</Link></div>
    </div>
}

export default SignUp