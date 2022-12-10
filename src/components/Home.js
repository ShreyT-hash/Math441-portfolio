
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import './HomeStyle.css'
// import Computer from '@material-ui/icons/Computer'
import { Button } from '@material-ui/core'
import yvr from './images/yvr.png'
import Artifact1 from './images/Artifact1.png'
import Artifact2 from './images/Artifact2.png'
import Artifact3 from './images/Artifact3.png'
import Artifact4 from './images/Artifact4.png'
import Artifact5 from './images/Artifact5.png'
import Artifact6 from './images/Artifact6.png'
import Artifact7 from './images/Artifact7.png'


import A1 from './Artifacts/441A1.zip'
import A2 from './Artifacts/441A2.zip'
import A3 from './Artifacts/441A3.zip'



import { fontSize } from '@mui/system';
function Home() {



    const handleDownload = (artifactNum) => {
    const link = document.createElement("a");
    let currfile = ''
    let currfileString = ''
    if (artifactNum === 'A1'){
        currfile = A1
        currfileString = '441A1.zip'
    }
    else if (artifactNum === 'A2'){
        currfile = A2
        currfileString = '441A2.zip'

    }
    else if (artifactNum === 'A3'){
        currfile = A3
        currfileString = '441A3.zip'
        
    }
    else if (artifactNum === 'A4'){
        // currfile = A4
        // currfileString = '441A4.zip'
    }
    else if (artifactNum === 'A5'){
        // currfile = A5
        // currfileString = '441A5.zip'
    }
    else if (artifactNum === 'A6'){
        // currfile = A6
        // currfileString = '441A6.zip'
    }
    else if (artifactNum === 'A7'){
        // currfile = A7
        // currfileString = '441A7.zip'
        
    }
    link.href = currfile
    link.setAttribute("download", currfileString)
    link.click();

    }
    return (
        <div>
            <div className='timeline-style'>
                <div>
                    <h1  className='header'>Shrey Thapar's Math 441 Learning Portfolio </h1> 
                    {/* <h5>By: Shrey Thapar</h5> */}
                </div>

                <VerticalTimeline lineColor='white'>

                    {/* FIRST ELEMENT */}
                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #1'
                        dateClassName='date-style'
                        iconStyle={{ background: '#1AB623'}}
                    >

                        <h3 className='vertical-timeline-element-title-w'> What is Manim?</h3>
                       
                        <img src={Artifact1} className='portfolio-scs' />
                        <p>
                            <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                               In this Artifact, we learn about Grant Sanderson's Mathematical Animation Engine known as Manim. 
                               We learn how to create a few animations utilizing this Python Graphics library. 
                            </span>
                        </p>
                        <br />
                        
                        <Button variant="outlined" color='secondary' fullWidth='true' onClick={() => handleDownload('A1')}>Download Artifact</Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #2'
                        dateClassName='date-style'
                        iconStyle={{ background: '#FF7F50'}}
                    >
                        <h3 className='vertical-timeline-element-title-w'> Iterating over the convex 
                        polytope using Manim</h3>
                        <img src={Artifact2} className='portfolio-scs' />
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                           In this Artifact, we capitalize on the knowledge gained about Manim from the previous Artifact to 
                           create a comprehensive animation showcasing part of the Simplex Method. 
                        </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' onClick={() => handleDownload('A2')}>Download Artifact</Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #3'
                        dateClassName='date-style'
                        iconStyle={{ background: '#40E0D0'}}
                    >
                        <h3 className='vertical-timeline-element-title-w'>Coming up with Optimal
                         Lower Bounds For A Classic Traveling Salesman Problem</h3>
                        <img src={Artifact3} className='portfolio-scs' /> 
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                            In this Artifact, we look at the Minimum Spanning Tree Heuristic and how to utilize it 
                            to come up with optimal lower bounds from every individual node in a Travelling Salesmen Problem. 
                        </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' onClick={() => handleDownload('A3')}>Download Artifact</Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #4'
                        dateClassName='date-style'
                        iconStyle={{ background: '#6495ED', color: '#fff' }}
                    >
                        <h3 className='vertical-timeline-element-title-w'> Using Game Theory and
                         Linear Programming to Solve 'Rock Paper Scissors Lizard Spock'</h3>
                        <img src={Artifact4} className='portfolio-scs' />
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                           In this Artifact, we use Game Theory and Linear Programming to 
                           find an Optimal Solution for the Game 'Rock Paper Scissors Lizard Spock' 
                           from the The Big Bang Theory. We also tweak the game a little at the end! 

                        </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' onClick={() => handleDownload('A4')}>Download Artifact</Button>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #5'
                        dateClassName='date-style'
                        iconStyle={{ background: '#9FE2BF', color: '#fff' }}
                    >
                        <h3 className='vertical-timeline-element-title-w'> 
                        Simulating 'Rock Paper Scirssors Lizard Spock' based on Optimal Strategies </h3>
                        <img src={Artifact5} className='portfolio-scs' />
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                           In this Artifact, we capitalize on the knowledge gained about the optimal strategies 
                           for playing these type of 0 sum games and simulate the game to see which player comes out on top. 
                        </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' onClick={() => handleDownload('A5')}>Download Artifact</Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #6'
                        dateClassName='date-style'
                        iconStyle={{ background: '#7535CB', color: '#fff' }}
                    >
                        <h3 className='vertical-timeline-element-title-w'> 
                        Two Variable Sensitivity Analysis </h3>
                        <img src={Artifact6} className='portfolio-scs' />
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                            In this Artifact, we use Excel's Solver to generate a two variable sensitvity analysis report. 
                            We then use Pulp and Python to come up with a sensitivity report of our own. 
                        </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' onClick={() => handleDownload('A6')}>Download Artifact</Button>
                    </VerticalTimelineElement>

                    {/* FINAL ELEMENT */}
                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Artifact #7'
                        dateClassName='date-style'
                        iconStyle={{ background: '#7A54AE', color: '#fff' }}
                    >
                        <h3 className='vertical-timeline-element-title-w'> Three Variable Sensitivity Analysis</h3>
                        <img src={Artifact7} className='portfolio-scs' />
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                          In this Artifact, we use dig in a little deeper into Pulp interpret its Sensitivity Analysis tools. 
                        </span>
                        </p>
                        <br />
                        <Button variant="outlined" color='secondary' fullWidth='true' onClick={() => handleDownload('A7')}>Download Artifact</Button>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Home