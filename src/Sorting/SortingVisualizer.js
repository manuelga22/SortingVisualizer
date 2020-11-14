import { useEffect,useState, Fragment} from 'react';
import {quickSort} from './SortingAlgorithms';
import './SortingVisualizer.css'
function SortingViasualizer() {
    const [bars, setBars] = useState([]);


     
    const generateBars=(number)=>{ 
        let barsArray=[];     
        let bar = ``
        let counter = 0;
        while (counter < number){

            let random_num = Math.floor((Math.random() * 50) + 5)
            bar= document.createElement('div')
            bar.classList = "bar"
            bar.style.height = random_num+'px'
            barsArray.push(random_num) //store the height of the bar
            counter++; 
        }
        setBars(bars=>[...barsArray])
    }



    const quickSortAnimate = (bars)=>{
        let array = bars;
        let animations = []
        let pivots = [];
  
        // An empty array called animations is also sent and it will 
        // contain the respective movement for the bars
        quickSort(array,0,array.length-1,animations);
      
        for(let a = 0; a<animations.length;a++){

            // collection of all bars
            const arrayBars = document.getElementsByClassName('bar');
            console.log(arrayBars)
            const isColorChange = a % 3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[a];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = a % 3 === 0 ? 'black' : 'red';

                setTimeout(() => {
                    barOneStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'black';
                  }, a * 10);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[a];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                  }, a * 10);

            }

        }

        setBars(bars=>[...array])
    }

 



    useEffect(() => {
       
       generateBars(10)
       

    },[])


    return (

        <div className="container">
            <nav className="nav-bar">
                <ul>
                    <li>
                        <button onClick={ ()=>{quickSortAnimate(bars)} }>Quick Sort</button>
                    </li>
                    <li>
                        <button>Merge Sort</button>
                    </li>
                    <li>
                        <button >Selection Sort</button>
                    </li>
                </ul>
            </nav>


            <div className="Visualizer flex" id="Visualizer">
            {bars.map((bar,key)=><div style={{height:bar}} className="bar" key={key}></div>)}
            </div>




        </div>
    );

}


export default SortingViasualizer;
