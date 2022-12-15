const mathAll = [
    {
        id: 1,
        firstName: "Robert",
        lastName: "Daniels",
        category: "all",
        period6: false,
        
    },
    {
        id: 2,
        firstName: "Hunter",
        lastName: "Le",
        category: "all",
        period6: false,

    },
    {
        id: 3,
        firstName: "Samuel",
        lastName: "Sze",
        category: "all",
        period6: true,

    },
    {
        id: 4,
        firstName: "Dylan",
        lastName: "Barajas Hu",
        category: "all",
        period6: false,

    },
    {
        id: 5,
        firstName: "Madeline",
        lastName: "Bruder",
        category: "all",
        period6: false,

    },
    {
        id: 6,
        firstName: "Alexa",
        lastName: "Katz",
        category: "all",
        period6: false,

    },
    {
        id: 7,
        firstName: "Jason",
        lastName: "McCall",
        category: "all",
        period6: false,

    },
    {
        id: 8,
        firstName: "Xenia",
        lastName: "San Chirico",
        category: "all",
        period6: true,

    },
    {
        id: 9,
        firstName: "Lena",
        lastName: "Hershon",
        category: "all",
        period6: false,

    },
    {
        id: 10,
        firstName: "Nina",
        lastName: "Caron",
        category: "all",
        period6: true,

    },

    {
        id: 11,
        firstName: "Daniel",
        lastName: "Seltzer",
        category: "all",
        period6: true,

    },
    {
        id: 12,
        firstName: "Paige",
        lastName: "Scheuerman",
        category: "all",
        period6: true,

    },
    {
        id: 13,
        firstName: "Lillie",
        lastName: "Niescior",
        category: "all",
        period6: false,

    },
    {
        id: 14,
        firstName: "Eloise",
        lastName: "Pahys Hu",
        category: "all",
        period6: false,

    },
    {
        id: 15,
        firstName: "Chase",
        lastName: "Burnett",
        category: "all",
        period6: false,

    },
    {
        id: 16,
        firstName: "Gus",
        lastName: "Tsiotsias",
        category: "all",
        period6: false,

    },
    {
        id: 17,
        firstName: "Zoe",
        lastName: "Donnelly",
        category: "all",
        period6: true,

    },
    {
        id: 18,
        firstName: "Lillian",
        lastName: "Bernstein",
        category: "all",
        period6: false,

    },
    {
        id: 19,
        firstName: "Wiley",
        lastName: "Hunsicker",
        category: "all",
        period6: false,

    },
    {
        id: 20,
        firstName: "Patrick",
        lastName: "Sullivan",
        category: "all",
        period6: false,

    },

    {
        id: 21,
        firstName: "George",
        lastName: "Neustadter",
        category: "all",
        period6: false,

    },
    {
        id: 22,
        firstName: "Zurri",
        lastName: "Armstead",
        category: "all",
        period6: false,

    },
    {
        id: 23,
        firstName: "Ava",
        lastName: "Gallagher",
        category: "all",
        period6: true,

    },
    {
        id: 24,
        firstName: "Nina",
        lastName: "Chavchanidze",
        category: "all",
        period6: true,

    },
    {
        id: 25,
        firstName: "Tenzin",
        lastName: "Namkha",
        category: "all",
        period6: false,

    },
    {
        id: 26,
        firstName: "Uwais",
        lastName: "Bell",
        category: "all",
        period6: true,

    },
    {
        id: 27,
        firstName: "Sid",
        lastName: "Adler",
        category: "all",
        period6: false,

    },
    {
        id: 28,
        firstName: "Elodie",
        lastName: "Ives",
        category: "all",
        period6: true,

    },
    {
        id: 29,
        firstName: "Rachel",
        lastName: "Bellamy",
        category: "all",
        period6: true,

    },
    {
        id: 30,
        firstName: "Gavin",
        lastName: "Broscious",
        category: "all",
        period6: false,

    },

    {
        id: 31,
        firstName: "Molly",
        lastName: "Mathias",
        category: "all",
        period6: true,

    },
    {
        id: 32,
        firstName: "Katherine",
        lastName: "Mathias",
        category: "all",
        period6: false,

    },
    {
        id: 33,
        firstName: "Sophie",
        lastName: "Burns",
        category: "all",
        period6: true,

    },
    {
        id: 34,
        firstName: "Annie",
        lastName: "Vicki",
        category: "all",
        period6: true,

    },
    {
        id: 35,
        firstName: "Charlotte",
        lastName: "Abraham",
        category: "all",
        period6: false,

    },
    {
        id: 36,
        firstName: "Neve",
        lastName: "Funt",
        category: "all",
        period6: false,

    },
    {
        id: 37,
        firstName: "Carlo",
        lastName: "DeSipio",
        category: "all",
        period6: true,

    },
    {
        id: 38,
        firstName: "Aidan",
        lastName: "Reilly",
        category: "all",
        period6: true,

    },
    {
        id: 39,
        firstName: "Micah",
        lastName: "Gardner",
        category: "all",
        period6: false,

    },
    {
        id: 40,
        firstName: "Declan",
        lastName: "Tarity",
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
