const STORE = {
    states: [
        // This object could use some restructuring. the names of cities should be values of a key named 'cityname', 
        // as should the state names. This requiring more nesting.


        // {'New York': [     This is the info I wish deliver. I must de-scope this project to make it deliverable.
        //     {stateAbbreviation : 'NY'},
        //     {'New York City': [
        //         {rents:[
        //             {studio: },
        //             {oneBed: },
        //             {twoBed: },
        //             {threeBed: }
        //         ]},
        //         {jobs: [
        //             {job1: [
        //                 {availableJobs: },
        //                 {medianSalary: },
        //                 {jobGrowth: }
        //             ]},
        //             {job2: [
        //                 {availableJobs: },
        //                 {medianSalary: },
        //                 {jobGrowth: }
        //             ]},
        //             {job3: [
        //                 {availableJobs: },
        //                 {medianSalary: },
        //                 {jobGrowth: }
        //             ]},
        //         ]},
        //         {weather: [
        //             {summerAvgs: [
        //                 {high: },
        //                 {low: }
        //             ]},
        //             {winterAvgs: [
        //                 {high: },
        //                 {low: }
        //             ]}
        //         ]}
        //     ]}
        // ]},
        {newYork: [
            {stateAbbreviation : 'NY'},
            {city: [
                {name: [
                    {is : 'new-york'||'new-york-city'},
                    {averageRent: '$1,340'},
                    {regionSeriesCode : '0035620'},
                    {jobs: [
                        {softwareEngineer: '$107,000'},
                        {registeredNurse: '$84,000'},
                        {financialAnalyst: '$73,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '85'},
                            {low: '70'}
                        ]},
                        {winterAvgs: [
                            {high: '39'},
                            {low: '26'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {california: [
            {stateAbbreviation : 'CA'},
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
                ]},
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
                ]},
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
                ]},
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
        ]},
        {illinois: [
            {stateAbbreviation : 'IL'},
            {regionSeriesCode : '0016980'},
            {city: [
                {name: [
                    {is : 'chicago'},
                    {averageRent:'$1,021'},
                    {jobs: [
                        {softwareEngineer: '$90,000'},
                        {registeredNurse: '$66,000'},
                        {financialAnalyst: '$65,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '84'},
                            {low: '68'}
                        ]},
                        {winterAvgs: [
                            {high: '32'},
                            {low: '18'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {texas: [
            {stateAbbreviation : 'TX'},
            {city: [                
                {name: [
                    {is : 'houston'},
                    {averageRent:'$940'},
                    {regionSeriesCode : '0026420'},
                    {jobs: [
                        {softwareEngineer: '$87,000'},
                        {registeredNurse: '$70,000'},
                        {financialAnalyst: '$67,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '92'},
                            {low: '74'}
                        ]},
                        {winterAvgs: [
                            {high: '62'},
                            {low: '44'}
                        ]}
                    ]}
                ]},
                {name: [
                    {is : 'san-antonio'},
                    {averageRent:'$918'},
                    {regionSeriesCode : '0041700'},
                    {jobs: [
                        {softwareEngineer: '$85,000'},
                        {registeredNurse: '$61,000'},
                        {financialAnalyst: '$62,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '95'},
                            {low: '74'}
                        ]},
                        {winterAvgs: [
                            {high: '62'},
                            {low: '39'}
                        ]}
                    ]}
                ]},
                {name: [
                    {is : 'dallas'},
                    {averageRent:'$937'},
                    {regionSeriesCode : '0019100'},
                    {jobs: [
                        {softwareEngineer: '$88,000'},
                        {registeredNurse: '$66,000'},
                        {financialAnalyst: '$65,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '95'},
                            {low: '71'}
                        ]},
                        {winterAvgs: [
                            {high: '57'},
                            {low: '30'}
                        ]}
                    ]}
                ]},
                {name: [
                    {is : 'austin'},
                    {averageRent:'$1,165'},
                    {regionSeriesCode : '0012420'},
                    {jobs: [
                        {softwareEngineer: '$90,000'},
                        {registeredNurse: '$61,000'},
                        {financialAnalyst: '$63,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '96'},
                            {low: '74'}
                        ]},
                        {winterAvgs: [
                            {high: '62'},
                            {low: '42'}
                        ]}
                    ]}
                ]},
                {name: [
                    {is : 'fort-worth'},
                    {averageRent:'$967'},
                    {regionSeriesCode : '0019100'},
                    {jobs: [
                        {softwareEngineer: '$88,000'},
                        {registeredNurse: '$66,000'},
                        {financialAnalyst: '$65,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '96'},
                            {low: '74'}
                        ]},
                        {winterAvgs: [
                            {high: '57'},
                            {low: '33'}
                        ]}
                    ]}
                ]},
                {name: [
                    {is : 'el-paso'},
                    {averageRent:'$792'},
                    {regionSeriesCode : '0021340'},
                    {jobs: [
                        {softwareEngineer: '$55,000'},
                        {registeredNurse: '$62,000'},
                        {financialAnalyst: '$55,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '95'},
                            {low: '71'}
                        ]},
                        {winterAvgs: [
                            {high: '58'},
                            {low: '33'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {arizona: [
            {stateAbbreviation : 'AZ'},
            {city: [ 
                {name: [
                    {is : 'phoenix'},
                    {averageRent:'$954'},
                    {regionSeriesCode : '0038060'},
                    {jobs: [
                        {softwareEngineer: '$88,000'},
                        {registeredNurse: '$67,000'},
                        {financialAnalyst: '$62,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '106'},
                            {low: '83'}
                        ]},
                        {winterAvgs: [
                            {high: '67'},
                            {low: '46'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {pennsylvania: [
            {stateAbbreviation : 'PA'},
            {city: [
                {name: [
                    {is : 'philadelphia'},
                    {averagerent:'$970'},
                    {regionSeriesCode : '0037980'},
                    {jobs: [
                        {softwareEngineer: '$89,000'},
                        {registeredNurse: '$71,000'},
                        {financialAnalyst: '$62,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '87'},
                            {low: '69'}
                        ]},
                        {winterAvgs: [
                            {high: '40'},
                            {low: '26'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {florida: [
            {stateAbbreviation : 'FL'},
            {city: [ 
                {name: [
                    {is : 'jacksonville'},
                    {averagerent:'$984'},
                    {regionSeriesCode : '0027260'},
                    {jobs: [
                        {softwareEngineer: '$81,000'},
                        {registeredNurse: '$57,000'},
                        {financialAnalyst: '$57,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '92'},
                            {low: '71'}
                        ]},
                        {winterAvgs: [
                            {high: '65'},
                            {low: '39'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {ohio: [
            {stateAbbreviation : 'OH'},
            {city: [ 
                {name: [
                    {is : 'columbus'},
                    {averagerent:'$889'},
                    {regionSeriesCode : '0018140'},
                    {jobs: [
                        {softwareEngineer: '$81,000'},
                        {registeredNurse: '$60,000'},
                        {financialAnalyst: '$61,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '85'},
                            {low: '65'}
                        ]},
                        {winterAvgs: [
                            {high: '36'},
                            {low: '20'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {'north-carolina': [
            {stateAbbreviation : 'NC'},
            {city: [ 
                {name: [
                    {is : 'charlotte'},
                    {averagerent:'$1,018'},
                    {regionSeriesCode : '0016740'},
                    {jobs: [
                        {softwareEngineer: '$83,000'},
                        {registeredNurse: '$54,000'},
                        {financialAnalyst: '$65,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '89'},
                            {low: '68'}
                        ]},
                        {winterAvgs: [
                            {high: '51'},
                            {low: '30'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {indiana: [
            {stateAbbreviation : 'IN'},
            {city: [ 
                {name: [
                    {is : 'indianapolis'},
                    {averagerent:'$840'},
                    {regionSeriesCode : '0026900'},
                    {jobs: [
                        {softwareEngineer: '$81,000'},
                        {registeredNurse: '$57,000'},
                        {financialAnalyst: '$60,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '85'},
                            {low: '66'}
                        ]},
                        {winterAvgs: [
                            {high: '36'},
                            {low: '20'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {washington: [
            {stateAbbreviation : 'WA'},
            {city: [ 
                {name: [
                    {is : 'seattle'},
                    {averagerent:'$1,377'},
                    {regionSeriesCode : '0042660'},
                    {jobs: [
                        {softwareEngineer: '$116,000'},
                        {registeredNurse: '$74,000'},
                        {financialAnalyst: '$69,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '76'},
                            {low: '56'}
                        ]},
                        {winterAvgs: [
                            {high: '47'},
                            {low: '37'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {colorado: [
            {stateAbbreviation : 'CO'},
            {city: [ 
                {name: [
                    {is : 'denver'},
                    {averagerent:'$1,131'},
                    {regionSeriesCode : '0019740'},
                    {jobs: [
                        {softwareEngineer: '$90,000'},
                        {registeredNurse: '$64,000'},
                        {financialAnalyst: '$64,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '90'},
                            {low: '59'}
                        ]},
                        {winterAvgs: [
                            {high: '45'},
                            {low: '18'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {WashingtonDC: [
            {stateAbbreviation : 'DC'},
            {city: [ 
                {name: [
                    {is : 'washington-dc'},
                    {averagerent:'$1,424'},
                    {regionSeriesCode : '0047900'},
                    {jobs: [
                        {softwareEngineer: '$99,000'},
                        {registeredNurse: '$68,000'},
                        {financialAnalyst: '$70,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '87'},
                            {low: '68'}
                        ]},
                        {winterAvgs: [
                            {high: '42'},
                            {low: '27'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {massachusetts: [
            {stateAbbreviation : 'MA'},
            {city: [ 
                {name: [
                    {is : 'boston'},
                    {averagerent:'$1,445'},
                    {regionSeriesCode : '0071650'},
                    {jobs: [
                        {softwareEngineer: '$99,000'},
                        {registeredNurse: '$73,000'},
                        {financialAnalyst: '$65,000'}
                    ]},
                    {weather: [
                        {summerAvgs: [
                            {high: '81'},
                            {low: '65'}
                        ]},
                        {winterAvgs: [
                            {high: '36'},
                            {low: '22'}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}