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
window.addEventListener('DOMContentLoaded', function () {
    displayNames(mathAll);
   


});

function displayNames(individual) {

    individual = 
    individual[Math.floor(Math.random() *individual.length)]
    console.log(individual);


      let randomIndividual = `<article class="menu-item">
    
    <div class="item-info">
      <header>
        <h4>${individual.firstName }</h4>
        <h4>${individual.lastName}</h4>
      </header>
    </div>
  </article>`;


    //this puts the displayMenu array into the sectionCenter class in the HTML like magic
    sectionCenter.innerHTML = randomIndividual
}

// 
const filterBtns = document.querySelectorAll('.filter-btn');




//this listens for filter button clicks
// function getNames(){
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        
        // const period6 = mathAll.period6 === true;
        // console.log(period6);
            


        let period6 = mathAll.filter(function (individuals) {
            
            return individuals.period6 === true;
            // const newArr = [];
            // if (individuals.period6 === true) {

            //     // return individuals
            //     for (let i=0; i < individuals.length; i++){
            //         newArr.push([i]);
            //     }
                
            //     console.log(newArr);
                // let randomArr = newArr[Math.floor(Math.random() * newArr.length)];
                // console.log(randomArr);
            // }
            //  for (let i = 0; i)

            // let newRandomArr = randomArr[Math.floor(Math.random * randomArr.length)];
            // console.log(newRandomArr);
            
        });
        // const randomArr = period6[Math.floor(Math.random() * period6.length)]
        // console.log(randomArr);

        if (category === 'all') {
            displayNames(mathAll)
        } else {
            
            displayNames(period6);
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
