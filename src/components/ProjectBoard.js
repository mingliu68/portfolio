import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProjectDetail from './ProjectDetail';

const ProjectBoard = (props) => {
    const { active, setActive, project } = { ...props }
    const [close, setClose] = useState(false)

    const setClosingStyle = useCallback(() => {
        setClose(true);
        setTimeout(() => {
            setClose(false);
        }, 0)
    })

    return (
        <div className={active ? "projectBoard boardActive" : "projectBoard boardNotActive"} style={{ display: (close ? "none" : "block") }}  >
            {/* style={{
            position: "absolute",
            width: "calc(100% - 20px)",
            height: 540,
            backgroundColor: "white",
            transitionDuration: "0.5s",
            zIndex: 20,
            bottom: (active ? 10 : -580),
            transitionDelay: "0.1s",
            overflowY: "auto"

        
        onClick={() => setActive(0)} */}

            {/* <div
                style={{ justifyContent: "center", alignItems: "center", width: 35, height: 35, backgroundColor: "yellow", position: "absolute", right: 0, bottom: 100 }}
                onClick={() => setIsActive(false)}
            >
                <FontAwesomeIcon icon={faTimes} size="2x" />
            </div> */}
            <div style={{ zIndex: 1, backgroundColor: "white", width: 35, height: 35, borderRadius: "50%", position: "absolute", top: 10, right: 12, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "1px 1px 10px #ccc" }}>
                <FontAwesomeIcon icon={faTimes} size="1x" style={{ cursor: "pointer" }} onClick={() => { setActive(0); setClosingStyle() }} />
            </div>
            <ProjectDetail project={project} />



        </div>
    )
}

export default ProjectBoard;

// const styles = {
//     spanDiamond: {
//         marginLeft: 10,
//         marginRight: 10,
//         fontSize: 10,
//         animation: "none",
//     }
// }