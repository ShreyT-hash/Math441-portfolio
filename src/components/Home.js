
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import './HomeStyle.css'
// import Computer from '@material-ui/icons/Computer'
import { Button } from '@material-ui/core'
import yvr from './images/yvr.png'
import { fontSize } from '@mui/system';
function Home() {
    return (
        <div>
            <div className='timeline-style'>
                <div>
                    <h1 className='header'>Math 441 Learning Portfolio</h1>
                </div>

                <VerticalTimeline lineColor='white'>

                    {/* FIRST ELEMENT */}
                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #1'
                        dateClassName='date-style'
                        iconStyle={{ background: '#1AB623'}}
                    >

                        <h3 className='vertical-timeline-element-title-w'> What is Manim?</h3>
                       
                        <img src={yvr} className='portfolio-scs' />
                        <p>
                            <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                                Worked with AWS engineers to co-design, deploy and document an open source, IoT based, web platform
                                for three health foundations that support individuals with Autism Spectrum Disorder.
                            </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' href='https://github.com/UBC-CIC/health-platform'>View Source</Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #2'
                        dateClassName='date-style'
                        iconStyle={{ background: '#FF8919', color: '#fff' }}

                    >
                        <h3 className='vertical-timeline-element-title-w'> Iterating over the convex polytope using Manim</h3>
                        <img src={yvr} className='portfolio-scs' />
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                            Worked with AWS engineers to co-design, deploy and document an open source, IoT based, web platform
                            for three health foundations that support individuals with Autism Spectrum Disorder.
                        </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' href='https://github.com/UBC-CIC/health-platform'>View Source</Button>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Home