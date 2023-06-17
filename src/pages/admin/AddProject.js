import { router, useEffect } from "../../lib";
import Header from "../../components/header";
import { add } from "../../api/project";

const AddProject = () => {
  useEffect(() => {
    const addForm = document.querySelector("#add-form");
    addForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const newProject = {
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        image: document.querySelector("#image").value,
        url: document.querySelector("#url").value,
        repository: document.querySelector("#repository").value,
      };
      // console.log();
      //     fetch(`http://localhost:3000/projectList`,{
      //       method: "POST",
      //       headers:{
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify(newProject)

      //     }).then(()=>{
      //       router.navigate('/admin/projects')
      //     })
      add(newProject).then(() => {
        router.navigate("/admin/projects");
      });
    });
  });
  return /*html*/ `
      ${Header()}

  <div class="container">
  <h1>Add Project Page</h1>
   <form action="" id="add-form">
  <div class="mb-3">
    <label for="formFile" class="form-label" placeholder="Moi ban nhap title" >Moi ban nhap title</label>
    <input class="form-control" type="text" id="title">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban nhap noi dung">Moi ban nhap noi dung</label>
    <input class="form-control" type="text" id="description">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban chon anh">Moi ban chon anh</label>
    <input class="form-control" type="img" id="image">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban url">Moi ban nhap url</label>
    <input class="form-control" type="text" id="url">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban nhap repository">Moi ban nhap repository</label>
    <input class="form-control" type="text" id="repository">
  </div>

  <div class="mb-3">
    <button class=" btn btn-success" type="submit">Gui</button>
  </div>

</form>

</div>
  `;
};

export default AddProject;
