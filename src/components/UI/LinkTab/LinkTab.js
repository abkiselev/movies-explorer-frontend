import { Link } from "react-router-dom";
import './LinkTab.css'

function LinkTab({ to, size, text }) {
  return (
        <Link className={`linktab ${size && `linktab_${size}`}`} to={to}>{text}</Link>
  );
}

export default LinkTab;