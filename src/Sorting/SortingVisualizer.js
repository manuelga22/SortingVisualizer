import { useEffect,useState} from 'react';
import {quickSort} from './Algorithms/QuickSort';
import {bubbleSort} from './Algorithms/BubbleSort';
import {selectionSort} from './Algorithms/SelectionSort';
import {mergeSort} from './Algorithms/MergeSort';
import Instructions from '../Instructions/Instructions';

import './SortingVisualizer.css'
function SortingViasualizer() {

    const [bars, setBars] = useState([]); 

    const generateBars=(number)=>{ 
        let barsArray=[];     
        let bar = ``
        let counter = 0;
        while (counter < number){

            let random_num = Math.floor((Math.random() * 300) + 5)
            bar= document.createElement('div')
            bar.classList = "bar"
            bar.style.height = random_num+'px'
            barsArray.push(random_num) //store the height of the bar
            counter++; 
        }
        setBars([...barsArray])
    };
    const quickSortAnimation = (bars)=>{
        const arrayBars = document.getElementsByClassName('bar');
        let array = [...bars]; //copy of bars
      
        // animations will have the index of the bars being moved
        let {animations,pivots} = quickSort(array,0,array.length-1);
        for(let a =0; a<animations.length; a++){ 
            let first_swap_index;
            let second_swap_index;  
            let pivot; 
            setTimeout(()=>{
                first_swap_index = animations[a][0];
                second_swap_index = animations[a][1];   
                pivot = pivots[a]
                arrayBars[first_swap_index].style.background="green";
                arrayBars[second_swap_index].style.background="yellow";
                arrayBars[pivot].style.background="purple";
                console.log(first_swap_index,second_swap_index)
                //swap the bars
                setBars([...swap(first_swap_index, second_swap_index, bars) ])
                //set the bars to their original color
                arrayBars[first_swap_index].style.background="red";
                arrayBars[second_swap_index].style.background="red";
                //arrayBars[pivot].style.background="red";
            },a*3)//(a*number) means that the animations will execute one after the other
          
        } 
    };
    const bubbleSortAnimation = ()=>{
        const arrayBars = document.getElementsByClassName('bar')
        let copyOfBars = [...bars] //copy of bars
        const {sortedArray,animations} =  bubbleSort(copyOfBars);
        for(let a=0;a<animations.length;a++){
            setTimeout(()=>{
                let first_swap_index = animations[a][1];
                let second_swap_index = animations[a][2];  
                arrayBars[first_swap_index].style.background="black";
                arrayBars[second_swap_index].style.background="yellow";    
                if(animations[a][0] == "swap")setBars([...swap(first_swap_index, second_swap_index, bars) ])
                sleep(20).then(()=>{
                    arrayBars[first_swap_index].style.background="lightcoral";
                    arrayBars[second_swap_index].style.background="lightcoral";
                })
            },a*40)
        }
    };
    const selectionSortAnimation =()=>{
        const arrayBars = document.getElementsByClassName('bar')
        let copyBars = [...bars] // copy of bars
        const {sortedArray,animations} =  selectionSort(copyBars);
        for(let a=0;a<animations.length;a++){
            setTimeout(()=>{
                let first_swap_index = animations[a][1];
                let second_swap_index = animations[a][2];  
                console.log(animations[a][0], first_swap_index,second_swap_index)
                arrayBars[first_swap_index].style.background="black";
                arrayBars[second_swap_index].style.background="yellow";  
                if(animations[a][0] == "swap")setBars([...swap(first_swap_index, second_swap_index, bars) ])
                sleep(10).then(()=>{
                    arrayBars[first_swap_index].style.background="lightcoral";
                    arrayBars[second_swap_index].style.background="lightcoral";
                })
            },a*30)
        }
    };
    const mergeSortAnimation = ()=>{
        const arrayBars = document.getElementsByClassName('bar')
        let copyBars = [...bars] // copy of bars
        let {sortedArray,animations} = mergeSort(bars);
        console.log(animations)

    };


    function swap(index1, index2,array){
        sleep(800)
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array   
    };
 


    useEffect(() => {       
       generateBars(50)
    },[])


    return (

        <div className="container">
            <nav className="nav-bar flex">
                <ul className="flex">
                    <li>
                        <button className="btn" onClick={ ()=>{mergeSortAnimation()} }>Merge Sort</button>
                    </li>
                    <li>
                        <button className="btn" onClick={ ()=>{quickSortAnimation(bars)} }>Quick Sort</button>
                    </li>
                    <li>
                        <button  className="btn" onClick={()=>{selectionSortAnimation()}}>Selection Sort</button>
                    </li>
                    <li>
                        <button className="btn"  onClick={ ()=>{ bubbleSortAnimation() }}>Bubble Sort</button>
                    </li>
                    <li>
                        <button className="btn"  onClick={ ()=>{ generateBars(50) }}>Reset Array</button>
                    </li>
                </ul>
            </nav>


            <div className="Visualizer flex" id="Visualizer">
            {bars.map((bar,key)=><div style={{height:bar}} className="bar" key={key}></div>)}
            </div>

          

            <Instructions></Instructions>


        </div>
    );

}


export default SortingViasualizer;

//makes the program wait
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


