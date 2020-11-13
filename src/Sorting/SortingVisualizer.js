import { useEffect,Fragment } from 'react';
import {quickSort} from './SortingAlgorithms';
import './SortingVisualizer.css'
function SortingViasualizer() {
    
    
     
    function generateBars(number){
        
        let bars = `` ;
        let counter = 0;
        while (counter < number){
            bars= document.createElement('div')
            bars.classList = "bar"
            document.getElementById("Visualizer").appendChild(bars)
            counter++;
        } 

    }

    useEffect(() => {
       
        generateBars(5)
    })


    return (

        <div className="container">
            <nav className="nav-bar">
                <ul>
                    <li>
                        <button>Quick Sort</button>
                    </li>
                    <li>
                        <button>Merge Sort</button>
                    </li>
                    <li>
                        <button>QuickSort</button>
                    </li>
                </ul>
            </nav>


            <div className="Visualizer flex " id="Visualizer">
                
            </div>




        </div>
    );

}


export default SortingViasualizer;
