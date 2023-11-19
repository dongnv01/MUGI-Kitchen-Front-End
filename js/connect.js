
fetch('http://localhost:8080/home/list-food') 
    .then(response => response.json())
    .then(data => {
        const foodListContainer = document.getElementById('food-list');
        data.content.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('col-lg-4', 'col-md-6', 'col-12');
            foodItem.innerHTML = `
                            <div class="menu-thumb">
                                <div class="menu-image-wrap">
                                    <img src="http://localhost:8080/${food.image}" style="width: 400px; height: 280px; margin-top: 20px;" class="img-fluid menu-image" alt="${food.foodName}">
                                    <span class="menu-tag bg-warning">${food.foodName}</span>
                                </div>
                                <div class="menu-info d-flex flex-wrap align-items-center">
                                    <h4 class="mb-0">${food.foodName}</h4>
                                    <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>${food.price}</span>
                                </div>
                                <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 class="reviews-text mb-0 me-3" id="averageRating">4.3/5</h6>

                                        <div class="reviews-stars">
                                            <i class="bi-star-fill reviews-icon" id="star1"></i>
                                            <i class="bi-star-fill reviews-icon" id="star2"></i>
                                            <i class="bi-star-fill reviews-icon" id="star3"></i>
                                            <i class="bi-star-fill reviews-icon" id="star4"></i>
                                            <i class="bi-star reviews-icon" id="star5"></i>
                                        </div>

                                        <p class="reviews-text mb-0 ms-4" id="reviewCount">102 Reviews</p>
                                </div>
                            </div>
                        `;
            foodListContainer.appendChild(foodItem);
        });
    })
    .catch(error => console.error(error));


    document.addEventListener('DOMContentLoaded', function () {

        fetch('http://localhost:8080/home/all-food')
            .then(response => response.json())
            .then(data => {

                displayMenuItems(data);
            })
            .catch(error => console.error('Error:', error));

        function displayMenuItems(menuItems) {
            var menuItemsContainer = document.getElementById('menuItemsContainer');

            menuItems.forEach(function(item) {
                var menuItemHtml = `
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="menu-thumb">
                            <img src="http://localhost:8080/${item.image}" style="width: 400px; height: 280px; margin-top: 20px;" class="img-fluid menu-image" alt="${item.foodName}">
                            <div class="menu-info d-flex flex-wrap align-items-center">
                                <h4 class="mb-0">${item.foodName}</h4>
                                <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>${item.price}</span>
                            </div>
                        </div>
                    </div>
                `;

                menuItemsContainer.insertAdjacentHTML('beforeend', menuItemHtml);
            });
        }
    });
    