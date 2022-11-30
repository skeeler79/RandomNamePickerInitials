const mathAll = [
    {
        id: 1,
        firstName: "Robert" ,
        lastName: "Daniels" ,
    },
    {
        id: 2,
        firstName: "Hunter" ,
        lastName: "Le", 
    },
    {
        id: 3,
        firstName: "Samuel" ,
        lastName: "Sze" ,
    },
    {
        id: 4,
        firstName: "Dylan",
        lastName: "Barajas Hu",
    },
    {
        id: 5,
        firstName: "Madeline" ,
        lastName: "Bruder" ,
    },
    {
        id: 6,
        firstName: "Alexa" ,
        lastName: "Katz" ,
    },
    {
        id: 7,
        firstName: "Jason" ,
        lastName: "McCall" , 
    },
    {
        id: 8,
        firstName: "Xenia",
        lastName: "San Chirico" ,
    },
    {
        id: 9,
        firstName: "Lena" ,
        lastName: "Hershon" ,
    },
    {
        id: 10,
        firstName: "Nina",
        lastName: "Caron" ,
    }

    {
        id: 11,
        firstName: "Daniel",
        lastName: "Seltzer",
    },
    {
        id: 12,
        firstName: "Paige",
        lastName: "Scheuerman",
    },
    {
        id: 13,
        firstName: "Lillie",
        lastName: "Niescior",
    },
    {
        id: 14,
        firstName: "Eloise",
        lastName: "Pahys Hu",
    },
    {
        id: 15,
        firstName: "Chase",
        lastName: "Burnett",
    },
    {
        id: 16,
        firstName: "Gus",
        lastName: "Tsiotsias",
    },
    {
        id: 17,
        firstName: "Zoe",
        lastName: "Donnelly",
    },
    {
        id: 18,
        firstName: "Lillian",
        lastName: "Bernstein",
    },
    {
        id: 19,
        firstName: "Wiley",
        lastName: "Hunsicker",
    },
    {
        id: 20,
        firstName: "Patrick",
        lastName: "Sullivan",
    }

    {
        id: 21,
        firstName: "George",
        lastName: "Neustadter",
    },
    {
        id: 22,
        firstName: "Zurri",
        lastName: "Armstead",
    },
    {
        id: 23,
        firstName: "Ava",
        lastName: "Gallagher",
    },
    {
        id: 24,
        firstName: "Nina",
        lastName: "Chavchanidze",
    },
    {
        id: 25,
        firstName: "Tenzin",
        lastName: "Namkha",
    },
    {
        id: 26,
        firstName: "Uwais",
        lastName: "Bell",
    },
    {
        id: 27,
        firstName: "Sid",
        lastName: "Adler",
    },
    {
        id: 28,
        firstName: "Elodie",
        lastName: "Ives",
    },
    {
        id: 29,
        firstName: "Rachel",
        lastName: "Bellamy",
    },
    {
        id: 30,
        firstName: "Gavin",
        lastName: "Broscious",
    }

    {
        id: 31,
        firstName: "Molly",
        lastName: "Mathias",
    },
    {
        id: 32,
        firstName: "Katherine",
        lastName: "Mathias",
    },
    {
        id: 33,
        firstName: "Sophie",
        lastName: "Burns",
    },
    {
        id: 34,
        firstName: "Annie",
        lastName: "Vicki",
    },
    {
        id: 35,
        firstName: "Charlotte",
        lastName: "Abraham",
    },
    {
        id: 36,
        firstName: "Neve",
        lastName: "Funt",
    },
    {
        id: 37,
        firstName: "Carlo",
        lastName: "DeSipio",
    },
    {
        id: 38,
        firstName: "Aidan",
        lastName: "Reilly",
    },
    {
        id: 39,
        firstName: "Micah",
        lastName: "Gardner",
    },
    {
        id: 40,
        firstName: "Declan",
        lastName: "Tarity",
    }
];

//section-center is the parent class of the items
const sectionCenter = document.querySelector('.section-center');

const container = document.querySelector('.btn-container')


//this function runs when the window loads
window.addEventListener('DOMContentLoaded', function () {
    displayNames(mathAll);
    displayMenuButtons();


});

function displayNames(individual) {
    let displayIndividual = individual.map(function (item) {
        // console.log(item)
        return `<article class="menu-item">
    
    <div class="item-info">
      <header>
        <h4>${item.firstName}</h4>
        <h4>$${item.lastName}</h4>
      </header>
    </div>
  </article>`;
    });
    //joining the array creates one long string
    displayMenu = displayMenu.join('');

    //this puts the displayMenu array into the sectionCenter class in the HTML like magic
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) { //values is total, item is for each item
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all'] //all is the initialized value in the array of buttons
    );
    console.log(categories)

    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join('');
    container.innerHTML = categoryBtns;
    //buttons are selected after they've been added dynamically, cannot be accessed before
    const filterBtns = document.querySelectorAll('.filter-btn');

    console.log(categoryBtns)


    //this listens for filter button clicks
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem
                }
            });
            if (category === "all") {
                //call the map function below
                displayMenuItems(menu)
            } else {
                //run the filter
                displayMenuItems(menuCategory);
            }
        });
    });
}