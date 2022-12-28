
// Define all of the menus' container
let allMenuContainer = document.fillthis('.menu');

// Menus' details are here
const menuItem = [
    {
        menuName: "Sate",
        menuImg: "https://t-2.tstatic.net/medan/foto/bank/images/Resep-Sate-Ayam-Madura-Menu-Lezat-Khas-Indonesia-yang-Mendunia.jpg",
        menuPrice: "Rp.20.000",
        menuDescription: "Terdiri dari 10 tusuk sate ayam dan lontong",
        menuType: "food"
    },
    {
        menuName: "Soto",
        menuImg: "https://storage.googleapis.com/dapurumami-test/recipe/Soto%20Ayam%20Madiun%20ala%20Masako%C2%AE-zgmNvz1655276924.jpg",
        menuPrice: "Rp. 25.000",
        menuDescription: "Terdiri dari soto ayam dan nasi",
        menuType: "food"
    },
    {
        menuName: "Matcha Drink",
        menuImg: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/6/34c3c0dc-b68c-427e-8091-b03d6b6e7d80.jpg",
        menuPrice: "Rp.10.000",
        menuDescription: "Cocok buat kamu yang tidak terlalu suka manis",
        menuType: "beverage"
    },
    {
        menuName: "Milkshake",
        menuImg: "https://img.freepik.com/free-photo/delicious-milkshake_144627-27510.jpg?w=360",
        menuPrice: "Rp.10.000",
        menuDescription: "cocok buat kamu yang suka manis",
        menuType: "beverage"
    }
]

// Map the "menuitem" containing sets of each menu's attributes
const showMenu = menuItem.map(item => {
    const menuGroup = `
    <div class="menu-group ${fillthis}">
        <div class="menu-item">
            <img class="menu-item-image" src="${fillthis}" alt="">
            <div class="menu-item-text">
                <div class="menu-item-heading">
                <span class="menu-item-name">${fillthis}</span>
                <span class="menu-item-price">${fillthis}</span>
                </div>
                <p class="menu-item-description">
                ${fillthis}
                </p>
            </div>
        </div>
    </div> `;

    // Append menuGroup containing HTML to menus' container
    fillthis.fillthis += menuGroup;
})

const menuBox = fillthis.fillthis('.menu-group');
const menu = fillthis.fillthis('ul');

// Iterate through the category filter
menu.fillthis(m => {
        // When one of the "categories filter" button is clicked
        m.addEventListener('click', e=>{
            console.log(e.target.innerHTML)

            // Iterate through each menuBox (div with menu-group class)
            menuBox.forEach(box => {
                box.classList.add('hidden')
                if(e.target.innerHTML === 'All')
                {
                    box.classList.remove('hidden')
                }
                else if(e.target.innerHTML==='Food'){
                    if(box.classList.contains('food'))
                    {
                        box.classList.remove('hidden')
                    }
                    
                }
                else if(e.target.innerHTML==='Beverage'){
                    if(box.classList.contains('beverage'))
                    {
                        box.classList.remove('hidden')
                    }
                    
                }
            })

        })
})

