
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import './HomeStyle.css'
// import Computer from '@material-ui/icons/Computer'
import yvr from './images/yvr.png'
import Artifact1 from './images/Artifact1.png'
import Artifact2 from './images/Artifact2.png'
import Artifact3 from './images/Artifact3.png'
import Artifact4 from './images/Artifact4.png'
import Artifact5 from './images/Artifact5.png'
import Artifact6 from './images/Artifact6.png'
import Artifact7 from './images/Artifact7.png'




import { fontSize } from '@mui/system';
function Home() {



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
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Reflection Card'
                        dateClassName='date-style'
                        iconStyle={{ background: '#7A54AE', color: '#fff' }}
                    >
                        <h3 className='vertical-timeline-element-title-w'> Course Reflection</h3>
                       
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                         One of the most important things I learnt in this course was how to systematically approach
                         different types of problems and understand that there is more than one way to solve something. 
                         What I mean by this is that there are numerous theorems, lemmas and famous computational problems 
                         that we learnt about in this course and in the beginning many seemed unapproachable. Even now I am not 
                         an extreme expert in solving these and being able to get 100% correct answers however I now have the tools and a better
                         understanding of the methodology to be able to explore computationally complex problems. 
                         <br></br>
                         In regards to creating artifacts, I take inspiration from a number of different things. In addition
                         to being inspired from lectures, I take inspiration from pop culture, main stream media, YouTube etc. 
                         I also think about programming libraries that I have always wanted to try but never got a chance or had 
                         the motivation before and think about the interesting applications of the topics we learn in class. Putting all this 
                         together allows me to create artifacts that I am proud of. 
                         <br></br>
                        
                        </span>
                        </p>
                        <br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element-w'
                        date='Reflection Card 2'
                        dateClassName='date-style'
                        iconStyle={{ background: '#7A54AE', color: '#fff' }}
                    >
                        <h3 className='vertical-timeline-element-title-w'> Course Reflection Continued</h3>
                       
                        <p>  <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                         The artifact that I am most proud of is Artifact #2. I have always wanted to create a Manim animation
                         and learn how to visualise Mathematics. This portfolio project allowed me to do that. I also learnt a number of things
                         regarding computer graphics and have a better understanding of the Simplex Method. 
                         <br/>
                         I really enjoyed going from a total beginner to becoming more well versed in a number of different 
                         Python libraries such as NetworkX, Manim, NumPy, Pandas, Matplotlib and Pulp. 

                         If I were to give other students advice regarding creating their own portfolio, it would be to really try to 
                         take inspiration from anything and everything around you. Your course schedule, different buildings in UBC,
                        Instagram, your favourite movie etc. This and ensure that you familiarize yourself with the documentation of different libraries, it 
                        may be time consuming in the beginning but it will save yo a lot of time in the future. 
                        </span>
                        </p>
                        <br />
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Home