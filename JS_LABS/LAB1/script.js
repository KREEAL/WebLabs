let task4_numerator = 0;

function showTime(elemId) {
  let objectDate = new Date();

  let D = objectDate.toLocaleDateString("ru-RU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let timeObject = objectDate.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    hourCycle: "h24",
  });

  let dt = document.getElementById(elemId);
  dt.innerHTML = D + " " + timeObject.replace(/:/g, "/");
}

function openTask(evt, taskName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(taskName).style.display = "block";
  evt.currentTarget.className += " active";
}

function task4_openText(evt) {
  let textElems = document.getElementsByClassName("four_block_text");
  for (i = 0; i < textElems.length; i++) {
    textElems[i].style.visibility = "hidden";
  }
  textElems[task4_numerator].style.visibility = "visible";

  task4_numerator = task4_numerator + 1;
  if (task4_numerator === 6) {
    task4_numerator = 0;
  }
  // let randtext = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  // textElems[randtext].style.visibility = "visible";
}

//task6

function alertLetter(inputtxt) {
  return inputtxt.match(/^[A-Za-z]+$/);
}

function stayLettersTrue(inputt) {
  //let letters = /^[A-Za-z]+$/;
  let string_inp = inputt.value;
  let koke = "abc";
  koke.substring();
  for (char_ind = 0; char_ind < string_inp.length; char_ind++) {
    // if (string_inp[char_ind] == "Z" || string_inp[char_ind] == "a") {
    //   string_inp[char_ind] = "";
    // }
    // if (inputt.value[char_ind] < "A" || inputt.value[char_ind] > "z") {
    if (!alertLetter(string_inp[char_ind])) {
      string_inp =
        string_inp.substring(0, char_ind) +
        "" +
        string_inp.substring(char_ind + 1, string_inp.length);
    }
  }
  return string_inp;
}
//task7
function remove(link) {
  link.parentNode.parentNode.removeChild(link.parentNode);
}

//task8

function makehover(obj, opacity_new, mult) {
  if (obj.style.opacity <= 1 && obj.style.opacity >= 0) {
    opacity_new = opacity_new - 0.1 * mult;
    obj.style.opacity = opacity_new;
    if (obj.style.opacity > 1) {
      obj.style.opacity = 1;
    }
    if (obj.style.opacity < 0) {
      obj.style.opacity = 0;
    }
  }
}
