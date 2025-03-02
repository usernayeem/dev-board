document.getElementById("btn-theme").addEventListener("click", function () {
  let randomBg = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomBg;
});

document.getElementById("blogs").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

let date = new Date();
let options = { year: "numeric", month: "short", day: "numeric" };
let formatDate = date.toLocaleDateString("en-US", options).replace(/,/, "");
document.getElementById("date").innerHTML = formatDate;

let dayName = date.toLocaleString("default", {
  weekday: "short",
});
document.getElementById("day").innerHTML = dayName;

let totalTask = 6;
document.querySelector(".total-task").innerText = totalTask;

document.getElementById("btn-1").classList.add("btn-active");
document.getElementById("btn-2").classList.add("btn-active");
document.getElementById("btn-3").classList.add("btn-active");
document.getElementById("btn-4").classList.add("btn-active");
document.getElementById("btn-5").classList.add("btn-active");
document.getElementById("btn-6").classList.add("btn-active");

let navTask = 23;
document.querySelector(".nav-task").innerText = navTask;

function time() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  let timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;

  return timeStr;
}

document.getElementById("btn-1").addEventListener("click", function () {
  alert("Board Updated Successfully");
  totalTask -= 1;
  document.querySelector(".total-task").innerText = totalTask;

  navTask += 1;
  document.querySelector(".nav-task").innerText = navTask;

  let localTime = time();

  let para = document.createElement("p");
  para.innerText = `You have completed the task fix mobile Button Issue at ${localTime}`;
  para.classList.add("para");
  document.querySelector(".para-box").appendChild(para);

  this.disabled = true;
  if (this.disabled) {
    document.getElementById("btn-1").classList.remove("btn-active");
    document.getElementById("btn-1").classList.add("btn-disabled");
  }
});
document.getElementById("btn-2").addEventListener("click", function () {
  alert("Board Updated Successfully");
  totalTask -= 1;
  document.querySelector(".total-task").innerText = totalTask;

  navTask += 1;
  document.querySelector(".nav-task").innerText = navTask;

  let localTime = time();

  let para = document.createElement("p");
  para.innerText = `You have completed the task Add Dark Mode at ${localTime}`;
  para.classList.add("para");
  document.querySelector(".para-box").appendChild(para);

  this.disabled = true;
  if (this.disabled) {
    document.getElementById("btn-2").classList.remove("btn-active");
    document.getElementById("btn-2").classList.add("btn-disabled");
  }
});
document.getElementById("btn-3").addEventListener("click", function () {
  alert("Board Updated Successfully");
  totalTask -= 1;
  document.querySelector(".total-task").innerText = totalTask;

  navTask += 1;
  document.querySelector(".nav-task").innerText = navTask;

  let localTime = time();

  let para = document.createElement("p");
  para.innerText = `You have completed the task Optimize Home page at ${localTime}`;
  para.classList.add("para");
  document.querySelector(".para-box").appendChild(para);

  this.disabled = true;
  if (this.disabled) {
    document.getElementById("btn-3").classList.remove("btn-active");
    document.getElementById("btn-3").classList.add("btn-disabled");
  }
});
document.getElementById("btn-4").addEventListener("click", function () {
  alert("Board Updated Successfully");
  totalTask -= 1;
  document.querySelector(".total-task").innerText = totalTask;

  navTask += 1;
  document.querySelector(".nav-task").innerText = navTask;

  let localTime = time();

  let para = document.createElement("p");
  para.innerText = `You have completed the task Add new emoji 🤲 at ${localTime}`;
  para.classList.add("para");
  document.querySelector(".para-box").appendChild(para);

  this.disabled = true;
  if (this.disabled) {
    document.getElementById("btn-4").classList.remove("btn-active");
    document.getElementById("btn-4").classList.add("btn-disabled");
  }
});
document.getElementById("btn-5").addEventListener("click", function () {
  alert("Board Updated Successfully");
  totalTask -= 1;
  document.querySelector(".total-task").innerText = totalTask;

  navTask += 1;
  document.querySelector(".nav-task").innerText = navTask;

  let localTime = time();

  let para = document.createElement("p");
  para.innerText = `You have completed the task Integrate OpenAI API at ${localTime}`;
  para.classList.add("para");
  document.querySelector(".para-box").appendChild(para);

  this.disabled = true;
  if (this.disabled) {
    document.getElementById("btn-5").classList.remove("btn-active");
    document.getElementById("btn-5").classList.add("btn-disabled");
  }
});
document.getElementById("btn-clear").addEventListener("click", function () {
  document.querySelector(".para-box").innerHTML = "";
});
document.getElementById("btn-6").addEventListener("click", function () {
  alert("Board Updated Successfully");
  totalTask -= 1;
  document.querySelector(".total-task").innerText = totalTask;

  navTask += 1;
  document.querySelector(".nav-task").innerText = navTask;

  let localTime = time();

  let para = document.createElement("p");
  para.innerText = `You have completed the task Improve Job searching at ${localTime}`;
  para.classList.add("para");
  document.querySelector(".para-box").appendChild(para);

  this.disabled = true;
  if (this.disabled) {
    document.getElementById("btn-6").classList.remove("btn-active");
    document.getElementById("btn-6").classList.add("btn-disabled");
  }
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (totalTask === 0) {
      setTimeout(() => {
        alert("Congrates!!! You have completed all the current task");
      }, 100);
    }
  });
});
