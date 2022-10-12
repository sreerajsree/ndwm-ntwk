import { motion } from "framer-motion";
import Link from "next/link";

const menuItemVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export default function MenuItem({ link }) {
  if (link === "home") {
    return (
      <motion.li variants={menuItemVariants}>
        <Link href="/">
          <h2>
            <a>{link}</a>
          </h2>
        </Link>
      </motion.li>
    );
  } else {
    return (
      <motion.li variants={menuItemVariants}>
        <Link href={`/${link}`}>
          <h2>
            <a>{link}</a>
          </h2>
        </Link>
      </motion.li>
    );
  }
}
