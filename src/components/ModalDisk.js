import React from "react";
import { skillset } from '../data'

const ModalDisk = () => {

    const getSkillDisplay = (item, index) => {
        const bottomStyle =
            index === skillset.length - 1
                ? { marginBottom: 10 }
                : null

        return (
            <div key={index} style={bottomStyle}>
                {
                    index === 0
                        ? <h3 style={{ marginTop: 10, marginBottom: 10 }}>{item.cat}</h3>
                        : <h3 style={{ marginBottom: 10 }}>{item.cat}</h3>
                }
                {
                    item.skills.map((skill, index) => {
                        if (index !== item.skills.length - 1) {
                            return (
                                <span key={index}>{skill}<span className="diamond"> &diams; </span></span>
                            )
                        } else {
                            return (
                                <span key={index}>{skill}</span>
                            )
                        }
                    })
                }
                {
                    index !== skillset.length - 1
                        ? <div style={{ width: "80%", height: 0, borderBottomStyle: "solid", borderBottomWidth: 1, borderBottomColor: "#cccccc", marginTop: 15, marginLeft: "10%", marginRight: "10%" }} />
                        : null
                }
            </div>
        )
    }

    return (
        <div id="disk" className="modal fade" role="dialog">
            <div className="modal-frame" />
            <div className="modal-header">
                <h4 className="modal-title">TECH SKILLS</h4>
                <button type="button" className="close modal-header-botton" data-dismiss="modal" />
            </div>
            <div className="modal-inner">
                <div style={{ lineHeight: 1.2 }}>
                    {
                        skillset.map((item, index) => {
                            return getSkillDisplay(item, index)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalDisk;