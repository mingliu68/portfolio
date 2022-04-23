import React from "react";



const ModalServiceNowActive = (props) => {
    const { project, index } = { ...props }

    return (
        <div>
            This is active content {project.name} {index}
        </div>
    )
}

export default ModalServiceNowActive;