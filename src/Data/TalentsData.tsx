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
        jobTitle: "Business Analyst",
        location: "Київ",
        salary: 30000,
        skills: ["SQL", "Agile Methodologies", "Google Cloud"],
        bio: "Цікавлюсь аналітикою та бізнес-процесами. Шукаю можливість розпочати кар'єру бізнес-аналітика в команді, яка готова ділитись досвідом.",
        image: "TalentAvatar1"
    },
    {
        name: "Максим Романенко",
        jobTitle: "Content Writer",
        location: "Львів",
        salary: 20000,
        skills: ["HTML", "Git", "SEO"],
        bio: "Пишу статті та блоги на технічні теми. Хочу розвиватися в напрямку створення корисного контенту для ІТ-проєктів.",
        image: "TalentAvatar3"
    },
    {
        name: "Ірина Демчук",
        jobTitle: "Data Scientist",
        location: "Івано-Франківськ",
        salary: 35000,
        skills: ["Python", "SQL", "TensorFlow"],
        bio: "Цікавлюсь машинним навчанням та обробкою даних. Активно навчаюсь і хочу знайти перше стажування або роботу в data-напрямку.",
        image: "TalentAvatar2"
    },
    {
        name: "Андрій Шевчук",
        jobTitle: "Designer",
        location: "Житомир",
        salary: 25000,
        skills: ["Figma", "HTML", "CSS"],
        bio: "Маю інтерес до дизайну інтерфейсів і вивчаю інструменти для створення сучасних веб-рішень. Шукаю можливість працювати в команді дизайнерів.",
        image: "TalentAvatar4"
    },
    {
        name: "Наталія Литвин",
        jobTitle: "Marketing Specialist",
        location: "Черкаси",
        salary: 15000,
        skills: ["Google Analytics", "SMM", "Email Marketing"],
        bio: "Цікавлюсь діджитал-маркетингом та просуванням брендів онлайн. Хочу застосовувати свої знання на практиці та здобувати нові навички.",
        image: "TalentAvatar5"
    },
    {
        name: "Олег Білий",
        jobTitle: "HR Specialist",
        location: "Миколаїв",
        salary: 33000,
        skills: ["HR Tech", "Google Sheets", "CRM-системи"],
        bio: "Цікавлюсь підбором персоналу та сучасними інструментами управління командою. Прагну приєднатися до HR-відділу в динамічній компанії.",
        image: "TalentAvatar6"
    },
    {
        name: "Тетяна Вернигора",
        jobTitle: "Developer",
        location: "Хмельницький",
        salary: 40000,
        skills: ["JavaScript", "React", "Git"],
        bio: "Вивчаю веброзробку та хочу розпочати кар'єру фронтенд-розробниці. Готова працювати над реальними проєктами та швидко навчатись.",
        image: "TalentAvatar1"
    },
    {
        name: "Руслан Гаврилюк",
        jobTitle: "Customer Support",
        location: "Вінниця",
        salary: 20000,
        skills: ["Zendesk", "LiveChat", "Helpdesk Tools"],
        bio: "Мені подобається допомагати людям. Шукаю роботу в технічній підтримці, де зможу навчатися новому та вирішувати задачі користувачів.",
        image: "TalentAvatar3"
    },
    {
        name: "Марія Зінченко",
        jobTitle: "Developer",
        location: "Київ",
        salary: 30000,
        skills: ["Node.js", "MongoDB", "PostgreSQL"],
        bio: "Цікавлюсь бекенд-розробкою. Прагну долучитися до команди розробників та розвиватися в напрямку створення серверної логіки.",
        image: "TalentAvatar2"
    },
    {
        name: "Дмитро Остапчук",
        jobTitle: "Data Scientist",
        location: "Львів",
        salary: 35000,
        skills: ["Python", "Pandas", "Machine Learning"],
        bio: "Захоплююсь аналізом даних і автоматизацією рішень. Шукаю можливість працювати над реальними задачами в сфері data science.",
        image: "TalentAvatar4"
    }
];

const profileData = {
    name: "Олена Ковальчук",
    jobTitle: "Trainee Software Engineer",
    location: "Київ",
    salary: 30000,
    skills: ["SQL", "Agile Methodologies", "Google Cloud"],
    bio: "Цікавлюсь аналітикою та бізнес-процесами. Шукаю можливість розпочати кар'єру бізнес-аналітика в команді, яка готова ділитись досвідом.",
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