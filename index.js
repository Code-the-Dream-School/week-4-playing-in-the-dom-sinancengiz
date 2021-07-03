//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
var div_a_1 = document.getElementById("a-1");
var newDiv = document.createElement("div"); 
newDiv.className += "square";
newDiv.innerHTML = "X"
//function to change text Content
newDiv.onclick = function(){ 
    if(newDiv.textContent== "O"){
        newDiv.innerHTML = "X"
    }
    else{ newDiv.innerHTML = "O"}

};

div_a_1.appendChild(newDiv)


//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow,
// those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
var div_a_2 = document.getElementById("a-2");
var select_option = document.createElement("select");
select_option.id = "select_colors";

for (i=0; i< colors.length;i++){
    var new_option = document.createElement("option");
    new_option.innerHTML = colors[i]
    new_option.value = colors[i];
    select_option.appendChild(new_option)
}
var remove_button = document.createElement("button");
remove_button.id = "remove_colors";
remove_button.innerHTML= "Remove Selected Color"
div_a_2.appendChild(select_option)
div_a_2.appendChild(remove_button)

function removeOption() {
    var x = document.getElementById("select_colors");
    x.remove(x.selectedIndex);
  }

remove_button.onclick = removeOption



//resolve // QUESTION 2 here






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) 
//write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{
    //calculate volume
    function calculate_volume(r){
        return  ((4/3) * Math.PI * r^3)
    }
    //calculate area
    function calculate_area(r){
        return  (4 * Math.PI * r^2)
    }
 
    var radius = document.getElementById("radius").value;

    var int_radius = parseInt(radius)

    var volume = calculate_volume(int_radius)
    var area = calculate_area(int_radius)

    document.getElementById("radius").value = radius
    document.getElementById("volume").value = volume.toString()
    document.getElementById("area").value = area.toString()

    return false;

 }

// this execute the volume_sphere function each time the calculate (submit) button is clicked
window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; 


//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens


//resolve // QUESTION 4 here
var div_a_4 = document.getElementById("a-4");

var button_a_1 = document.createElement("button"); 
var button_a_2 = document.createElement("button"); 
var button_a_3 = document.createElement("button"); 

button_a_1.innerHTML = "Hide/Display Question_1"
button_a_2.innerHTML = "Hide/Display Question_2"
button_a_3.innerHTML = "Hide/Display Question_3"

function display_hide(element) {
    var x = document.getElementById(element);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

button_a_1.onclick = function display_hide() {
                        var x = document.getElementById("question_1");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                        } else {
                            x.style.display = "none";
                        }
                        }
button_a_2.onclick = function display_hide() {
                        var x = document.getElementById("question_2");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                        } else {
                            x.style.display = "none";
                        }
                        }
button_a_3.onclick = function display_hide() {
                        var x = document.getElementById("question_3");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                        } else {
                            x.style.display = "none";
                        }
                        }


div_a_4.appendChild(button_a_1)
div_a_4.appendChild(button_a_2)
div_a_4.appendChild(button_a_3)



