import React from 'react';
import Runbuddy from '../../assets/portfolio/Run-buddy.jpg';
import Refactor from '../../assets/portfolio/Refactor.jpg';
import Planner from '../../assets/portfolio/Planner.jpg';
import ReadMeGen from '../../assets/portfolio/ReadMeGen.jpg';
import Notes from '../../assets/portfolio/Notes.jpg';
import Social from '../../assets/portfolio/SocNet.jpg';

function Portfolio() {
    return(
        <section>
            <h1>Portfolio</h1>
            <div>
                <ul>
                    <li> 
                        <img src={Runbuddy} style={{ height: "300px" }}/> <a href='https://antonio-ram.github.io/run-buddy/'> Run-Buddy </a>
                    </li>

                    <li>
                        <img src={Refactor} style={{ height: "300px" }}/> <a href='https://antonio-ram.github.io/Challenge1/'> 1st code refactor </a>
                    </li>

                    <li>
                        <img src={Planner} style={{ height: "300px" }}/> <a href='https://antonio-ram.github.io/DayPlanning/'> Planner </a>
                    </li>

                    <li>
                        <img src={ReadMeGen} style={{ height: "300px" }}/> <a href='https://github.com/Antonio-Ram/ReadMePlease'> Read.ME Generator  </a>
                    </li>

                    <li>
                        <img src={Notes} style={{ height: "300px" }}/> <a href='https://github.com/Antonio-Ram/NoteTaker'> Note Taker </a>
                    </li>

                    <li>
                        <img src={Social} style={{ height: "300px" }}/> <a href='https://antonio-ram.github.io/NoSQLapi/'> Social Network </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;