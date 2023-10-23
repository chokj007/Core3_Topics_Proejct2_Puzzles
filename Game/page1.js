        
        // Function to shuffle an array randomly
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
            // Function to randomize the initial background colors of the divs
            function randomizeInitialColors() {
                const mainDivs = document.querySelectorAll('.div');
                for (const div of mainDivs) {
                    const randomColorIndex = Math.floor(Math.random() * colors.length);
                    setBackgroundColor(div, colors[randomColorIndex]);
                    }
                }
                
                // Call the function to randomize initial colors when the page loads
                window.addEventListener('load', randomizeInitialColors);
            
            const divs = document.querySelectorAll('.div');
            const container = document.querySelector('.container');
            const colors = ['rgb(255, 255, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)']; // Array of colors
            const audio = new Audio('completeSound.mp3'); 
    
            audio.addEventListener('ended', function() {
                // audio stopped playing
                const playAgainButton = document.getElementById('round-button-container');
                playAgainButton.style.display = 'block';
            });
    
            let selectedDiv = null; // Variable to store the selected div
            let colorIndex = 0; // Index for cycling colors
            let spaceBarPressed = false; // Flag to track space bar press
            
            // Set predetermined colors for each box
            const predeterminedColors = {
                'top': 'rgb(255, 0, 0)', // Red
                'middle': 'rgb(255, 255, 0)', // Yellow
                'bottom': 'rgb(0, 0, 255)',  // Blue
            };
    
            // Function to set the background color of a div
            function setBackgroundColor(div, color) {
                div.style.backgroundColor = color;
            }
    
            // Function to handle div selection and color cycling
            function handleDivSelection(div) {
                if (selectedDiv !== div) {
                    if (selectedDiv) {
                        selectedDiv.style.border = '2px solid transparent'; // Reset border of previously selected div
                    }
                    selectedDiv = div;
                    selectedDiv.style.border = '2px solid black'; // Add border to indicate selection
                    colorIndex = 0;
                }
            }
    
            // Event listener for clicking on the container
            container.addEventListener('click', (event) => {
                const targetDiv = event.target; // Get the clicked element within the container
                if (targetDiv.classList.contains('div')) {
                    handleDivSelection(targetDiv);
                }
    
                if (allPredeterminedColorsReached) {
                    targetDiv.style.border = '2px solid transparent'; // Remove the border when all predetermined colors are reached
                }
    
            });
    
            // Event listener for key press to cycle colors
            document.addEventListener('keypress', (event) => {
                if (event.key === ' ') {
                    spaceBarPressed = true;
                    cycleColors(); // Start color cycling when space bar is pressed
                }
            });
    
            // Event listener for key release to stop color cycling
            // document.addEventListener('keyup', (event) => {
            //     if (event.key === ' ') {
            //         spaceBarPressed = false;
            //     }
            // });
    
            // Function to continuously change colors while space bar is pressed
    
            // function cycleColors() {
            //     if (selectedDiv && spaceBarPressed) {
            //         colorIndex = (colorIndex + 1) % colors.length;
            //         setBackgroundColor(selectedDiv, colors[colorIndex]);
    
            //         const predeterminedColor = predeterminedColors[selectedDiv.id]; // Get the predetermined color
    
            //         if (colors[colorIndex] === predeterminedColor) {
            //             audio.play(); // Play audio when the predetermined color is reached
            //             console.log('played when:', 'colors=' + colors[colorIndex], 'predeterminedColor='+predeterminedColor)
            //         }
    
    
            //         //requestAnimationFrame(cycleColors);
            //     } else {
            //         colorIndex = 0; // Reset color index when space bar is released
            //     }
            // }
    
    let predeterminedColorsReached = 0; // Variable to count reached predetermined colors
    let allPredeterminedColorsReached = false; // Flag to check if all predetermined colors are reached
    let audioPlayed = false; // Flag to check if the audio has been played
    
    // Flags for each div
    const divFlags = {
        'top': false,
        'middle': false,
        'bottom': false,
    };
    
    // Function to continuously change colors while space bar is pressed
    function cycleColors() {
        if (selectedDiv && spaceBarPressed) {
            if (!allPredeterminedColorsReached) {
                colorIndex = (colorIndex + 1) % colors.length;
                setBackgroundColor(selectedDiv, colors[colorIndex]);
    
                const predeterminedColor = predeterminedColors[selectedDiv.id]; // Get the predetermined color
    
                if (colors[colorIndex] === predeterminedColor && !divFlags[selectedDiv.id]) {
                    predeterminedColorsReached++; // Increment the count of reached predetermined colors
                    divFlags[selectedDiv.id] = true; // Set the flag for the current div to true
    
                    if (predeterminedColorsReached === Object.keys(predeterminedColors).length) {
                        // All predetermined colors have been reached
                        allPredeterminedColorsReached = true; // Set the flag to true
                    }
                }
    
                if (!audioPlayed && allPredeterminedColorsReached) {
                    audio.play(); // Play audio only once when all predetermined colors are reached
                    audioPlayed = true; // Set the flag to true
    
                }
            }
    
            if (allPredeterminedColorsReached) {
                spaceBarPressed = false; // Stop color cycling when all predetermined colors are reached
            }
        } else {
            colorIndex = 0; // Reset color index when space bar is released
        }
    }
    
    
    
    
    
    
    