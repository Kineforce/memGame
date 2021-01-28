function play() {
    let audio = document.getElementById('audio');
    audio.currentTime = 0
    audio.play(); 
}

function seq_play() {
    let audio = document.getElementById('audio_seq');
    audio.currentTime = 0
    audio.play(); 
}


var clicks = [1, 3]
var speed = 1000;
var win = 0;
var lost = 0;
var counter_win = 0;

window.addEventListener('keydown', handleKeyDown, true);
window.addEventListener('keyup', handleKeyUp, true);

function handleKeyDown(event){

    if (event.key == '1'){
        document.getElementById('cell1').classList.add('change');
        play();
    } 
    if (event.key == '2'){
        document.getElementById('cell2').classList.add('change');
        play();
    } 
    if (event.key == '3'){
        document.getElementById('cell3').classList.add('change');
        play();
    } 
    if (event.key == '4'){
        document.getElementById('cell4').classList.add('change');
        play();
    } 
    if (event.key == '5'){
        document.getElementById('cell5').classList.add('change'); 
        play();
    } 
    if (event.key == '6'){
        document.getElementById('cell6').classList.add('change'); 
        play();
    } 
    if (event.key == '7'){
        document.getElementById('cell7').classList.add('change'); 
        play();
    } 
    if (event.key == '8'){
        document.getElementById('cell8').classList.add('change'); 
        play();
    } 
    if (event.key == '9'){
        document.getElementById('cell9').classList.add('change'); 
        play();
    } 
    if (event.key == 's'){
        if (!document.getElementById('start_button').hasAttribute('hidden')){
            document.getElementById('start_button').click();
            console.log("Start_button is showing!");
        }else if (document.getElementById('play_again').hasAttribute('hidden')){
            console.log("Star_button is hidden!");
        }else {
            document.getElementById('play_again').click();
            console.log("Play_agan is showing!");
        }
    } 
    if (event.key == 'e'){
        document.getElementById('exit').click();
    }
    if (event.key == 'm'){
        if (document.getElementById('openbtn').hasAttribute('hidden')){
            document.getElementById('closebtn').click();
            document.getElementById('openbtn').removeAttribute('hidden');
        }else{
            document.getElementById('openbtn').click();
            document.getElementById('openbtn').setAttribute('hidden', 'hidden');
        }
    }
    if (event.key == 'n'){
        document.getElementById('input_show_number').click();
    }
    if (event.key == '+'){
        document.getElementById('input_speed_up').click();
    }
    if (event.key == '-'){
        document.getElementById('input_slow_down').click();
    }
    if (event.key == 'r'){
        document.getElementById('input_reset').click();
    }
}

function handleKeyUp(event){
    if (event.key == '1'){
        document.getElementById('cell1').classList.remove('change'); 
        document.getElementById('cell1').click();
    } 
    if (event.key == '2'){
        document.getElementById('cell2').classList.remove('change'); 
        document.getElementById('cell2').click();
    } 
    if (event.key == '3'){
        document.getElementById('cell3').classList.remove('change'); 
        document.getElementById('cell3').click();
    } 
    if (event.key == '4'){
        document.getElementById('cell4').classList.remove('change'); 
        document.getElementById('cell4').click();
    } 
    if (event.key == '5'){
        document.getElementById('cell5').classList.remove('change'); 
        document.getElementById('cell5').click();
    } 
    if (event.key == '6'){
        document.getElementById('cell6').classList.remove('change'); 
        document.getElementById('cell6').click();
    } 
    if (event.key == '7'){
        document.getElementById('cell7').classList.remove('change'); 
        document.getElementById('cell7').click();
    } 
    if (event.key == '8'){
        document.getElementById('cell8').classList.remove('change'); 
        document.getElementById('cell8').click();
    } 
    if (event.key == '9'){
        document.getElementById('cell9').classList.remove('change'); 
        document.getElementById('cell9').click();
    } 
}

function input_reset(){
    localStorage.removeItem("speed");
    exitGame();
}

function setStorageVariable(){
    localStorage.setItem("speed", speed);
    send_speed_to_html();
}

function send_speed_to_html(){

    document.getElementById('show_current_level').innerHTML = 0;

    if (localStorage.getItem("speed")){
        document.getElementById('show_current_speed').innerHTML = (parseInt(localStorage.getItem("speed")) / 1000) + "s";
        speed = localStorage.getItem("speed");
    }else{
        document.getElementById('show_current_speed').innerHTML = (speed / 1000) + "s";
    }
}

function input_slow_down(){
    if (localStorage.getItem("speed")){
        speed = parseInt(localStorage.getItem("speed"));
    }

    if (speed > 50){
        speed = speed + 50;
    }

    setStorageVariable();    
}

function input_speed_up(){

    if (localStorage.getItem("speed")){
        speed = parseInt(localStorage.getItem("speed"));
    }

    if (speed > 50){
        speed = speed - 50;
    }

    setStorageVariable();
}

