// import Navigo from 'navigo'
import projectListPage from "./pages/project";
import { Home } from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/NotFoundProject";
import ProjectDetailPage from "./pages/ProjectDetail";
import { router, render } from "./lib";
import ProjectManagementPage from "./pages/admin/ProjectManagement";
import AddProject from "./pages/admin/AddProject";
import UpdateProject from "./pages/admin/UpdateProject";

const app = document.querySelector("#app"); //tim ptu html co id la app

// const router = new Navigo('/')//khoi tao router tu dtuong navigo
// const render = (content, container) => {
//     return container.innerHTML = content()
// }
router.on("/", () => {
  //sử dụng phương thức on để khai báo đường dẫn đến từng page
  return render(Home, app);
});
router.on("/about", () => {
  return render(AboutPage, app);
});
router.on("/project", () => {
  return (app.innerHTML = projectListPage());
});

router.notFound(() => {
  return render(NotFoundPage, app);
});
router.on("/project/:id", ({ data }) => {
  // console.log(data);id:1000
  return render(() => {
    return ProjectDetailPage(data);
  }, app); //ProjectDetailPage(())
});
//Admin
router.on("/admin/projects", () => {
  return render(ProjectManagementPage, app);
});
router.on("/admin/projects/add", () => {
  return render(AddProject, app);
});
router.on("/admin/projects/update/:id", ({data}) => {
  return render(()=>{
    return UpdateProject(data);
  },app);
});


router.resolve();
//sd pthuc resolve de thuc thi
