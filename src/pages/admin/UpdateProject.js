import { router, useEffect, useState } from "../../lib";
import Header from "../../components/header";
import { update } from "../../api/project";

const UpdateProject = ({ id }) => {
  //log ra id
  const [project, setProject] = useState({});
  //khai bao bien project de luu tru data

  //call api de lay du lieu va gan vao bien project
  useEffect(() => {
    fetch(`http://localhost:3000/projectList/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  //them data
  useEffect(() => {
    const updateForm = document.querySelector("#update-form");
    // tìm tới form update và lắng nghe sự kiện submit

    updateForm.addEventListener("submit", (event) => {
      event.preventDefault(); //chan su kien reload trang
      //lay du lieu tu form
      const newData = {
        id: id,
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        image: document.querySelector("#image").value,
        url: document.querySelector("#url").value,
        repository: document.querySelector("#repository").value,
      };
      console.log();
      //goi pi de update data
      // fetch(`http://localhost:3000/projectList/${id}`, {
      //   method: "PUT",//pthuc cap nhat data
      //   headers: {
      //     "Content-Type": "application/json",//dinh dang du lieu gui
      //   },
      //   body: JSON.stringify(newData),//cd du lieu sang json
      // }).then(() => {
      //   router.navigate("/admin/projects");//sau khi up tcong thi qlai trang qly
      // });
      update(newData).then(() => {
        router.navigate("/admin/projects");
      });
    });
  });
  return /*html*/ `
      ${Header()}

  <div class="container">
  <h1>Update Project Page</h1>
   <form action="" id="update-form">
  <div class="mb-3">
    <label for="formFile" class="form-label" placeholder="Moi ban nhap title" >Moi ban nhap title</label>
    <input class="form-control" type="text" id="title" value="${project.title}">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban nhap noi dung">Moi ban nhap noi dung</label>
    <input class="form-control" type="text" id="description" value="${
      project.description
    }">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban chon anh">Moi ban chon anh</label>
    <input class="form-control" type="img" id="image" value="${project.image}">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban url">Moi ban nhap url</label>
    <input class="form-control" type="text" id="url" value="${project.url}">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label" placeholder="Moi ban nhap repository">Moi ban nhap repository</label>
    <input class="form-control" type="text" id="repository" value="${
      project.repository
    }">
  </div>

  <div class="mb-3">
    <button class=" btn btn-success" type="submit">Gui</button>
  </div>

</form>

</div>
  `;
};

export default UpdateProject;
