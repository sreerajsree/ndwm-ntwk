import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

export default function Menu({ isMenuOpen }) {
  const menuVariants = {
    open: {
      display: "flex",
      transition: {
        staggerChildren: 0.07,
      },
    },
    closed: {
      display: "none",
      transition: {
        delay: 0.7,
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
  };

  const links = ["home", "brands", "advertise", "about"];

  return (
    <motion.nav
      className="nav"
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <div className="background">
        <ul>
          {links.map((link, i) => (
            <MenuItem link={link} key={i} />
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
