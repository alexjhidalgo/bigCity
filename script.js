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
        getLatAndLong(cityInput)
        
        console.log('function validateQuestionaireForm() ran');
    });
}
function getLatAndLong(cityInput){
    let cityForURL = encodeURIComponent(cityInput.trim())
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
function getCityWeatherData(latt, longt, cityInput, ){
    
    let baseURLWeather = 'https://api.weatherbit.io/v2.0/current';
    let weatherAPIKey = '43212f971ccf447091711593c0157ad4';

    let forecastRequest = baseURLWeather + '?&lat=' + latt + '&lon=' + longt + '&key=' + weatherAPIKey;

    fetch(forecastRequest)
    .then(response => response.json() )
    .then(responseJson => {
        fillWeatherDetails(responseJson, cityInput);
        let zState = responseJson.data[0].state_code;
        getRentalPriceData(cityInput, zState);
    });

    console.log('function getCityWeatherData(cityInput) ran');
}
function fillWeatherDetails(responseJson, cityInput){
    let displayTemp = ((responseJson.data[0].temp)*(9/5))+32;
    $('#currentWeather').empty();
    $('#currentWeather').append(`
    The current temperature in ${cityInput} is ${displayTemp}
    `)
    
    console.log('function fillWeatherDetails() ran');
}
function getRentalPriceData(cityInput, zState){
    
    // for (let i = 0; i < STORE.states.length; i++){
        let test = STORE.states[1].abbreviation;

        console.log(test);
        console.log(zState);


        // if (STORE.states[i].stateAbbreviation == zState){
        //     let stateObject = STORE.states[i];
        //     let cityForSTORE = cityInput.replace(/\s+/g, '-').toLowerCase();
        //     regionCodeFinder(stateObject, cityForSTORE);
        //     console.log('function getRentalPriceData() ran');
        // }
    // }
}
function regionCodeFinder(stateObject, cityForSTORE){
    
    for (let i = 0; i < stateObject.length; i++){
        if (stateObject.city[i].name.is === cityForSTORE){
            let areaCode = stateObject.city[i].regionSeriesCode;
            getEmploymentData(areaCode);
        }
    }
}
function getEmploymentData(areaCode){

    let baseBLSURL = 'https://api.bls.gov/publicAPI/v1/timeseries/data/';
    let oeStats = 'OEUM'
    
    let rnMedianSalary = baseBLSURL + oeStats + areaCode + '622000' + '291141' + '13';
    let rnPer1000 = baseBLSURL + oeStats + areaCode + '622000' + '291141' + '16';

    let sweMedianSalary = baseBLSURL + oeStats + areaCode + '000000' + '151130' + '13';
    let swePer1000 = baseBLSURL + oeStats + areaCode + '000000' + '151130' + '16';

    let fasMedianSalary = baseBLSURL + oeStats + areaCode + '52--53' + '132051' + '13';
    let fasPer1000 = baseBLSURL + oeStats + areaCode + '52--53' + '132051' + '16';
    
    fillEmploymentData(rnMedianSalary,rnPer1000,sweMedianSalary,swePer1000,fasMedianSalary,fasPer1000)
}
function fillEmploymentData(rnMedianSalary,rnPer1000,sweMedianSalary,swePer1000,fasMedianSalary,fasPer1000){
    console.log(rnMedianSalary,rnPer1000,sweMedianSalary,swePer1000,fasMedianSalary,fasPer1000)

    moveToModelPage();
}
function moveToModelPage(){
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







































// function validateQuestionaireForm(){
//     $('.questionaireForm').on('submit', function(){
//         event.preventDefault();
//         let cityInput = document.getElementById('cityInput').value;
//         // let numberOfBedrooms = document.getElementById('numberOfBedrooms').value; 
//         // let job = document.getElementById('jobTitle').value;
//         //perhaps use an if/or statement to make sure numberOfRooms is between 0-3 (/[^0-3/g)
//         // getEmploymentData(job);
//         getLatAndLong(cityInput)
        
//         console.log('function validateQuestionaireForm() ran');
//     });
// }

// function getLatAndLong(cityInput){

//     let cityForURL = encodeURIComponent(cityInput.trim())
//     //^could have optionally used a regex expression
//     //^optional vanilla method: replace("","%20"); with replace(/ /g,"%20");
//     //^optional jQuery method: let cityForWeather = $.param(params);
//     //^optional node method: const cityForWeather = require('cityForWeather'); let cityForWeather = cityForWeather.stringify(params);
//     //^optional ES6 method: let cityForWeather = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//     //^optional ES5 method: var queryString = Object.keys(params).map(function(key) {
//                                                 //     return key + '=' + params[key]
//                                                 // }).join('&');
//     let geoCodeBaseURL = 'https://geocode.xyz/';
//     let geoCodeEndPoint = '?json=1';
//     let geoCodeURL = geoCodeBaseURL + cityForURL + geoCodeEndPoint;

//     fetch(geoCodeURL)
//     .then(response => response.json() )
//     .then(responseJson => {
//         let latt = responseJson.latt;
//         let longt = responseJson.longt;
//         getCityWeatherData(latt, longt, cityInput, cityForURL);
        

//         console.log(responseJson);
//      } );
     

//     console.log('function getLatAndLong() ran');
// }



// // https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000000000015113001?registrationkey=9a3d2a4bbc27437eb9e632670aefb4cf
// // https://api.bls.gov/publicAPI/v2/timeseries/data/LAUCN040010000000005?registrationkey=9a3d2a4bbc27437eb9e632670aefb4cf


// function getRentalPriceData(cityForURL, zState){
//     // let zillowBaseURL = 'https://www.zillow.com/webservice/GetRegionChildren.htm';
//     // let zwsidKey = 'X1-ZWz1hgfqxwr7yj_2qbsp';
//     // let zillowURL = zillowBaseURL + '?' + 'zws-id=' + zwsidKey + '&' + 'state=' + zState + '&' + 'city=' + cityForURL;
//     // console.log(zillowURL);
//     // city=seattle&childtype=neighborhood
//     // fetch(zillowURL)
//     // let studio = "";
//     // let bdrm1 = "";
//     // let bdrm2 = "";
//     // let bdrm3 = "";
//     for (let i = 0; i < STORE.states.length; i++){
//         if (STORE.states[i].stateAbbreviation === zState){
//             let stateObject = STORE.states[i];
//             let cityForSTORE = cityForURL.replace(/[^a-zA-Z0-9-]/g, '')
//             getEmploymentData(stateObject);

//         }
//     }

// }




// function addStoreData(){

// }

// function moveToModelPage(){
//     //puts info from above three functions into the dynamic html code
//     //hides other pages, displays model page
//     $('.questionairePage').addClass('hidden');
//     $('.modelPage').removeClass('hidden');

//     console.log('function moveToModelPage() ran');
// }

// function downloadModel(){

// }

// function printModel(){

// }

// function startNewModel(){
//     //empties all dynamic changes to html
//     //hides other pages, displays landing page
// }

// $(function runIt() {
//     $(document).ready();
//     console.log('Locked n Loaded');
//     validateSignUpForm();
//     validateQuestionaireForm();
// });













































const STORE = 
    {states: [
        {
            state : [
                {abbreviation: 'NY'},
                {city: [
                    {name: [
                        {is : 'new-york-city'},
                        {averageRent: '$1,340'},
                        {regionSeriesCode : '0035620'},
                        {jobs: [
                            {softwareEngineer: '$107,000'},
                            {registeredNurse: '$84,000'},
                            {financialAnalyst: '$73,000'} ]
                        },
                        {weather: [
                            {summerAvgs: [
                                {high: '85'},
                                {low: '70'} ]
                            },
                            {winterAvgs: [
                                {high: '39'},
                                {low: '26'} ]
                            }
                        ]}
                    ]}
                ]}
            ]
        },
        {
            state : [
            {abbreviation : 'CA'},
            {city: [ 
                {name: [
                    {is : 'los-angeles'},
                    {averageRent:'$1,302'},
                    {regionSeriesCode : '0031080'},
                    {jobs: [
                        {softwareEngineer: '$101,000'},
                        {registeredNurse: '$88,000'},
                        {financialAnalyst: '$68,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '77'},
                            {low: '62'}
                        ]},
                        {winterAvgs: [
                            {high: '67'},
                            {low: '51'}
                        ]}
                    ]}
                ]}
            ]},
            {city : [
                {name: [
                    {is : 'san-diego'},
                    {averageRent:'$1,500'},
                    {regionSeriesCode : '0041740'},
                    {jobs: [
                        {softwareEngineer: '$101,000'},
                        {registeredNurse: '$88,000'},
                        {financialAnalyst: '$66,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '75'},
                            {low: '65'}
                        ]},
                        {winterAvgs: [
                            {high: '65'},
                            {low: '49'}
                        ]}
                    ]}
                ]}
            ]},
            {city : [
                {name: [
                    {is : 'san-jose'},
                    {averageRent:'$1,800'},
                    {regionSeriesCode : '0041940'},
                    {jobs: [
                        {softwareEngineer: '$125,000'},
                        {registeredNurse: '$129,000'},
                        {financialAnalyst: '$82,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '84'},
                            {low: '58'}
                        ]},
                        {winterAvgs: [
                            {high: '60'},
                            {low: '42'}
                        ]}
                    ]}
                ]}
            ]},
            {city : [
                {name: [
                    {is : 'san-francisco'},
                    {averageRent:'$1,700'},
                    {regionSeriesCode : '0041860'},
                    {jobs: [
                        {softwareEngineer: '$126,000'},
                        {registeredNurse: '$120,000'},
                        {financialAnalyst: '$79,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '67'},
                            {low: '54'}
                        ]},
                        {winterAvgs: [
                            {high: '57'},
                            {low: '46'}
                        ]}
                    ]}
                ]}
            ]}
        ]
    }
]}

    //     {illinois: [
    //         {stateAbbreviation : 'IL'},
    //         {city: [
    //             {name: [
    //                 {is : 'chicago'},
    //                 {averageRent:'$1,021'},
    //                 {regionSeriesCode : '0016980'},
    //                 {jobs: [
    //                     {softwareEngineer: '$90,000'},
    //                     {registeredNurse: '$66,000'},
    //                     {financialAnalyst: '$65,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '84'},
    //                         {low: '68'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '32'},
    //                         {low: '18'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {texas: [
    //         {stateAbbreviation : 'TX'},
    //         {city: [                
    //             {name: [
    //                 {is : 'houston'},
    //                 {averageRent:'$940'},
    //                 {regionSeriesCode : '0026420'},
    //                 {jobs: [
    //                     {softwareEngineer: '$87,000'},
    //                     {registeredNurse: '$70,000'},
    //                     {financialAnalyst: '$67,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '92'},
    //                         {low: '74'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '62'},
    //                         {low: '44'}
    //                     ]}
    //                 ]}
    //             ]},
    //             {name: [
    //                 {is : 'san-antonio'},
    //                 {averageRent:'$918'},
    //                 {regionSeriesCode : '0041700'},
    //                 {jobs: [
    //                     {softwareEngineer: '$85,000'},
    //                     {registeredNurse: '$61,000'},
    //                     {financialAnalyst: '$62,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '95'},
    //                         {low: '74'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '62'},
    //                         {low: '39'}
    //                     ]}
    //                 ]}
    //             ]},
    //             {name: [
    //                 {is : 'dallas'},
    //                 {averageRent:'$937'},
    //                 {regionSeriesCode : '0019100'},
    //                 {jobs: [
    //                     {softwareEngineer: '$88,000'},
    //                     {registeredNurse: '$66,000'},
    //                     {financialAnalyst: '$65,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '95'},
    //                         {low: '71'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '57'},
    //                         {low: '30'}
    //                     ]}
    //                 ]}
    //             ]},
    //             {name: [
    //                 {is : 'austin'},
    //                 {averageRent:'$1,165'},
    //                 {regionSeriesCode : '0012420'},
    //                 {jobs: [
    //                     {softwareEngineer: '$90,000'},
    //                     {registeredNurse: '$61,000'},
    //                     {financialAnalyst: '$63,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '96'},
    //                         {low: '74'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '62'},
    //                         {low: '42'}
    //                     ]}
    //                 ]}
    //             ]},
    //             {name: [
    //                 {is : 'fort-worth'},
    //                 {averageRent:'$967'},
    //                 {regionSeriesCode : '0019100'},
    //                 {jobs: [
    //                     {softwareEngineer: '$88,000'},
    //                     {registeredNurse: '$66,000'},
    //                     {financialAnalyst: '$65,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '96'},
    //                         {low: '74'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '57'},
    //                         {low: '33'}
    //                     ]}
    //                 ]}
    //             ]},
    //             {name: [
    //                 {is : 'el-paso'},
    //                 {averageRent:'$792'},
    //                 {regionSeriesCode : '0021340'},
    //                 {jobs: [
    //                     {softwareEngineer: '$55,000'},
    //                     {registeredNurse: '$62,000'},
    //                     {financialAnalyst: '$55,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '95'},
    //                         {low: '71'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '58'},
    //                         {low: '33'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {arizona: [
    //         {stateAbbreviation : 'AZ'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'phoenix'},
    //                 {averageRent:'$954'},
    //                 {regionSeriesCode : '0038060'},
    //                 {jobs: [
    //                     {softwareEngineer: '$88,000'},
    //                     {registeredNurse: '$67,000'},
    //                     {financialAnalyst: '$62,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '106'},
    //                         {low: '83'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '67'},
    //                         {low: '46'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {pennsylvania: [
    //         {stateAbbreviation : 'PA'},
    //         {city: [
    //             {name: [
    //                 {is : 'philadelphia'},
    //                 {averagerent:'$970'},
    //                 {regionSeriesCode : '0037980'},
    //                 {jobs: [
    //                     {softwareEngineer: '$89,000'},
    //                     {registeredNurse: '$71,000'},
    //                     {financialAnalyst: '$62,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '87'},
    //                         {low: '69'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '40'},
    //                         {low: '26'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {florida: [
    //         {stateAbbreviation : 'FL'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'jacksonville'},
    //                 {averagerent:'$984'},
    //                 {regionSeriesCode : '0027260'},
    //                 {jobs: [
    //                     {softwareEngineer: '$81,000'},
    //                     {registeredNurse: '$57,000'},
    //                     {financialAnalyst: '$57,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '92'},
    //                         {low: '71'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '65'},
    //                         {low: '39'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {ohio: [
    //         {stateAbbreviation : 'OH'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'columbus'},
    //                 {averagerent:'$889'},
    //                 {regionSeriesCode : '0018140'},
    //                 {jobs: [
    //                     {softwareEngineer: '$81,000'},
    //                     {registeredNurse: '$60,000'},
    //                     {financialAnalyst: '$61,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '85'},
    //                         {low: '65'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '36'},
    //                         {low: '20'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {'north-carolina': [
    //         {stateAbbreviation : 'NC'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'charlotte'},
    //                 {averagerent:'$1,018'},
    //                 {regionSeriesCode : '0016740'},
    //                 {jobs: [
    //                     {softwareEngineer: '$83,000'},
    //                     {registeredNurse: '$54,000'},
    //                     {financialAnalyst: '$65,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '89'},
    //                         {low: '68'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '51'},
    //                         {low: '30'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {indiana: [
    //         {stateAbbreviation : 'IN'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'indianapolis'},
    //                 {averagerent:'$840'},
    //                 {regionSeriesCode : '0026900'},
    //                 {jobs: [
    //                     {softwareEngineer: '$81,000'},
    //                     {registeredNurse: '$57,000'},
    //                     {financialAnalyst: '$60,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '85'},
    //                         {low: '66'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '36'},
    //                         {low: '20'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {washington: [
    //         {stateAbbreviation : 'WA'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'seattle'},
    //                 {averagerent:'$1,377'},
    //                 {regionSeriesCode : '0042660'},
    //                 {jobs: [
    //                     {softwareEngineer: '$116,000'},
    //                     {registeredNurse: '$74,000'},
    //                     {financialAnalyst: '$69,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '76'},
    //                         {low: '56'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '47'},
    //                         {low: '37'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {colorado: [
    //         {stateAbbreviation : 'CO'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'denver'},
    //                 {averagerent:'$1,131'},
    //                 {regionSeriesCode : '0019740'},
    //                 {jobs: [
    //                     {softwareEngineer: '$90,000'},
    //                     {registeredNurse: '$64,000'},
    //                     {financialAnalyst: '$64,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '90'},
    //                         {low: '59'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '45'},
    //                         {low: '18'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {WashingtonDC: [
    //         {stateAbbreviation : 'DC'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'washington-dc'},
    //                 {averagerent:'$1,424'},
    //                 {regionSeriesCode : '0047900'},
    //                 {jobs: [
    //                     {softwareEngineer: '$99,000'},
    //                     {registeredNurse: '$68,000'},
    //                     {financialAnalyst: '$70,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '87'},
    //                         {low: '68'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '42'},
    //                         {low: '27'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]},
    //     {massachusetts: [
    //         {stateAbbreviation : 'MA'},
    //         {city: [ 
    //             {name: [
    //                 {is : 'boston'},
    //                 {averagerent:'$1,445'},
    //                 {regionSeriesCode : '0071650'},
    //                 {jobs: [
    //                     {softwareEngineer: '$99,000'},
    //                     {registeredNurse: '$73,000'},
    //                     {financialAnalyst: '$65,000'}
    //                 ]},
    //                 {weather: [
    //                     {summerAvgs: [
    //                         {high: '81'},
    //                         {low: '65'}
    //                     ]},
    //                     {winterAvgs: [
    //                         {high: '36'},
    //                         {low: '22'}
    //                     ]}
    //                 ]}
    //             ]}
    //         ]}
    //     ]}
    // ]}

    //   // This object could use some restructuring. the names of cities should be values of a key named 'cityname', 
    //     // as should the state names. This requiring more nesting.


    //     // {'New York': [     This is the info I wish deliver. I must de-scope this project to make it deliverable.
    //     //     {stateAbbreviation : 'NY'},
    //     //     {'New York City': [
    //     //         {rents:[
    //     //             {studio: },
    //     //             {oneBed: },
    //     //             {twoBed: },
    //     //             {threeBed: }
    //     //         ]},
    //     //         {jobs: [
    //     //             {job1: [
    //     //                 {availableJobs: },
    //     //                 {medianSalary: },
    //     //                 {jobGrowth: }
    //     //             ]},
    //     //             {job2: [
    //     //                 {availableJobs: },
    //     //                 {medianSalary: },
    //     //                 {jobGrowth: }
    //     //             ]},
    //     //             {job3: [
    //     //                 {availableJobs: },
    //     //                 {medianSalary: },
    //     //                 {jobGrowth: }
    //     //             ]},
    //     //         ]},
    //     //         {weather: [
    //     //             {summerAvgs: [
    //     //                 {high: },
    //     //                 {low: }
    //     //             ]},
    //     //             {winterAvgs: [
    //     //                 {high: },
    //     //                 {low: }
    //     //             ]}
    //     //         ]}
    //     //     ]}
    //     // ]},