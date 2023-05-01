// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

function museumAdmissionPrice() {
  const userAge = parseInt(document.getElementById("age-info").value);
  const currentDay = document.getElementById("day-info");
  const result = document.getElementById("museum-price");
  
  if (userAge <= 5 || userAge >= 95) {
    result.innerHTML = "You get in for free.";
  }
    
  else if (userAge >= 12 && userAge <= 21) {
    result.innerHTML = "You get a discount.";
  }
  
  else if ((userAge < 12 || userAge > 21) && (currentDay.value === "tuesday" || currentDay.value === "thursday")) {
    result.innerHTML = "You get a discount.";
  }

  else {
    result.innerHTML = "You must pay the regular price.";
  }
}