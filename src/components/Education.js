import React from "react"
import { ReactComponent as WorkIcon } from "../College.svg"
import { ReactComponent as SchoolIcon } from "../School.svg"
import { ReactComponent as Job } from "../Job.svg"
import timelineElements from "./timelineElements.js"
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component"


function Education() {
    let workIconStyles = { background: "#06D6A0" }
    let schoolIconStyles = { background: "#f9c74f" }
    let jobIconStyles = { background: "linear-gradient(90deg, rgba(0,173,198,1) 0%, rgba(0,212,255,0.8715861344537815) 100%)" }
    return (
        <div>
            <h1 className="title">Education</h1>
            <VerticalTimeline>
                {timelineElements.map(element => {
                    let isWorkIcon = element.icon

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon === "work" ? workIconStyles : isWorkIcon === "job" ? jobIconStyles : schoolIconStyles}
                            icon={isWorkIcon === "work" ? <WorkIcon /> : isWorkIcon === "job" ? <Job /> : <SchoolIcon />}
                        >
                            <h4 className="vertical-timeline-element-title">
                                {element.title}
                            </h4>
                            <p className="vertical-timeline-element-subtitle fw-bold">
                                {element.subTitle}
                            </p>
                            <p id="description" className="text-muted lh-1" style={{marginTop : "0.375rem"}}>
                                {element.location}
                            </p>
                            <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Education
