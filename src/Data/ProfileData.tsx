import { IconBriefcase, IconMapPin, IconSchool } from "@tabler/icons-react";

const fields = [
    {
        label: "Назва посади",
        placeholder: "Введіть назву посади",
        options: ["Business Analytics", "Content Writing", "Data Science",
            "Design", "Digital Marketing", "Human Resourses", "Web Development", "Software Engineer"],
        leftSection: <IconBriefcase />,
    },
    {
        label: "Освіта",
        options: ["Середня", "Передвища фахова", "Вища", "Онлайн/офлайн курси"],
        leftSection: <IconSchool />,
    },
    {
        label: "Місце роботи",
        placeholder: "Введіть місце роботи",
        options: ["Дистанційно", "Вінниця", "Львів",
            "Житомир", "Івано-Франківськ", "Київ",
            "Хмельницький", "Черкаси", "Миколаїв",
            "Чернівці", "Ужгород", "Одеса"],
        leftSection: <IconMapPin />,
    },
    {

        label: "Навички",
        options: ["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Python",
            "Java", "Ruby", "PHP", "SQL", "MongoDB", "PostgreSQL", "Git",
            "API Development", "Testing and Debugging", "Agile Methodologies",
            "DevOps", "AWS", "Azure", "Google Cloud", "SEO"],
        value: ["SQL", "Agile Methodologies", "Google Cloud"]
    },

    {
        label: "Рівень вищої освіти",
        options: ["Бакалавр", "Магістр", "Доктор філософії", "Доктор наук"],
        leftSection: <IconSchool />,
    },
];

export default fields;
