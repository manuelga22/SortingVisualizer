import { useEffect,useState, Fragment} from 'react';
import {quickSort} from './SortingAlgorithms';
import './SortingVisualizer.css'
function SortingViasualizer() {
    const [bars, setBars] = useState([]);

    let barsHeights=[];
     
    function generateBars(number){ 
        let barsArray=[];     
        let bar = ``
        let counter = 0;
        while (counter < number){

            let random_num = Math.floor((Math.random() * 50) + 1)
            bar= document.createElement('div')
            bar.classList = "bar"
            bar.style.height = random_num+'px'
            barsHeights.push(random_num)
            barsArray.push(bar)
            counter++; 

        }
        
    }

    function drawBars(barsObjects){
        let array = barsObjects;
        console.log(array)
        const render = array.map((bar)=><Fragment>{bar[0]}</Fragment>)
        return render;
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
                        <button >QuickSort</button>
                    </li>
                </ul>
            </nav>


            <div className="Visualizer flex" id="Visualizer">
            
            </div>




        </div>
    );

}


export default SortingViasualizer;
