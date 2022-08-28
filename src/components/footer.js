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
         <Link to="https://docs.9bstolingymnasium.ml/">Политика конфедиальности</Link>{" "}
         <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
         <Link to="https://docs.9bstolingymnasium.ml/polzovatelskoe-soglashenie">Пользовательское соглашение </Link>{" "}
         <Link to="http://creativecommons.org/licenses/by-sa/4.0/"><img 
      //src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
      src={'/assets/88x31.png'}
      alt="Canvas Logo"
    /></Link>{" "}
      </p>
    </div>
  </footer>
)

export default Footer
