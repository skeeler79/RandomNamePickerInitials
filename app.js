const mathAll = [
    {
        id: 1,
        firstName: "Robert" ,
        lastName: "Daniels" ,
        category: "all",
    },
    {
        id: 2,
        firstName: "Hunter" ,
        lastName: "Le", 
        category: "all",
    },
    {
        id: 3,
        firstName: "Samuel" ,
        lastName: "Sze" ,
        category: "all",
    },
    {
        id: 4,
        firstName: "Dylan",
        lastName: "Barajas Hu",
        category: "all",
    },
    {
        id: 5,
        firstName: "Madeline" ,
        lastName: "Bruder" ,
        category: "all",
    },
    {
        id: 6,
        firstName: "Alexa" ,
        lastName: "Katz" ,
        category: "all",
    },
    {
        id: 7,
        firstName: "Jason" ,
        lastName: "McCall" ,
        category: "all", 
    },
    {
        id: 8,
        firstName: "Xenia",
        lastName: "San Chirico" ,
        category: "all",
    },
    {
        id: 9,
        firstName: "Lena" ,
        lastName: "Hershon" ,
        category: "all",
    },
    {
        id: 10,
        firstName: "Nina",
        lastName: "Caron" ,
        category: "all",
    },

    {
        id: 11,
        firstName: "Daniel",
        lastName: "Seltzer",
        category: "all",
    },
    {
        id: 12,
        firstName: "Paige",
        lastName: "Scheuerman",
        category: "all",
    },
    {
        id: 13,
        firstName: "Lillie",
        lastName: "Niescior",
        category: "all",
    },
    {
        id: 14,
        firstName: "Eloise",
        lastName: "Pahys Hu",
        category: "all",
    },
    {
        id: 15,
        firstName: "Chase",
        lastName: "Burnett",
        category: "all",
    },
    {
        id: 16,
        firstName: "Gus",
        lastName: "Tsiotsias",
        category: "all",
    },
    {
        id: 17,
        firstName: "Zoe",
        lastName: "Donnelly",
        category: "all",
    },
    {
        id: 18,
        firstName: "Lillian",
        lastName: "Bernstein",
        category: "all",
    },
    {
        id: 19,
        firstName: "Wiley",
        lastName: "Hunsicker",
        category: "all",
    },
    {
        id: 20,
        firstName: "Patrick",
        lastName: "Sullivan",
        category: "all",
    },

    {
        id: 21,
        firstName: "George",
        lastName: "Neustadter",
        category: "all",
    },
    {
        id: 22,
        firstName: "Zurri",
        lastName: "Armstead",
        category: "all",
    },
    {
        id: 23,
        firstName: "Ava",
        lastName: "Gallagher",
        category: "all",
    },
    {
        id: 24,
        firstName: "Nina",
        lastName: "Chavchanidze",
        category: "all",
    },
    {
        id: 25,
        firstName: "Tenzin",
        lastName: "Namkha",
        category: "all",
    },
    {
        id: 26,
        firstName: "Uwais",
        lastName: "Bell",
        category: "all",
    },
    {
        id: 27,
        firstName: "Sid",
        lastName: "Adler",
        category: "all",
    },
    {
        id: 28,
        firstName: "Elodie",
        lastName: "Ives",
        category: "all",
    },
    {
        id: 29,
        firstName: "Rachel",
        lastName: "Bellamy",
        category: "all",
    },
    {
        id: 30,
        firstName: "Gavin",
        lastName: "Broscious",
        category: "all",
    },

    {
        id: 31,
        firstName: "Molly",
        lastName: "Mathias",
        category: "all",
    },
    {
        id: 32,
        firstName: "Katherine",
        lastName: "Mathias",
        category: "all",
    },
    {
        id: 33,
        firstName: "Sophie",
        lastName: "Burns",
        category: "all",
    },
    {
        id: 34,
        firstName: "Annie",
        lastName: "Vicki",
        category: "all",
    },
    {
        id: 35,
        firstName: "Charlotte",
        lastName: "Abraham",
        category: "all",
    },
    {
        id: 36,
        firstName: "Neve",
        lastName: "Funt",
        category: "all",
    },
    {
        id: 37,
        firstName: "Carlo",
        lastName: "DeSipio",
        category: "all",
    },
    {
        id: 38,
        firstName: "Aidan",
        lastName: "Reilly",
        category: "all",
    },
    {
        id: 39,
        firstName: "Micah",
        lastName: "Gardner",
        category: "all",
    },
    {
        id: 40,
        firstName: "Declan",
        lastName: "Tarity",
        category: "all",
    }
];

//section-center is the parent class of the items
const sectionCenter = document.querySelector('.section-center');

const container = document.querySelector('.btn-container')


//this function runs when the window loads
window.addEventListener('DOMContentLoaded', function () {
    displayNames(mathAll);
    // displayMenuButtons();


});

function displayNames(individual) {
    let displayIndividual = individual.map(function (item) {
        console.log(item)
        return `<article class="menu-item">
    
    <div class="item-info">
      <header>
        <h4>${item.firstName}</h4>
        <h4>${item.lastName}</h4>
      </header>
    </div>
  </article>`;
    });
    //joining the array creates one long string
    displayIndividual = displayIndividual.join('');

    //this puts the displayMenu array into the sectionCenter class in the HTML like magic
    sectionCenter.innerHTML = displayIndividual
}

// function displayMenuButtons() {
//     const categories = menu.reduce(function (values, item) { //values is total, item is for each item
//         if (!values.includes(item.category)) {
//             values.push(item.category);
//         }
//         return values;
//     }, ['all'] //all is the initialized value in the array of buttons
//     );
//     console.log(categories)

//     const categoryBtns = categories.map(function (category) {
//         return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
//     }).join('');
//     container.innerHTML = categoryBtns;
//     //buttons are selected after they've been added dynamically, cannot be accessed before
//     const filterBtns = document.querySelectorAll('.filter-btn');

//     console.log(categoryBtns)


    //this listens for filter button clicks
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            mathAll.filter(function (individual) {
                if (individual.category === category) {
                    return individual
                }
            });
            // if (category === "all") {
            //     //call the map function below
            //     displayMenuItems(menu)
            // } else {
            //     //run the filter
            //     displayMenuItems(menuCategory);
            // }
        });
    });
