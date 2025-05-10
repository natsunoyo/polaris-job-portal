import { notifications } from "@mantine/notifications"
import { IconCheck, IconX } from "@tabler/icons-react"

const successNotification = (title: string, message: string) => {
    notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        icon: <IconCheck size={20} />,
        color: "teal"
    })
}

const errorNotification = (title: string, message: string) => {
    notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        icon: <IconX size={20} />,
        color: "red",
    })
}

export { successNotification, errorNotification }