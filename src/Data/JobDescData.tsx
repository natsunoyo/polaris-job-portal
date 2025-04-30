import { IconBriefcase, IconMapPin, IconPremiumRights, IconRecharging } from '@tabler/icons-react'

const card = [
  { name: "Місце роботи", icon: IconMapPin, value: "Вінниця" },
  { name: "Освіта", icon: IconBriefcase, value: "Необов'язково" },
  { name: "Зарплата", icon: IconPremiumRights, value: "20000 грн" },
  { name: "Зайнятість", icon: IconRecharging, value: "Повна" },
];

const skills = ['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL'];

const desc = `<h4>About The Job</h4>
<p>At Enaga-dango Corp., we are a passionate, fun-loving, and fast-growing team that believes in helping each other grow. 
Whether you are an experienced developer or just starting your journey, we welcome individuals who are eager to learn, experiment, and improve.</p>

<p>We are looking for enthusiastic programmers who love solving real-world technical challenges, are excited about working with new technologies, 
and are ready to collaborate with a team that values creativity and innovation. 
If you have the right attitude, a willingness to learn, and a passion for coding — even if you don't have years of experience — we would love to hear from you!</p>

<h4>Requirements</h4>
<ul>
  <li>Basic understanding of programming concepts and logic.</li>
  <li>Basic knowledge of at least one programming language (e.g., JavaScript, Python, Java, etc.).</li>
  <li>Familiarity with web development fundamentals (HTML, CSS, JavaScript) is a plus.</li>
  <li>Strong willingness to learn and adapt to new technologies.</li>
  <li>Problem-solving attitude and good communication skills.</li>
</ul>

<p>Join us to enhance your skills, work on exciting projects, and become a part of a supportive community that encourages continuous learning and growth.</p>`;

export { card, skills, desc };