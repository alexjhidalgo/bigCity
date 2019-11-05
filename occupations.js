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
        {'New York': [
            {stateAbbreviation : 'NY'},
            {'New York City': [
                {averageRent: '$1,340'},
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
        ]},
        {California: [
            {stateAbbreviation : 'CA'},
            {'Los Angeles': [
                {averageRent:'$1,302'},
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
            {'San Diego': [
                {averageRent:'$1,500'},
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
            {'San Jose': [
                {averageRent:'$1,800'},
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
            {'San Francisco': [
                {averageRent:'$1,700'},
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
        ]},
        {illinois: [
            {stateAbbreviation : 'IL'},
            {'Chicago': [
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
        ]},
        {texas: [
            {stateAbbreviation : 'TX'},
            {'Houston': [
                {averageRent:'$940'},
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
            {'San Antonio': [
                {averageRent:'$918'},
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
            {'Dallas': [
                {averageRent:'$937'},
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
            {'Austin': [
                {averageRent:'$1,165'},
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
            {'Fort Worth': [
                {averageRent:'$967'},
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
            {'El Paso': [
                {averageRent:'$792'},
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
        ]},
        {arizona: [
            {stateAbbreviation : 'AZ'},
            {'Phoenix': [
                {averageRent:'$954'},
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
        ]},
        {pennsylvania: [
            {stateAbbreviation : 'PA'},
            {'Philadelphia': [
                {averagerent:'$970'},
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
        ]},
        {florida: [
            {stateAbbreviation : 'FL'},
            {'Jacksonville': [
                {averagerent:'$984'},
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
        ]},
        {ohio: [
            {stateAbbreviation : 'OH'},
            {'Columbus': [
                {averagerent:'$889'},
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
        ]},
        {'North Carolina': [
            {stateAbbreviation : 'NC'},
            {'Charlotte': [
                {averagerent:'$1,018'},
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
        ]},
        {indiana: [
            {stateAbbreviation : 'IN'},
            {'Indianapolis': [
                {averagerent:'$840'},
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
        ]},
        {washington: [
            {stateAbbreviation : 'WA'},
            {'Seattle': [
                {averagerent:'$1,377'},
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
        ]},
        {colorado: [
            {stateAbbreviation : 'CO'},
            {'Denver': [
                {averagerent:'$1,131'},
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
        ]},
        {WashingtonDC: [
            {stateAbbreviation : 'DC'},
            {'Washington DC': [
                {averagerent:'$1,424'},
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
        ]},
        {massachusetts: [
            {stateAbbreviation : 'MA'},
            {'Boston': [
                {averagerent:'$1,445'},
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