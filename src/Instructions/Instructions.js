import { useEffect,useState} from 'react';
import './Instructions.css'

function Instructions(){
    return (
        <div className="instructions">

            <div>
                <h2>
                   Sorting Visualizer
                </h2>
                <p>
                    This project demostrates how the most famous sorting algorithms work
                    by showing <br></br> an animation of each of their iterations.
                </p>
                <p>
                    <b>Click on the buttons to see how each of the algorithm sorts the bars!</b>
                </p>
                <p>
                    If you are an employer or recruiter, don't hesitate to connect with me on <a href="https://www.linkedin.com/in/manuelga">Linked-in</a>
                </p>
            </div>

        </div>
    )
}
export default Instructions;