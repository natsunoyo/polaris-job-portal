import { aboutCompanyData } from "../Data/AboutCompanyData"

const AboutCompany = () => {
    const company: { [key: string]: any } = aboutCompanyData
    return <div className="flex flex-col gap-5">
        {
            Object.keys(company).map((key, index) => key != 'Назва' && <div key={index}>
                <div className="text-xl mb-3 font-semibold">{key}</div>
                {key != "Вебсайт" &&
                    <div className="text-md text-silver-sand-400 text-justify">
                        {key != "Галузі" ? company[key] : company[key].map((item: string, index: number) => <span key={index}> &bull; {item} <br /></span>)}
                    </div>}
                {key == "Вебсайт" && <a href={company[key]} target="_blank" className="text-md text-purple-heart-400 text-justify">{company[key]}</a>}
            </div>)
        }
    </div>
}

export default AboutCompany