function show_numbers(){
    
    if (document.getElementById('input_show_number').value == "1"){

        span_div = document.getElementById('catch_span');
        cell_span = span_div.getElementsByTagName('span');

        for (var i = 0; i < cell_span.length; i++){
            cell_span[i].removeAttribute('hidden');
        }
        document.getElementById('input_show_number').value = "0";
    } else {
        span_div = document.getElementById('catch_span');
        cell_span = span_div.getElementsByTagName('span');        
        for (var i = 0; i < cell_span.length; i++){
            cell_span[i].setAttribute('hidden', 'hidden');
        }
        document.getElementById('input_show_number').value = "1";
    }
}

function validate_array(answer, pattern){

    if (answer.length == pattern.length){

        document.getElementById('your_turn').setAttribute("hidden", "hidden");


        if (JSON.stringify(answer)==JSON.stringify(pattern)){

            document.getElementById('correct').removeAttribute("hidden");
            win = win + 1;

            if (speed > 50){
                speed = speed - 50;
            }
            document.getElementById('show_current_speed').innerHTML = (speed / 1000) + "s";

            clicks[0] = clicks[0] + 1;
            clicks[1] = clicks[1] + 1;

            counter_win += 1;
            document.getElementById('show_current_level').innerHTML = counter_win;

        } else {
            document.getElementById('false').removeAttribute("hidden");
            speed = 1000;
            clicks[0] = 1;
            clicks[1] = 3;
            lost = lost + 1;

            document.getElementById('show_current_speed').innerHTML = (speed / 1000) + "s";

            document.getElementById('show_current_level').innerHTML = 0;
            counter_win = 0;
       
        }
    
        document.getElementById('play_again').removeAttribute("hidden");
        document.getElementById('exit').removeAttribute("hidden");

        localStorage.setItem("speed", speed);

    } 
    
}

async function play_game(pattern){
    
    document.getElementById('your_turn').removeAttribute("hidden");

    var answer = [];

    button1 = document.getElementById("cell1").addEventListener("click", function() {
        answer.push('cell1');
        validate_array(answer, pattern);
    });

    button2 = document.getElementById("cell2").addEventListener("click", function() {
        answer.push('cell2');
        validate_array(answer, pattern);
    });
    
    button3 = document.getElementById("cell3").addEventListener("click", function() {
        answer.push('cell3');
        validate_array(answer, pattern);
    });

    button4 = document.getElementById("cell4").addEventListener("click", function() {
        answer.push('cell4');
        validate_array(answer, pattern);
    });

    button5 = document.getElementById("cell5").addEventListener("click", function() {
        answer.push('cell5');
        validate_array(answer, pattern);
    });

    button6 = document.getElementById("cell6").addEventListener("click", function() {
        answer.push('cell6');
        validate_array(answer, pattern);
    });
    
    button7 = document.getElementById("cell7").addEventListener("click", function() {
        answer.push('cell7');
        validate_array(answer, pattern);
    });

    button8 = document.getElementById("cell8").addEventListener("click", function() {
        answer.push('cell8');
        validate_array(answer, pattern);
    });

    button9 = document.getElementById("cell9").addEventListener("click", function() {
        answer.push('cell9');
        validate_array(answer, pattern);
    });

}

function getRandomIntInclusive(min, max){

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min); 

  }

function sleep(ms){

    return new Promise(resolve => setTimeout(resolve, ms));

}

async function start_game(){

    document.getElementById('correct').setAttribute("hidden", "hidden");
    document.getElementById('false').setAttribute("hidden", "hidden");
    document.getElementById('start_button').setAttribute('hidden', 'hidden');
    document.getElementById('play_again').setAttribute('hidden', 'hidden');
    document.getElementById('exit').setAttribute('hidden', 'hidden');

    if (lost == 1){
        document.getElementById('lost_warning').removeAttribute("hidden");
        await sleep(3000);
        document.getElementById('lost_warning').setAttribute("hidden", "hidden");
        lost = lost + 1;
    }

    if (win == 1){
        document.getElementById('difficult_warning').removeAttribute("hidden");
        await sleep(3000);
        document.getElementById('difficult_warning').setAttribute("hidden", "hidden");
        win = win + 1;
    }

    document.getElementById('start_button').setAttribute("hidden", "hidden");
    document.getElementById('play_again').setAttribute("hidden", "hidden");
    document.getElementById('exit').setAttribute("hidden", "hidden");
    document.getElementById('title').setAttribute("hidden", "hidden");
    document.getElementById('counter').removeAttribute("hidden", "hidden");

    for (var i = 3; i > 0; i--){
        document.getElementById('counter').value = i;
        await sleep(500);
    }

    document.getElementById('counter').setAttribute("hidden", "hidden");


    var cell = 'cell';
    var number = 0;
    var pattern = []
    var randNumber = 0


    for (var i = 0; i < getRandomIntInclusive(clicks[0], clicks[1]); i++){


        number = getRandomIntInclusive(1, 9);
        cell_number = cell + number;

        document.getElementById(cell_number).classList.add('change');
        
        seq_play();

        pattern.push(cell_number);

        await sleep(speed);

        document.getElementById(cell_number).classList.remove('change');
        
        await sleep(speed);

    }

    play_game(pattern)
    
}

function exitGame(){
    window.location.reload();
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById('openbtn').setAttribute('hidden', 'hidden');
}
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById('openbtn').removeAttribute('hidden');
    document.getElementById("mySidebar").style.width = "0";
}
