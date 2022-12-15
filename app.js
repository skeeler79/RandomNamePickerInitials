const mathAll = [
    {
        id: 1,
        firstName: "Robert",
        lastName: "D",
        category: "all",
        period6: false,
        
    },
    {
        id: 2,
        firstName: "Hunter",
        lastName: "L",
        category: "all",
        period6: false,

    },
    {
        id: 3,
        firstName: "Samuel",
        lastName: "S",
        category: "all",
        period6: true,

    },
    {
        id: 4,
        firstName: "Dylan",
        lastName: "BH",
        category: "all",
        period6: false,

    },
    {
        id: 5,
        firstName: "Madeline",
        lastName: "B",
        category: "all",
        period6: false,

    },
    {
        id: 6,
        firstName: "Alexa",
        lastName: "K",
        category: "all",
        period6: false,

    },
    {
        id: 7,
        firstName: "Jason",
        lastName: "M",
        category: "all",
        period6: false,

    },
    {
        id: 8,
        firstName: "Xenia",
        lastName: "SC",
        category: "all",
        period6: true,

    },
    {
        id: 9,
        firstName: "Lena",
        lastName: "H",
        category: "all",
        period6: false,

    },
    {
        id: 10,
        firstName: "Nina",
        lastName: "C",
        category: "all",
        period6: true,

    },

    {
        id: 11,
        firstName: "Daniel",
        lastName: "S",
        category: "all",
        period6: true,

    },
    {
        id: 12,
        firstName: "Paige",
        lastName: "S",
        category: "all",
        period6: true,

    },
    {
        id: 13,
        firstName: "Lillie",
        lastName: "N",
        category: "all",
        period6: false,

    },
    {
        id: 14,
        firstName: "Eloise",
        lastName: "PH",
        category: "all",
        period6: false,

    },
    {
        id: 15,
        firstName: "Chase",
        lastName: "B",
        category: "all",
        period6: false,

    },
    {
        id: 16,
        firstName: "Gus",
        lastName: "T",
        category: "all",
        period6: false,

    },
    {
        id: 17,
        firstName: "Zoe",
        lastName: "D",
        category: "all",
        period6: true,

    },
    {
        id: 18,
        firstName: "Lillian",
        lastName: "B",
        category: "all",
        period6: false,

    },
    {
        id: 19,
        firstName: "Wiley",
        lastName: "H",
        category: "all",
        period6: false,

    },
    {
        id: 20,
        firstName: "Patrick",
        lastName: "S",
        category: "all",
        period6: false,

    },

    {
        id: 21,
        firstName: "George",
        lastName: "N",
        category: "all",
        period6: false,

    },
    {
        id: 22,
        firstName: "Zurri",
        lastName: "A",
        category: "all",
        period6: false,

    },
    {
        id: 23,
        firstName: "Ava",
        lastName: "G",
        category: "all",
        period6: true,

    },
    {
        id: 24,
        firstName: "Nina",
        lastName: "Chav",
        category: "all",
        period6: true,

    },
    {
        id: 25,
        firstName: "Tenzin",
        lastName: "N",
        category: "all",
        period6: false,

    },
    {
        id: 26,
        firstName: "Uwais",
        lastName: "B",
        category: "all",
        period6: true,

    },
    {
        id: 27,
        firstName: "Sid",
        lastName: "A",
        category: "all",
        period6: false,

    },
    {
        id: 28,
        firstName: "Elodie",
        lastName: "I",
        category: "all",
        period6: true,

    },
    {
        id: 29,
        firstName: "Rachel",
        lastName: "B",
        category: "all",
        period6: true,

    },
    {
        id: 30,
        firstName: "Gavin",
        lastName: "B",
        category: "all",
        period6: false,

    },

    {
        id: 31,
        firstName: "Molly",
        lastName: "M",
        category: "all",
        period6: true,

    },
    {
        id: 32,
        firstName: "Katherine",
        lastName: "M",
        category: "all",
        period6: false,

    },
    {
        id: 33,
        firstName: "Sophie",
        lastName: "B",
        category: "all",
        period6: true,

    },
    {
        id: 34,
        firstName: "Annie",
        lastName: "V",
        category: "all",
        period6: true,

    },
    {
        id: 35,
        firstName: "Charlotte",
        lastName: "A",
        category: "all",
        period6: false,

    },
    {
        id: 36,
        firstName: "Neve",
        lastName: "F",
        category: "all",
        period6: false,

    },
    {
        id: 37,
        firstName: "Carlo",
        lastName: "D",
        category: "all",
        period6: true,

    },
    {
        id: 38,
        firstName: "Aidan",
        lastName: "R",
        category: "all",
        period6: true,

    },
    {
        id: 39,
        firstName: "Micah",
        lastName: "G",
        category: "all",
        period6: false,

    },
    {
        id: 40,
        firstName: "Declan",
        lastName: "T",
        category: "all",
        period6: true,

    }
];

//section-center is the parent class of the items
const sectionCenter = document.querySelector('.section-center');

const container = document.querySelector('.btn-container')


//this function runs when the window loads
// window.addEventListener('DOMContentLoaded', function () {
//     displayNames(mathAll);

// });

const chosen = new Set();

function displayNames(individual) {
    

    if (chosen.size === individual.length){
        let noMoreNames = 
            `<article class="menu-item">
        <div class="item-info">
            <header>
            <h4>No More Names!</h4>
            </header>
        </div>
        </article>`
        sectionCenter.innerHTML = noMoreNames

        return null;
    }

    let individualName =
        individual[Math.floor(Math.random() * individual.length)]
    console.log(individualName);

    while (chosen.has(individualName)) {
        individualName = individual[Math.floor(Math.random() * individual.length)]
    }   
    let randomIndividual =

        `<article class="menu-item">
        <div class="item-info">
            <header>
            <h4>${individualName.firstName} ${individualName.lastName}</h4>
            </header>
        </div>
        </article>`

    //this puts the displayMenu array into the sectionCenter class in the HTML like magic
    sectionCenter.innerHTML = randomIndividual

    chosen.add(individualName)
    
    console.log(chosen)
    return individualName

    
    // let newArr = []
    // newArr.push(individual)
    // let uniqueIndividual = [];
    // for (let i = 0; i <= mathAll.length; i++){
    //     if (!uniqueIndividual.)
    // }

    // mathAll.reduce(function (selected, next) {
    //     if (!selected.includes(next)) {
    //         selected.push(next);
    //         selected[Math.floor(Math.random()*selected.length)]

    //     }
    //     return selected;
    // });
    
}


// 
const filterBtns = document.querySelectorAll('.filter-btn');




//this listens for filter button clicks
// function getNames(){
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;

       
        let period6 = mathAll.filter(function (individuals) {
            return individuals.period6 === true;
        });
        let period3 = mathAll.filter(function(individuals){
            return individuals.period6 === false;
        });

        if (category === 'clear'){
            sectionCenter.innerHTML = ''
            return chosen.clear();
        }
        else if (category === 'all') {
            displayNames(mathAll)
        } else if (category === 'per6'){

            displayNames(period6);
        } else if (category === 'per3'){
            displayNames(period3)
        }
    });
});
    // }
            // if (category === "all") {
            //     //call the map function below
            //     displayMenuItems(menu)
            // } else {
            //     //run the filter
            //     displayMenuItems(menuCategory);
            // }
    //     });
    // });
