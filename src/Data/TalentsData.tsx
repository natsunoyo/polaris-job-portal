import { IconBriefcase, IconMapPin, IconSearch } from "@tabler/icons-react"

const searchFields = [
    {
        title: "Назва посади",
        icon: IconSearch,
        options: ["Business Analyst", "Content Writer", "Data Scienist",
            "Designer", "Marketing Specialist",
            "HR Specialist", "Developer", "Customer Support"]
    },

    {
        title: "Місце проживання",
        icon: IconMapPin,
        options: ["Вінниця", "Львів",
            "Житомир", "Івано-Франківськ", "Київ",
            "Хмельницький", "Черкаси", "Миколаїв"]
    },

    {
        title: "Навички",
        icon: IconBriefcase,
        options: ["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Python",
            "Java", "Ruby", "PHP", "SQL", "MongoDB", "PostgreSQL", "Git",
            "API Development", "Testing and Debugging", "Agile Methodologies",
            "DevOps", "AWS", "Azure", "Google Cloud", "SEO"]
    },
]

const talentsData = [
    {
        name: "Олена Ковальчук",
        role: "Business Analyst",
        city: "Київ",
        salary: 30000,
        techInterests: ["SQL", "Agile Methodologies", "Google Cloud"],
        about: "Цікавлюсь аналітикою та бізнес-процесами. Шукаю можливість розпочати кар'єру бізнес-аналітика в команді, яка готова ділитись досвідом.",
        image: "TalentAvatar1"
    },
    {
        name: "Максим Романенко",
        role: "Content Writer",
        city: "Львів",
        salary: 20000,
        techInterests: ["HTML", "Git", "SEO"],
        about: "Пишу статті та блоги на технічні теми. Хочу розвиватися в напрямку створення корисного контенту для ІТ-проєктів.",
        image: "TalentAvatar3"
    },
    {
        name: "Ірина Демчук",
        role: "Data Scientist",
        city: "Івано-Франківськ",
        salary: 35000,
        techInterests: ["Python", "SQL", "TensorFlow"],
        about: "Цікавлюсь машинним навчанням та обробкою даних. Активно навчаюсь і хочу знайти перше стажування або роботу в data-напрямку.",
        image: "TalentAvatar2"
    },
    {
        name: "Андрій Шевчук",
        role: "Designer",
        city: "Житомир",
        salary: 25000,
        techInterests: ["Figma", "HTML", "CSS"],
        about: "Маю інтерес до дизайну інтерфейсів і вивчаю інструменти для створення сучасних веб-рішень. Шукаю можливість працювати в команді дизайнерів.",
        image: "TalentAvatar4"
    },
    {
        name: "Наталія Литвин",
        role: "Marketing Specialist",
        city: "Черкаси",
        salary: 15000,
        techInterests: ["Google Analytics", "SMM", "Email Marketing"],
        about: "Цікавлюсь діджитал-маркетингом та просуванням брендів онлайн. Хочу застосовувати свої знання на практиці та здобувати нові навички.",
        image: "TalentAvatar5"
    },
    {
        name: "Олег Білий",
        role: "HR Specialist",
        city: "Миколаїв",
        salary: 33000,
        techInterests: ["HR Tech", "Google Sheets", "CRM-системи"],
        about: "Цікавлюсь підбором персоналу та сучасними інструментами управління командою. Прагну приєднатися до HR-відділу в динамічній компанії.",
        image: "TalentAvatar6"
    },
    {
        name: "Тетяна Вернигора",
        role: "Developer",
        city: "Хмельницький",
        salary: 40000,
        techInterests: ["JavaScript", "React", "Git"],
        about: "Вивчаю веброзробку та хочу розпочати кар'єру фронтенд-розробниці. Готова працювати над реальними проєктами та швидко навчатись.",
        image: "TalentAvatar1"
    },
    {
        name: "Руслан Гаврилюк",
        role: "Customer Support",
        city: "Вінниця",
        salary: 20000,
        techInterests: ["Zendesk", "LiveChat", "Helpdesk Tools"],
        about: "Мені подобається допомагати людям. Шукаю роботу в технічній підтримці, де зможу навчатися новому та вирішувати задачі користувачів.",
        image: "TalentAvatar3"
    },
    {
        name: "Марія Зінченко",
        role: "Developer",
        city: "Київ",
        salary: 30000,
        techInterests: ["Node.js", "MongoDB", "PostgreSQL"],
        about: "Цікавлюсь бекенд-розробкою. Прагну долучитися до команди розробників та розвиватися в напрямку створення серверної логіки.",
        image: "TalentAvatar2"
    },
    {
        name: "Дмитро Остапчук",
        role: "Data Scientist",
        city: "Львів",
        salary: 35000,
        techInterests: ["Python", "Pandas", "Machine Learning"],
        about: "Захоплююсь аналізом даних і автоматизацією рішень. Шукаю можливість працювати над реальними задачами в сфері data science.",
        image: "TalentAvatar4"
    }
];

const profileData = {
    name: "Олена Ковальчук",
    role: "Trainee Software Engineer",
    city: "Київ",
    salary: 30000,
    techInterests: ["SQL", "Agile Methodologies", "Google Cloud"],
    about: "Цікавлюсь аналітикою та бізнес-процесами. Шукаю можливість розпочати кар'єру бізнес-аналітика в команді, яка готова ділитись досвідом.",
    image: "TalentAvatar1",
    education: [
        {
            title: "VNTU",
            speciality: "Computerni nauky",
            startDate: "Sep 2022",
            endDate: "Jun 2026",
            degree: "Bachelor",
        },

        {
            title: "VNTU",
            speciality: "Computerna inzheneria",
            startDate: "Sep 2026",
            endDate: "Jun 2028",
            degree: "Master",
        }
    ],
    courses: [
        {
            title: "Kурс Fullstack-розробник",
            company: "MateAcademy",
            startDate: "Jun 2020",
            endDate: "Sep 2020",

        },

        {
            title: "Kурс Backend-розробник",
            company: "GoIT",
            startDate: "Jan 2023",
            endDate: "May 2023",

        }
    ]
}


export { searchFields, talentsData, profileData }