//shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let shuffledColors = []; // global variable

document.addEventListener('DOMContentLoaded', function () {
    var gridContainer = document.getElementById('grid-container');
    var cellCount = 0; // starts cell count
    const colors = [
        // 'RGB(189, 64, 76 )',
        'RGB(191, 78, 71)',
        // 'RGB(194, 92, 67)',
        'RGB( 196, 105, 64)',
        // 'RGB(198, 120, 60)',
        
        'RGB(176, 61, 75)',
        'RGB(181, 73, 73)',
        // 'RGB(184, 85, 73)',
        'RGB(189, 98, 72)',
        'RGB(193, 111, 71)',
        
        'RGB(164, 58, 74)',
        'RGB(171, 69, 75)',
        // 'RGB(177, 79, 78)',
        'RGB(183, 91, 81)',
        'RGB(190, 101, 83)',
        
        // 'RGB(152, 54, 73)',
        // 'RGB(160, 65, 77)',
        // 'RGB(169, 73, 84)',
        // 'RGB(177, 84, 89)',
        // 'RGB(186, 93, 95)',
        
        'RGB(139, 52, 71)',
        'RGB(151, 60, 80)',
        // 'RGB(160, 67, 88 )',
        'RGB(171, 75, 97)',
        'RGB(181, 83, 107)',
        
        'RGB(127, 49, 71)',
        'RGB(140, 56, 83)',
        // 'RGB(153, 61, 95 )',
        'RGB(165, 68, 107)',
        'RGB(177, 75, 119)',
        
        // 'RGB(115, 47, 70)',
        'RGB(129, 51, 85)',
        // 'RGB(145, 56, 99)',
        'RGB(159, 61, 115)',
        // 'RGB(173, 66, 130)',
    ]; 

     // shuffle and randomize the initial background colors of the divs
     function randomizeInitialColors() {
        const mainDivs = document.querySelectorAll('.grid-cell');
        shuffledColors = [...colors];
        shuffleArray(shuffledColors);

        mainDivs.forEach(function (div, index) {
            if (index === 0 || index === 2 || index === 4 || index === 7 || index === 12 || index === 15 || index === 16 || index === 17 || index === 18 || index === 19 || index === 22 || index === 27 || index === 30 || index === 32 || index === 34) {
                // If it's specified cells, set its color to the preset color and add a black dot
                setBackgroundColor(div, predeterminedColors[div.id]);
                addBlackDotToSpecificDivs(div);
            } else {
                // set a shuffled color
                const randomColorIndex = Math.floor(Math.random() * shuffledColors.length);
                setBackgroundColor(div, shuffledColors[randomColorIndex]);
            }
        });
    }

    function addBlackDotToSpecificDivs(div) {
        // Create a black dot element
        const blackDot = document.createElement('div');
        blackDot.classList.add('black-dot');
        // Append the black dot to the specified div
        div.appendChild(blackDot);
    }

    // randomize initial colors every time the page is reloaded
    window.addEventListener('load', randomizeInitialColors);

    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 5; col++) {
            var cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.id = 'cell-' + cellCount; // Assign different ID to each cell
            gridContainer.appendChild(cell);
            cellCount++; // increment cell count
        }
    }

    // set the background color of a div
    function setBackgroundColor(div, color) {
        div.style.backgroundColor = color;
    }

    gridContainer.addEventListener('click', (event) => {
        const targetDiv = event.target; // clicked element within the container

        // If  target div is specified fixed divs
        if (targetDiv.classList.contains('grid-cell') &&
            (targetDiv.id === 'cell-0' || targetDiv.id === 'cell-2' || targetDiv.id === 'cell-4' || targetDiv.id === 'cell-7' || targetDiv.id === 'cell-12' || targetDiv.id === 'cell-15' || targetDiv.id === 'cell-16' || targetDiv.id === 'cell-17' || targetDiv.id === 'cell-18' || targetDiv.id === 'cell-19' || targetDiv.id === 'cell-22' || targetDiv.id === 'cell-27' || targetDiv.id === 'cell-30' || targetDiv.id === 'cell-32' || targetDiv.id === 'cell-34')) {
            return; // Do nothing for the cells
        }

        if (targetDiv.classList.contains('grid-cell')) {
            handleDivSelection(targetDiv);
        }
    });

    document.addEventListener('keypress', (event) => {
        if (event.key === ' ') {
            spaceBarPressed = true;
            cycleColors();
        }
    });

    // variables
    let selectedDiv = null; // store the selected div
    let spaceBarPressed = false; // Flag to track space bar press
    let colorIndex = 0; // index for cycling colors

    //  preset colors for each box
            const predeterminedColors = {
                'cell-0': 'RGB(189, 64, 76 )',
                'cell-1': 'RGB(191, 78, 71)',
                'cell-2': 'RGB(194, 92, 67)',
                'cell-3': 'RGB( 196, 105, 64 )',
                'cell-4': 'RGB(198, 120, 60)',

                'cell-5': 'RGB(176, 61, 75)',
                'cell-6': 'RGB(181, 73, 73)',
                'cell-7': 'RGB(184, 85, 73)',
                'cell-8': 'RGB(189, 98, 72)',
                'cell-9': 'RGB(193, 111, 71 )',

                'cell-10': 'RGB(164, 58, 74 )',
                'cell-11': 'RGB(171, 69, 75)',
                'cell-12': 'RGB(177, 79, 78)',
                'cell-13': 'RGB(183, 91, 81)',
                'cell-14': 'RGB(190, 101, 83)',

                'cell-15': 'RGB(152, 54, 73)',
                'cell-16': 'RGB(160, 65, 77)',
                'cell-17': 'RGB(169, 73, 84)',
                'cell-18': 'RGB(177, 84, 89)',
                'cell-19': 'RGB(186, 93, 95)',

                'cell-20': 'RGB(139, 52, 71)',
                'cell-21': 'RGB(151, 60, 80)',
                'cell-22': 'RGB(160, 67, 88 )',
                'cell-23': 'RGB(171, 75, 97)',
                'cell-24': 'RGB(181, 83, 107)',

                'cell-25': 'RGB(127, 49, 71)',
                'cell-26': 'RGB(140, 56, 83)',
                'cell-27': 'RGB(153, 61, 95 )',
                'cell-28': 'RGB(165, 68, 107)',
                'cell-29': 'RGB(177, 75, 119)',

                'cell-30': 'RGB(115, 47, 70)',
                'cell-31': 'RGB(129, 51, 85)',
                'cell-32': 'RGB(145, 56, 99)',
                'cell-33': 'RGB(159, 61, 115)',
                'cell-34': 'RGB(173, 66, 130)',

            };

            var audio = new Audio('completeSound.mp3');
            audio.preload = 'auto'; 
            audio.load(); 
        
        
            // cycle through colors
            function cycleColors() {
                if (selectedDiv && spaceBarPressed) {
                    // Check if the selected cell is one of the specified cells
                    if (selectedDiv.id === 'cell-0' || selectedDiv.id === 'cell-2' || selectedDiv.id === 'cell-4' || selectedDiv.id === 'cell-7' || selectedDiv.id === 'cell-12' || selectedDiv.id === 'cell-15' || selectedDiv.id === 'cell-16' || selectedDiv.id === 'cell-17' || selectedDiv.id === 'cell-18' || selectedDiv.id === 'cell-19' || selectedDiv.id === 'cell-22' || selectedDiv.id === 'cell-27' || selectedDiv.id === 'cell-30' || selectedDiv.id === 'cell-32' || selectedDiv.id === 'cell-34') {
                        return; // don't cycle these cells
                    }
        
                   // Convert the background color to RGB
       const backgroundColorRGB = getRGBColor(selectedDiv.style.backgroundColor);

       if (isColorEqual(backgroundColorRGB, predeterminedColors[selectedDiv.id])) {
           // Play audio
           audio.play();
           console.log(`Matched predetermined color for ${selectedDiv.id}`);
       }

       setBackgroundColor(selectedDiv, shuffledColors[colorIndex]);
       colorIndex = (colorIndex + 1) % shuffledColors.length;
   }
}
           
           function getRGBColor(color) {
               const match = color.match(/\d+/g);
               if (match) {
                   return match.map(Number);
               }
               return null;
           }
           
           function isColorEqual(color1, color2) {
               if (color1 && color2) {
                   return color1.every((value, index) => value === color2[index]);
               }
               return false;
           }

            
            

            audio.addEventListener('ended', () => {
                spaceBarPressed = false;
            });
        
            function handleDivSelection(div) {
                if (selectedDiv !== div) {
                    if (selectedDiv) {
                        // Remove the border
                        selectedDiv.classList.remove('selected-border');
                        spaceBarPressed = false; // Reset the flag
                    }
                    selectedDiv = div;
                    selectedDiv.classList.add('selected-border');
                    colorIndex = 0;
                }
            }
            
        
            // background colors for all cells
            var cells = document.querySelectorAll('.grid-cell');
            cells.forEach(function (cell) {
                const cellId = cell.id;
                setBackgroundColor(cell, predeterminedColors[cellId]);
            });
        });


 