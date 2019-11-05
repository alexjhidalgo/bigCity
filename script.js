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
        // let numberOfBedrooms = document.getElementById('numberOfBedrooms').value; 
        // let job = document.getElementById('jobTitle').value;
        //perhaps use an if/or statement to make sure numberOfRooms is between 0-3 (/[^0-3/g)
        // getEmploymentData(job);
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
        getCityWeatherData(latt, longt, cityInput, cityForURL);
        

        console.log(responseJson);
     } );
     

    console.log('function getLatAndLong() ran');
}

function getCityWeatherData(latt, longt, cityInput, cityForURL){
    
    let baseURLWeather = 'https://api.weatherbit.io/v2.0/current';
    let weatherAPIKey = '43212f971ccf447091711593c0157ad4';

    let forecastRequest = baseURLWeather + '?&lat=' + latt + '&lon=' + longt + '&key=' + weatherAPIKey;

    fetch(forecastRequest)
    .then(response => response.json() )
    .then(responseJson => {
        fillWeatherDetails(responseJson, cityInput);
        let zState = responseJson.data[0].state_code;
        getRentalPriceData(cityForURL, zState);
        console.log(zState);
    });

    console.log('function getCityWeatherData(cityInput) ran');
}

function fillWeatherDetails(responseJson, cityInput){
    let displayTemp = ((responseJson.data[0].temp)*(9/5))+32;
    $('#currentWeather').empty();
    $('#currentWeather').append(`
    The current temperature in ${cityInput} is ${displayTemp}
    `)
    let spring = "";
    let summer = "";
    let autumn = "";
    let winter = "";

    moveToModelPage();

    console.log('function fillWeatherDetails() ran');
}






function getBLSCodes(){

    fetch({"seriesid": ['CUUR0000SA0','SUUR0000SA0'],"startyear":"2011", "endyear":"2014"})

    let stateCode = responseJson.stateOf(cityInput) //pseudocode

    let nationalCompURL = 'NCU'  
}












// https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000000000015113001?registrationkey=9a3d2a4bbc27437eb9e632670aefb4cf
// https://api.bls.gov/publicAPI/v2/timeseries/data/LAUCN040010000000005?registrationkey=9a3d2a4bbc27437eb9e632670aefb4cf


function getRentalPriceData(cityForURL, zState){
    // let zillowBaseURL = 'https://www.zillow.com/webservice/GetRegionChildren.htm';
    // let zwsidKey = 'X1-ZWz1hgfqxwr7yj_2qbsp';
    // let zillowURL = zillowBaseURL + '?' + 'zws-id=' + zwsidKey + '&' + 'state=' + zState + '&' + 'city=' + cityForURL;
    // console.log(zillowURL);
    // city=seattle&childtype=neighborhood
    // fetch(zillowURL)
    // let studio = "";
    // let bdrm1 = "";
    // let bdrm2 = "";
    // let bdrm3 = "";

}

function getEmploymentData(job){
    let jobMinimized = job.value
    let jobNums = "";
    let medIncome = "";
    let jobGrowth = "";
}

function addStoreData(){

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