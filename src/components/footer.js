/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
      © Сайты 9Б Столинской государственной гимназии{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
         <Link to="https://www.9bstolingymnasium.ml/politika">Политика конфедиальности</Link>
         <img name = 'img' src = 'image1.jpg' />
      </p>
    </div>
  </footer>
)

export default Footer
