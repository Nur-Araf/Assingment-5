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

donateBtn.addEventListener("click", () => {
  donateSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  donateBtn.classList.add("selected");
  donateBtn.classList.remove("not-selected");
  historyBtn.classList.remove("selected");
  historyBtn.classList.add("not-selected");
});

historyBtn.addEventListener("click", () => {
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

function noakhaliUpdateBalances() {
  const donationAmount = validAmount("noakhaliInput");
  if (donationAmount) {
    updateBalances(donationAmount, "noakhaiBalance");
  }
  document.getElementById("noakhaliInput").value = "";
}

function feniUpdateBalances() {
  const donationAmount = validAmount("feniInput");
  if (donationAmount) {
    updateBalances(donationAmount, "feniBalance");
  }
  document.getElementById("feniInput").value = "";
}

function aidUpdateBalances() {
  const donationAmount = validAmount("aidInput");
  if (donationAmount) {
    updateBalances(donationAmount, "aidBalance");
  }
  document.getElementById("aidInput").value = "";
}

document
  .getElementById("btn")
  .addEventListener("click", noakhaliUpdateBalances);
document.getElementById("btn-1").addEventListener("click", feniUpdateBalances);
document.getElementById("btn-2").addEventListener("click", aidUpdateBalances);



// function noaupdateBalances() {
//   const noakhaliInput = document.getElementById("noakhaliInput").value;
//   const noakhaliDonate = parseInt(noakhaliInput);

//   if (isNaN(noakhaliDonate) || noakhaliDonate <= 0) {
//     alert("Please enter a valid donation amount.");
//     return;
//   }
  
//    if(totalBalance < noakhaliDonate) {
//      alert("Insufficient Balance");
//      return;
//    }
//   totalBalance -= noakhaliDonate;
//   noakhaiBalance += noakhaliDonate;

//   document.getElementById("balance").innerText = totalBalance;
//   document.getElementById("noakhaiBalance").innerText = noakhaiBalance;
// }

// document.getElementById("btn").addEventListener("click", noaupdateBalances);

// function fenupdateBalances() {
//   const feniInput = document.getElementById("feniInput").value;
//   const feniDonate = parseInt(feniInput);

//   if (isNaN(feniDonate) || feniDonate <= 0) {
//     alert("Please enter a valid donation amount.");
//     return;
//   }

//   if (totalBalance < feniDonate) {
//     alert("Insufficient Balance");
//     return;
//   }
//   totalBalance -= feniDonate;
//   feniBalance += feniDonate;

//   document.getElementById("balance").innerText = totalBalance;
//   document.getElementById("feniBalance").innerText = feniBalance;
// }

// document.getElementById("btn-1").addEventListener("click", fenupdateBalances);

// function aidupdateBalances() {
//   const aidInput = document.getElementById("aidInput").value;
//   const aidDonate = parseInt(aidInput);

//   if (isNaN(aidDonate) || aidDonate <= 0) {
//     alert("Please enter a valid donation amount.");
//     return;
//   }

//   if (totalBalance < aidDonate) {
//     alert("Insufficient Balance");
//     return;
//   }
//   totalBalance -= aidDonate;
//   aidBalance += aidDonate;

//   document.getElementById("balance").innerText = totalBalance;
//   document.getElementById("aidBalance").innerText = aidBalance;
// }

// document.getElementById("btn-2").addEventListener("click", aidupdateBalances);