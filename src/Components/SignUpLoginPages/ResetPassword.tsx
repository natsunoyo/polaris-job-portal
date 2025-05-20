import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { changePassword, sendOTP, verifyOTP } from "../../Services/UserService"
import { signUpValidation } from "../../Services/FormValidation"
import { errorNotification, successNotification } from "../../Services/NotificationService"
import { useInterval } from "@mantine/hooks"

const ResetPassword = (props: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [otpSent, setOtpSent] = useState(false)
    const [otpSending, setOtpSending] = useState(false)
    const [verified, setVerified] = useState(false)
    const [resendLoader, setResendLoader] = useState(false)
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {
        if (seconds === 0) {
            setResendLoader(false);
            setSeconds(60);
            interval.stop();
        } else setSeconds((s) => s - 1)
    }, 1000);

    const handleSendOTP = () => {
        setOtpSending(true);
        sendOTP(email).then(() => {
            // console.log(response);
            successNotification("Код надіслано успішно", "Якщо листа немає, первірте папку \"Спам\".")
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start();
        }).catch((err) => {
            console.log(err);
            setOtpSending(false);
            errorNotification("Код не було надіслано", err.response.data.errorMessage);
        })
    }

    const handleVerifyOTP = (otp: string) => {
        verifyOTP(email, otp).then((response) => {
            console.log(response);
            successNotification("Код підтверджено", "Введіть новий пароль.")
            setVerified(true);
        }).catch((err) => {
            console.log(err);
            errorNotification("Код не підтверджено", err.response.data.errorMessage)
        })

    }

    const handleResetPassword = () => {
        changePassword(email, password).then((response) => {
            console.log(response);
            successNotification("Пароль успішно змінено", "Увійдіть в систему з новим паролем.");
            props.close();

        }).catch((err) => {
            console.log(err);
            errorNotification("Не вдалось змінити пароль", err.response.data.errorMessage)
        })
    }

    const resendOTP = () => {
        if (resendLoader) return;
        handleSendOTP();
    }

    const changeEmail = () => {
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }

    return <>
        <Modal opened={props.opened} onClose={props.close} title="Відновити пароль">
            <div className="flex flex-col gap-6">
                <TextInput
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    withAsterisk leftSectionPointerEvents="none"
                    leftSection={<IconAt />}
                    rightSection={<Button loading={otpSending && !otpSent} className="mr-1" onClick={handleSendOTP} color="purpleHeart.4" size="md"
                        variant="filled" disabled={email === "" || otpSent}>Увійти</Button>}
                    rightSectionWidth="xl"
                    label="Email"
                    placeholder="Напишіть Вашу email"
                    size="lg"
                />
                {otpSent && <PinInput onComplete={handleVerifyOTP} length={6} className="mx-auto" size="md" gap="lg" type="number" />}
                {otpSent && !verified && <div className="flex gap-2">
                    <Button fullWidth loading={otpSending} onClick={resendOTP} color="purpleHeart.4"
                        variant="light">{resendLoader ? seconds : "Надіслати код ще раз"}</Button>
                    <Button fullWidth onClick={changeEmail} color="purpleHeart.4"
                        variant="filled" >Змінити email</Button>
                </div>
                }
                {verified && <PasswordInput
                    value={password}
                    name="password"
                    onChange={(e) => { setPassword(e.target.value); setPasswordError(signUpValidation("password", e.target.value)) }}
                    leftSection={<IconLock />}
                    error={passwordError}
                    label="Пароль"
                    withAsterisk
                    placeholder="Введіть свій пароль"
                    size="lg"
                />}
                {verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Змінити пароль</Button>}
            </div>
        </Modal>
    </>
}
export default ResetPassword