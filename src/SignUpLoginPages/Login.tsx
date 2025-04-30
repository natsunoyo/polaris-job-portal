import { TextInput, PasswordInput, Button } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const Login = () => {
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-5">
        <div className="text-2xl font-semibold">Увійти</div>


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

        <Button color="purpleHeart.4" size="lg" variant="filled">Увійти</Button>
        <div className="text-lg mx-auto">Немає аккаунту? <Link to="/signup" className="text-purple-heart-400 hover:underline">Зареєструватися</Link></div>
    </div>
}

export default Login