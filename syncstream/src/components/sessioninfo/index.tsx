import "./sessioninfo.css";

const SessionInfo = () => {
    return <div className="session_info">
        <div className="session_info_text">
            <span className="session_info_text_title">Super Duper Long Title</span>
            <span className="session_info_text_subtitle">Super Duper Long Subtitle</span>
        </div>
        <div className="session_info_icons">
            <span className="material-symbols-outlined">
                groups
            </span>
            <span className="session_info_icons_participants">XX</span>
        </div>
    </div>;
}

export default SessionInfo;