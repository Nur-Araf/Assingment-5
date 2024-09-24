const donateSection = document.getElementById("donateSection");
const historySection = document.getElementById("historySection");
const donateBtn = document.getElementById("donate");
const historyBtn = document.getElementById("history");

// ------ set the Toggle btn function ----- //
donateSection.classList.remove("hidden");
historySection.classList.add("hidden");

donateBtn.classList.add("selected");
donateBtn.classList.remove("not-selected");
historyBtn.classList.add("not-selected");

donateBtn.addEventListener("click", function () {
  donateSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  donateBtn.classList.add("selected");
  donateBtn.classList.remove("not-selected");
  historyBtn.classList.remove("selected");
  historyBtn.classList.add("not-selected");
});

historyBtn.addEventListener("click", function () {
  donateSection.classList.add("hidden");
  historySection.classList.remove("hidden");

  donateBtn.classList.remove("selected");
  donateBtn.classList.add("not-selected");
  historyBtn.classList.add("selected");
  historyBtn.classList.remove("not-selected");
});

// ----- Work With the Money ----- //
let mainBalance = document.getElementById("balance").innerText;
let noakBalance = document.getElementById("noakhaiBalance").innerText;
let fenBalance = document.getElementById("feniBalance").innerText;
let aiBalance = document.getElementById("aidBalance").innerText;

let totalBalance = parseInt(mainBalance);
let noakhaiBalance = parseInt(noakBalance);
let feniBalance = parseInt(fenBalance);
let aidBalance = parseInt(aiBalance);

function validAmount(inputId) {
  const input = document.getElementById(inputId).value;
  const donationAmount = parseInt(input);

  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return false;
  }

  if (totalBalance < donationAmount) {
    alert("Insufficient Balance");
    return false;
  }
  return donationAmount;
}


function updateBalances(donationAmount, balanceId) {
  totalBalance -= donationAmount;
  let balanceElement = document.getElementById(balanceId);
  let balance = parseInt(balanceElement.innerText);
  balance += donationAmount;

  document.getElementById("balance").innerText = totalBalance;
  balanceElement.innerText = balance;
}

///------ History -----///

function addHistory(donationAmount, placeId) {
  const heading = document.getElementById(placeId).innerText;
  let date = new Date();

  const newElement = document.createElement("div");
  newElement.innerHTML = `<div class="border-[1px] md:p-8 p-4 rounded-2xl md:mb-6 mb-3">
            <h1 class="font-bold text-base md:text-xl pb-2 md:pb-4">${donationAmount} ${heading}h</h1>
            <p class="text-gray-700 font-light  md:text-base text-sm">Date: ${date}</p>
        </div>`;

  historySection.appendChild(newElement);
}

// ------ Update the Balances and History ----- //
function noakhaliUpdateBalances() {
  const donationAmount = validAmount("noakhaliInput");
  if (donationAmount) {
    updateBalances(donationAmount, "noakhaiBalance");
    addHistory(donationAmount, "noakhaliHeading");
  }
  document.getElementById("noakhaliInput").value = "";
}

function feniUpdateBalances() {
  const donationAmount = validAmount("feniInput");
  if (donationAmount) {
    updateBalances(donationAmount, "feniBalance");
    addHistory(donationAmount, "feniHeading");
  }
  document.getElementById("feniInput").value = "";
}

function aidUpdateBalances() {
  const donationAmount = validAmount("aidInput");
  if (donationAmount) {
    updateBalances(donationAmount, "aidBalance");
    addHistory(donationAmount, "aidHeading");
  }
  document.getElementById("aidInput").value = "";
}


function handleNouaBtn() {
  if (validAmount("noakhaliInput")) {
    noakhaliUpdateBalances();
    my_modal_1.showModal();
  } else {
    document.getElementById("noakhaliInput").value = "";
  }
}

function handleFeniBtn() {
  if (validAmount("feniInput")) {
    feniUpdateBalances();
    my_modal_1.showModal();
  } else {
    document.getElementById("feniInput").value = "";
  }
}

function handleAidBtn() {
  if (validAmount("aidInput")) {
    aidUpdateBalances();
    my_modal_1.showModal();
  } else {
    document.getElementById("aidInput").value = "";
  }
}

// ------ Add Event Listener ----- //
//  document
//   .getElementById("btn")
//    .addEventListener("click", noakhaliUpdateBalances);
// document.getElementById("btn-1").addEventListener("click", feniUpdateBalances);
// document.getElementById("btn-2").addEventListener("click", aidUpdateBalances);