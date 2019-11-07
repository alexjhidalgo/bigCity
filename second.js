'use strict'
function submitSignUpForm(){
    $('.signUpForm').on('submit', function(){
        event.preventDefault();
        let userName = document.getElementById('nameInput').value;
        addSignUpData(userName);
        console.log('function submitSignUpForm() ran')
    });
}
function addSignUpData(userName){
    $('#nameAndCityBanner').empty();
    $('#nameAndCityBanner').append(`
    <h1> Okay ${userName}, just a few more questions. </h1>
    `)
    moveToQuestionaire();
    console.log('function addSignUpData(userName) ran')
}
function moveToQuestionaire(){
    $('.signUpPage').addClass('hidden');
    $('.questionairePage').removeClass('hidden');
    console.log('function moveToQuestionaire() ran')
}
function validateQuestionaireForm(){
    $('.questionaireForm').on('submit', function(){
        event.preventDefault();
        let cityInput = document.getElementById('cityInput').value;
        getLatAndLong(cityInput)
        moveToModelPage();
        console.log('function validateQuestionaireForm() ran');
    });
}
function getLatAndLong(cityInput){
    let cityForURL = encodeURIComponent(cityInput.trim());
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
        let stateCodeInput = responseJson.data[0].state_code;
        fillWeatherDetails(responseJson, cityInput);
        // findRegionCode(cityInput, stateCodeInput);// may delete
        findJSState(stateCodeInput, cityInput);
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
function objectsInModel(currentObject){
    $('#askSummerHigh').empty();
    $('#askWinterHigh').empty();
    $('#summerHigh').empty();
    $('#summerLow').empty();
    $('#winterHigh').empty();
    $('#winterLow').empty();

    $('.averageRent').empty();

    $('#askSummerHigh').append(`
    The average high tempurature for ${currentObject.name} in July is:
    `);
    $('#askWinterHigh').append(`
    The average high tempurature for ${currentObject.name} in January is:
    `);
    $('#summerHigh').append(`
    ${currentObject.julHigh}
    `);
    $('#summerLow').append(`
    ${currentObject.julLow}
    `);
    $('#winterHigh').append(`
    ${currentObject.janHigh}
    `);
    $('#winterLow').append(`
    ${currentObject.janLow}
    `);

    $('.averageRent').append(`
    The average monthly rental cost in ${currentObject.name} is ${currentObject.rent}
    `);

    console.log('function objectsInModel() ran')
}
function findJSState(stateCodeInput, cityInput){
    for(let i = 0; i < STORE.states.length; i++){
        let stateCodeJS = STORE.states[i].abbreviation;
        if(stateCodeJS === stateCodeInput){
            let jsCities = STORE.states[i].cities;
            console.log('function findJSState() ran');
            findJSRegionCode(jsCities, cityInput);
        };
    };
}
function findJSRegionCode(jsCities, cityInput){
    let minimizedCityNameInput = cityInput.toLowerCase().replace(/\s+/g, '');
    for(let i = 0; i < jsCities.length; i++){
        let minimizedCityNameJS = jsCities[i].name.toLowerCase().replace(/\s+/g, '');
        if(minimizedCityNameJS === minimizedCityNameInput){
            let areaCode = jsCities[i].regionCode;
            let currentObject = jsCities[i];
            objectsInModel(currentObject);
            getBLSData(areaCode);
            console.log('function findJSCity() ran')
        };
    };
}
function getBLSData(areaCode){
    let baseURL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';
    let oeStats = 'OEUM';
    let blsAPIKey = 'registrationkey=9a3d2a4bbc27437eb9e632670aefb4cf';

    let rnMedianSalary = baseURL + oeStats + areaCode + '000000' + '291141' + '04' + '?' + blsAPIKey;
    let rnsWorkingPer1000Jobs = baseURL + oeStats + areaCode + '000000' + '291141' + '16' + '?' + blsAPIKey;
    let rnJobs = baseURL + oeStats + areaCode + '000000' + '291141' + '01' + '?' + blsAPIKey;

    let sweMedianSalary = baseURL + oeStats + areaCode + '000000' + '151132' + '04' + '?' + blsAPIKey;
    let swesWorkingPer1000Jobs = baseURL + oeStats + areaCode + '000000' + '151132' + '16' + '?' + blsAPIKey;
    let sweJobs = baseURL + oeStats + areaCode + '000000' + '151132' + '01' + '?' + blsAPIKey;

    let faMedianSalary = baseURL + oeStats + areaCode + '000000' + '132051' + '04' + '?' + blsAPIKey;
    let fasWorkingPer1000Jobs = baseURL + oeStats + areaCode + '000000' + '132051' + '16' + '?' + blsAPIKey;
    let faJobs = baseURL + oeStats + areaCode + '000000' + '132051' + '01' + '?' + blsAPIKey;

    fetch(rnMedianSalary)
        .then(response => response.json() )
        .then(responseJson => {
            let rnSalary = responseJson.Results.series[0].data[0].value;
            addRNSalaryToModel(rnSalary);
        });
    fetch(sweMedianSalary)
        .then(response => response.json() )
        .then(responseJson => {
            let sweSalary = responseJson.Results.series[0].data[0].value;
            addSWESalaryToModel(sweSalary);
        });
    fetch(faMedianSalary)
        .then(response => response.json() )
        .then(responseJson => {
            let faSalary = responseJson.Results.series[0].data[0].value;
            addFASalaryToModel(faSalary);
        });
    fetch(rnsWorkingPer1000Jobs)
        .then(response => response.json() )
        .then(responseJson => {
            let rnsPer1000 = responseJson.Results.series[0].data[0].value;
            addRNEmploymentToModel(rnsPer1000);
        });
    fetch(swesWorkingPer1000Jobs)
        .then(response => response.json() )
        .then(responseJson => {
            let swesPer1000 = responseJson.Results.series[0].data[0].value;
            addSWEEmploymentToModel(swesPer1000);
        });
    fetch(fasWorkingPer1000Jobs)
        .then(response => response.json() )
        .then(responseJson => {
            let fasPer1000 = responseJson.Results.series[0].data[0].value;
            addFAEmploymentToModel(fasPer1000);
        });
    fetch(rnJobs)
        .then(response => response.json() )
        .then(responseJson => {
            let rnJobsNum = responseJson.Results.series[0].data[0].value;
            addRNJobsNumToModel(rnJobsNum);
        });
    fetch(sweJobs)
        .then(response => response.json() )
        .then(responseJson => {
            let sweJobsNum = responseJson.Results.series[0].data[0].value;
            addSWEJobsNumToModel(sweJobsNum);
        });
    fetch(faJobs)
        .then(response => response.json() )
        .then(responseJson => {
            let faJobsNum = responseJson.Results.series[0].data[0].value;
            addFAJobsNumToModel(faJobsNum);
        });
    console.log('function getBLSData() ran');
}
function addRNSalaryToModel(rnSalary){
    let rnSalary2 = '$' + rnSalary.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    $('#meanIncomeValue1').empty();
    $('#meanIncomeValue1').append(rnSalary2);
}
function addSWESalaryToModel(sweSalary){
    let sweSalary2 = '$' + sweSalary.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    $('#meanIncomeValue2').empty();
    $('#meanIncomeValue2').append(sweSalary2);
}
function addFASalaryToModel(faSalary){
    let faSalary2 = '$' + faSalary.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    $('#meanIncomeValue3').empty();
    $('#meanIncomeValue3').append(faSalary2);
}
function addRNJobsNumToModel(rnJobsNum){
    let rnJobsNum2 = rnJobsNum.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    $('#numberOfJobsValue1').empty();
    $('#numberOfJobsValue1').append(rnJobsNum2);
}
function addSWEJobsNumToModel(sweJobsNum){
    let sweJobsNum2 = sweJobsNum.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    $('#numberOfJobsValue2').empty();
    $('#numberOfJobsValue2').append(sweJobsNum2);
}
function addFAJobsNumToModel(faJobsNum){
    let faJobsNum2 = faJobsNum.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    $('#numberOfJobsValue3').empty();
    $('#numberOfJobsValue3').append(faJobsNum2);
}
function addRNEmploymentToModel(rnsPer1000){
    $('#employmentValue1').empty();
    $('#employmentValue1').append(rnsPer1000 + '%');
}
function addSWEEmploymentToModel(swesPer1000){
    $('#employmentValue2').empty();
    $('#employmentValue2').append(swesPer1000 + '%');
}
function addFAEmploymentToModel(fasPer1000){
    $('#employmentValue3').empty();
    $('#employmentValue3').append(fasPer1000 + '%');
}

function moveToModelPage(){
    $('.modelPage').removeClass('hidden');
    $('.questionairePage').addClass('hidden');
    console.log('function moveToModelPage() ran')
}





$(function runIt() {
    $(document).ready();
    console.log('Locked n Loaded');
    submitSignUpForm();
    validateQuestionaireForm();
});









const STORE = {
    states: [
    {
        abbreviation: 'NY',
        cities: [{
            name: 'New York City',
            regionCode: '0035620',
            julHigh: '85',
            julLow: '70',
            janHigh:'39',
            janLow: '26',
            rent: '$1,340'
        }]

    },
    {
        abbreviation: 'CA',
        cities: [{
            name: 'Los Angeles',
            regionCode: '0031080',
            julHigh: '77',
            julLow: '62',
            janHigh:'67',
            janLow: '51',
            rent: '$1,302'
        },
        {
            name: 'San Diego',
            regionCode: '0041740',
            julHigh: '75',
            julLow: '65',
            janHigh:'65',
            janLow: '49',
            rent: '$1,500'
        },
        {
            name: 'San Jose',
            regionCode: '0041940',
            julHigh: '84',
            julLow: '58',
            janHigh:'60',
            janLow: '42',
            rent: '$1,800'
        },
        {
            name: 'San Francisco',
            regionCode: '0041860',
            julHigh: '67',
            julLow: '54',
            janHigh:'57',
            janLow: '46',
            rent: '$1,700'
        }]
    },
    {
        abbreviation: 'IL',
        cities: [{
            name: 'Chicago',
            regionCode: '0016980',
            julHigh: '84',
            julLow: '68',
            janHigh:'32',
            janLow: '18',
            rent: '$1,021'
        }]
    },
    {
        abbreviation: 'TX',
        cities: [{
            name: 'Houston',
            regionCode: '0026420',
            julHigh: '92',
            julLow: '74',
            janHigh:'62',
            janLow: '44',
            rent: '$940'
        },
        {
            name: 'San Antonio',
            regionCode: '0041700',
            julHigh: '95',
            julLow: '74',
            janHigh:'62',
            janLow: '39',
            rent: '$918'
        },
        {
            name: 'Dallas',
            regionCode: '0019100',
            julHigh: '95',
            julLow: '71',
            janHigh:'57',
            janLow: '30',
            rent: '$937'
        },
        {
            name: 'Austin',
            regionCode: '0012420',
            julHigh: '96',
            julLow: '74',
            janHigh:'62',
            janLow: '42',
            rent: '$1,165'
        },
        {
            name: 'Fort Worth',
            regionCode: '0019100',
            julHigh: '96',
            julLow: '74',
            janHigh:'57',
            janLow: '33',
            rent: '$967'
        },
        {
            name: 'El Paso',
            regionCode: '0021340',
            julHigh: '95',
            julLow: '71',
            janHigh:'58',
            janLow: '33',
            rent: '$792'
        }]
    },
    {
        abbreviation: 'AZ',
        cities: [{
            name: 'Phoenix',
            regionCode: '0038060',
            julHigh: '106',
            julLow: '83',
            janHigh:'67',
            janLow: '46',
            rent: '$954'
        }]
    },
    {
        abbreviation: 'PA',
        cities: [{
            name: 'Philadelphia',
            regionCode: '0037980',
            julHigh: '87',
            julLow: '69',
            janHigh:'40',
            janLow: '26',
            rent: '$970'
        }]
    },
    {
        abbreviation: 'FL',
        cities: [{
            name: 'Jacksonville',
            regionCode: '0027260',
            julHigh: '92',
            julLow: '71',
            janHigh:'65',
            janLow: '39',
            rent: '$984'
        }]
    },
    {
        abbreviation: 'OH',
        cities: [{
            name: 'Columbus',
            regionCode: '0018140',
            julHigh: '85',
            julLow: '65',
            janHigh:'36',
            janLow: '20',
            rent: '$889'
        }]
    },
    {
        abbreviation: 'NC',
        cities: [{
            name: 'Charlotte',
            regionCode: '0016740',
            julHigh: '89',
            julLow: '68',
            janHigh:'51',
            janLow: '30',
            rent: '$1,018'
        }]
    },
    {
        abbreviation: 'IN',
        cities: [{
            name: 'Indianapolis',
            regionCode: '0026900',
            julHigh: '85',
            julLow: '66',
            janHigh:'36',
            janLow: '20',
            rent: '$840'
        }]
    },
    {
        abbreviation: 'WA',
        cities: [{
            name: 'Seattle',
            regionCode: '0042660',
            julHigh: '76',
            julLow: '56',
            janHigh:'47',
            janLow: '37',
            rent: '$1,377'
        }]
    },
    {
        abbreviation: 'CO',
        cities: [{
            name: 'Denver',
            regionCode: '0019740',
            julHigh: '90',
            julLow: '59',
            janHigh:'45',
            janLow: '18',
            rent: '$1,131'
        }]
    },
    {
        abbreviation: 'DC',
        cities: [{
            name: 'Washington DC',
            regionCode: '0047900',
            julHigh: '87',
            julLow: '68',
            janHigh:'42',
            janLow: '27',
            rent: '$1,424'
        }]
    },
    {
        abbreviation: 'MA',
        cities: [{
            name: 'Boston',
            regionCode: '0071650',
            julHigh: '81',
            julLow: '65',
            janHigh:'36',
            janLow: '22',
            rent: '$1,445'
        }]
    },
    ]
}