import "./content.css";
import SessionEntry from "../sessionentry";

const Content = () => {
    return <div id="content">
        {[...Array(20)].map(() =>
            <SessionEntry />
        )}
        <span id="more_sessions" className="material-symbols-outlined">
            add_circle
        </span>
    </div>
}

export default Content;