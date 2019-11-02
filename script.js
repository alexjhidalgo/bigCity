'use strict'

function validateSignUpForm(){
    $('.signUpForm').on('submit', function(){
        event.preventDefault();
        let userName = document.getElementById('nameInput').value;
        // const cityInput = document.getElementById('cityInput').value;
        //add feature that validates city and returns a properly spelled and capitalized string.
        addSignUpData(userName);
        console.log('function validateSignUpForm() ran')
    });
}

function addSignUpData(userName){
    //maybe just saves the name of user and displays it in the header and model
    $('#nameAndCityBanner').empty();
    $('#nameAndCityBanner').append(`
    <h1> Okay ${userName}, just a few more questions. </h1>
    `)
    moveToQuestionaire();
    console.log('function addSignUpData(userName) ran')
}

function moveToQuestionaire(){
    //hides other pages, displays questionaire page
    $('.signUpPage').addClass('hidden');
    $('.questionairePage').removeClass('hidden');
    console.log('function moveToQuestionaire() ran')
}

function validateQuestionaireForm(){
    $('.questionaireForm').on('submit', function(){
        event.preventDefault();
        let cityInput = document.getElementById('cityInput').value;
        let numberOfBedrooms = document.getElementById('numberOfBedrooms').value;
        let job = document.getElementById('jobTitle').value;
        //perhaps use an if/or statement to make sure numberOfRooms is between 0-3 (/[^0-3/g)
        getEmploymentData(job);
        getLatAndLong(cityInput)
        
        console.log('function validateQuestionaireForm() ran');
    });
}

function getLatAndLong(cityInput){

    let cityForURL = encodeURIComponent(cityInput.trim())
    //^could have optionally used a regex expression
    //^optional vanilla method: replace("","%20"); with replace(/ /g,"%20");
    //^optional jQuery method: let cityForWeather = $.param(params);
    //^optional node method: const cityForWeather = require('cityForWeather'); let cityForWeather = cityForWeather.stringify(params);
    //^optional ES6 method: let cityForWeather = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    //^optional ES5 method: var queryString = Object.keys(params).map(function(key) {
                                                //     return key + '=' + params[key]
                                                // }).join('&');
    let geoCodeBaseURL = 'https://geocode.xyz/';
    let geoCodeEndPoint = '?json=1';
    let geoCodeURL = geoCodeBaseURL + cityForURL + geoCodeEndPoint;

    fetch(geoCodeURL)
    .then(response => response.json() )
    .then(responseJson => {
        let latt = responseJson.latt;
        let longt = responseJson.longt;
        getCityWeatherData(latt, longt, cityInput);
        let zState = responseJson.state_code;
        getRentalPriceData(cityForURL, numberOfBedrooms, zState);
        console.log(responseJson);
     } );
     

    console.log('function getLatAndLong() ran');
}

function getCityWeatherData(latt, longt, cityInput){
    
    let baseURLWeather = 'https://api.weatherbit.io/v2.0/current';
    let weatherAPIKey = '43212f971ccf447091711593c0157ad4';

    let forecastRequest = baseURLWeather + '?&lat=' + latt + '&lon=' + longt + '&key=' + weatherAPIKey;

    fetch(forecastRequest)
    .then(response => response.json() )
    .then(responseJson => fillWeatherDetails(responseJson, cityInput) );

    console.log('function getCityWeatherData(cityInput) ran');
}

function fillWeatherDetails(responseJson, cityInput){
    let displayTemp = ((responseJson.data[0].temp)*(9/5))+32;
    $('#currentWeather').empty();
    $('#currentWeather').append(`
    The current temperature in ${cityInput} is ${displayTemp}
    `)
    // let spring = "";
    // let summer = "";
    // let autumn = "";
    // let winter = "";

    moveToModelPage();

    console.log('function fillWeatherDetails() ran');
}

function getRentalPriceData(cityForURL, numberOfBedrooms, zState){
    let zillowBaseURL = 'https://www.zillow.com/webservice/GetRegionChildren.htm';
    let zwsidKey = 'X1-ZWz1hgfqxwr7yj_2qbsp';
    let zillowURL = zillowBaseURL + '?' + 'zws-id=' + zwsidKey + '&' + 'state=' + zState + '&' + 'city=' + cityForURL;
    console.log(zillowURL);
    // city=seattle&childtype=neighborhood
    fetch(zillowURL)
    let studio = "";
    let bdrm1 = "";
    let bdrm2 = "";
    let bdrm3 = "";
}

function getEmploymentData(job){

    let jobNums = "";
    let medIncome = "";
    let jobGrowth = "";
}

function moveToModelPage(){
    //puts info from above three functions into the dynamic html code
    //hides other pages, displays model page
    $('.questionairePage').addClass('hidden');
    $('.modelPage').removeClass('hidden');

    console.log('function moveToModelPage() ran');
}

function downloadModel(){

}

function printModel(){

}

function startNewModel(){
    //empties all dynamic changes to html
    //hides other pages, displays landing page
}

$(function runIt() {
    $(document).ready();
    console.log('Locked n Loaded');
    validateSignUpForm();
    validateQuestionaireForm();
});