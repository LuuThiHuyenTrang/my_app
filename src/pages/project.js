import { Footer } from '../components/footer';
import Header from '../components/header';
import { projectList } from '../dataFake'


const projectListPage = () => {
    return `
        ${Header()}

        <main>
        <div>
            ${projectList.map(function (project) {
        return `
                <div>
                <a href="project/${project.id}"><h2>${project.title}</h2>
                </a>
                <p>${project.content}</p>
                </div>
            `
    }).join("")}
            </div> 
        </main>
        
        <footer>${Footer()}</footer>
    `
}

export default projectListPage