import { IconBriefcase, IconMapPin, IconSchool, IconSearch } from "@tabler/icons-react";

const dropdownData = [
    {
        title: "Назва посади",
        icon: IconSearch,
        options: ["Business Analytics", "Content Writing", "Data Science",
            "Design", "Digital Marketing", "Human Resourses", "Web Development"]
    },

    {
        title: "Місце роботи",
        icon: IconMapPin,
        options: ["Дистанційно", "Вінниця", "Львів",
            "Житомир", "Івано-Франківськ", "Київ",
            "Хмельницький", "Черкаси", "Миколаїв"]
    },

    {
        title: "Зайнятість",
        icon: IconBriefcase,
        options: ["Повна", "Неповна", "За контрактом",
            "Фріланс", "Стажування/Інтернатура"]
    },

    {
        title: "Освіта",
        icon: IconSchool,
        options: ["Необов'язково", "Вища", "Передвища фахова", "Онлайн/офлайн курси"]
    }
]

const jobList = [
    {
        jobTitle: "Контент-райтер (без досвіду)",
        company: "Amazon",
        applicants: 18,
        jobType: "Повна",
        location: "Київ",
        salary: "32 000 грн",
        postedDaysAgo: 4,
        education: "Онлайн/офлайн курси",
        description: "Amazon шукає контент-райтера-початківця для написання блогів та описів товарів. Досвід не обов’язковий — головне вміння писати українською."
    },
    {
        jobTitle: "Інтерн з веброзробки (без досвіду)",
        company: "Google",
        applicants: 14,
        jobType: "Стажування/Інтернатура",
        location: "Львів",
        salary: "17 000 грн",
        postedDaysAgo: 1,
        education: "Онлайн/офлайн курси",
        description: "Google відкриває стажування для новачків у веброзробці. Навіть якщо ти ще студент — подавайся!"
    },
    {
        jobTitle: "UI/UX дизайнер-початківець",
        company: "Microsoft",
        applicants: 24,
        jobType: "Повна",
        location: "Харків",
        salary: "38 000 грн",
        postedDaysAgo: 5,
        education: "Передвища фахова",
        description: "Microsoft шукає новачка у дизайні інтерфейсів. Вітається базове знання Figma та бажання вчитися."
    },
    {
        jobTitle: "Асистент відділу кадрів (стартова позиція)",
        company: "IBM",
        applicants: 20,
        jobType: "Повна",
        location: "Одеса",
        salary: "28 000 грн",
        postedDaysAgo: 7,
        education: "Вища",
        description: "IBM відкриває позицію для тих, хто хоче розпочати кар'єру в HR. Досвід не потрібен — навчимо!"
    },
    {
        jobTitle: "Молодший аналітик даних (без досвіду)",
        company: "Oracle",
        applicants: 31,
        jobType: "Повна",
        location: "Івано-Франківськ",
        salary: "35 000 грн",
        postedDaysAgo: 6,
        education: "Вища",
        description: "Oracle запрошує новачків у команду аналітики. Вітається знання Excel та Google Таблиць."
    },
    {
        jobTitle: "SMM-менеджер-початківець",
        company: "PayPal",
        applicants: 19,
        jobType: "Повна",
        location: "Чернівці",
        salary: "27 000 грн",
        postedDaysAgo: 3,
        education: "Необов'язково",
        description: "PayPal шукає креативну людину для ведення соцмереж. Якщо вмієш придумувати пости — це для тебе!"
    },
    {
        jobTitle: "Графічний дизайнер (джуніор)",
        company: "Cisco",
        applicants: 26,
        jobType: "Повна",
        location: "Дніпро",
        salary: "34 000 грн",
        postedDaysAgo: 2,
        education: "Передвища фахова",
        description: "Cisco запрошує дизайнера-початківця до своєї команди. Базові навички Photoshop або Canva — плюс."
    },
    {
        jobTitle: "Інтерн з рекрутингу",
        company: "Amazon",
        applicants: 12,
        jobType: "Стажування/Інтернатура",
        location: "Полтава",
        salary: "14 000 грн",
        postedDaysAgo: 9,
        education: "Онлайн/офлайн курси",
        description: "Amazon проводить стажування для новачків у сфері рекрутингу. Вивчай, як шукати таланти по всьому світу!"
    },
    {
        jobTitle: "Асистент маркетолога (початковий рівень)",
        company: "NVIDIA",
        applicants: 33,
        jobType: "Повна",
        location: "Київ",
        salary: "31 000 грн",
        postedDaysAgo: 5,
        education: "Вища",
        description: "NVIDIA шукає помічника для роботи з маркетинговими кампаніями. Ідеально для новачка з інтересом до реклами."
    },
    {
        jobTitle: "Контент-менеджер (початковий рівень)",
        company: "Google",
        applicants: 21,
        jobType: "Повна",
        location: "Тернопіль",
        salary: "29 000 грн",
        postedDaysAgo: 4,
        education: "Необов'язково",
        description: "Google відкриває вакансію контент-менеджера для тих, хто тільки починає шлях у діджиталі. Пишеш грамотно? Ласкаво просимо!"
    }
];



export { dropdownData, jobList }