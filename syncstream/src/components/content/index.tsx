import "./content.css";
import SessionEntry from "../sessionentry";

const Content = () => {
    return <div id="content">
        {[...Array(20)].map(() =>
            <SessionEntry />
        )}
    </div>
}

export default Content;