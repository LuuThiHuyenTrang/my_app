import { menuList } from "../dataFake";

const Header = () => {
  return `
        <header>
            <nav>
                <ul>
                ${menuList
                  .map(function (menu) {
                    return `
            <li><a href="${menu.path}">${menu.name}</a></li>
             `;
                  })
                  .join("")}
                    
                </ul>
            </nav>
            <img src="https://picsum.photos/1200/100"/>
        </header>
    `;
};

export default Header;
