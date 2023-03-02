const api_url = "https://healthriskcalculatorapi.azurewebsites.net";

setInterval(function () {
  ping();
}, 120000);

function ping() {
  $.ajax({
    type: "GET",
    url: api_url + "/ping",
    dataType: "text",
    success: function (response) {
      console.log(response);
    },
  });
}

function calculateTotalRisk() {
  data = {
    age: 10,
    bmi: 0,
    bp: 0,
    disease: 0,
  };

  $.ajax({
    type: "POST",
    url: api_url + "/calculate_risk",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
  });
}

function calculateAgeRisk() {
  data = {
    age: 0,
  };

  $.ajax({
    type: "POST",
    url: api_url + "/age_to_points",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
  });
}

function calculateBMIRisk() {
  data = {
    bmi: 0,
  };

  $.ajax({
    type: "POST",
    url: api_url + "/bmi_to_points",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
  });
}

function calculateBPRisk() {
  data = {
    bp: 0,
  };

  $.ajax({
    type: "POST",
    url: api_url + "/bp_to_points",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
  });
}

function calculateDiseaseRisk() {
  data = {
    disease: 10,
  };

  $.ajax({
    type: "POST",
    url: api_url + "/disease_to_points",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
  });
}

$(window).on("load", function () {
  ping();
  calculateTotalRisk();
});
