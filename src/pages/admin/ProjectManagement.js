import { getAll, remove } from "../../api/project";
import Header from "../../components/header";
import { useEffect, useState } from "../../lib";

const ProjectManagementPage = () => {
 const [projects, setProject] = useState([]);
  // [] -> [{},{}...]:1

  useEffect(() => {
    //3
     // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setProject(data))

        // axios.get(`http://localhost:3000/projectList`)
        //     .then(({ data }) => setProject(data))

        // axios.get(`http://localhost:3000/users`)
        //     .then(({ data }) => setProject(data))
      getAll().then(({data}) => setProject(data));
  }, []); //[]-dkien
  // console.log(projects);
  useEffect(() => {
    const btnList = document.querySelectorAll(".btn-remove");
    for (let btn of btnList) {
      const id = btn.dataset.id;
      btn.addEventListener('click', () => {
        // fetch(`http://localhost:3000/projectList/${id}`, {
        //   method: 'DELETE',
        // }).then(() => {
        //   const newProjectList = projects.filter((project) => {
        //     return (project.id != id);
        //   })
        //   setProject(newProjectList);
        // })
          remove(id).then(() => {
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
         })
      })
    }
  })

  //2
  return `
    ${Header()}
    <div class="container text-center">    
    <h1 class="mb-3">Management Page</h1>
        <table class="table">
        <thead>
            <tr>
            <th>Id</th>
            <th>Project Title</th>
            <th>Project Description</th>
            <th>Project Image</th>
            <th>Project Url</th>
            <th>Project Repository</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${projects.map((project, index) => {
                return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.title}</td>
                        <td>${project.description}</td>
                        <td><img src="${project.image}"></td>
                        <td>${project.url}</td>
                        <td>${project.repository}</td>
                        <td>
                            <button class=" btn-remove btn btn-danger" data-id="${
                              project.id
                            }">Delete</button>
<a href="/admin/projects/update/${project.id}"><button class="btn btn-warning">Update</button>
</a>                        </td>
                    </tr>
                `;
              })
              .join("")}
        </tbody>
        </table>
        </div>
    `;
};
export default ProjectManagementPage;
