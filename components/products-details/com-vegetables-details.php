<div class="container mt-5">
  <div class="row">
    <!-- Product Image Gallery -->
    <div class="col-md-6">
      <div class="product-gallery">
        <img
          id="mainImage"
          src="./images/ad-image-1.png"
          alt="Product Image"
          class="img-fluid"
        />
        <div class="image-nav">
          <button class="bg-success" onclick="prevImage()">&#10094;</button>
          <button class="bg-success" onclick="nextImage()">&#10095;</button>
        </div>
      </div>
      <div class="row product-thumbnails mt-4">
        <div class="col-3">
          <div class="thumbnail-item active" onclick="changeImage(this, 0)">
            <img
              src="./images/ad-image-1.png"
              alt="Thumbnail 1"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="thumbnail-item" onclick="changeImage(this, 1)">
            <img
              src="https://img.freepik.com/free-vector/group-fruit-vegetable_1308-124115.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714003200&semt=ais"
              alt="Thumbnail 2"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="thumbnail-item" onclick="changeImage(this, 2)">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKenqrMytZY3hzYlGg52tzdf1yWfEGAjncQQ&s"
              alt="Thumbnail 3"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Product Details -->
    <div class="col-md-6">
      <h2>Organic Vegetables</h2>
      <p class="price">
        $08.50 <span class="text-muted"><s>$10.50</s></span>
      </p>
      <p>
        Nonummy parturient leo potenti convallis iaculis metus parturient leo
        libero hac convallis orci tristique consequat ad, primis erat vehicula
        platea magna hymenaeos lorem aliquet odio interdum.
      </p>

      <div class="available-size">
        <label for="sizeSelect" class="form-label">Available Bag Size:</label>
        <select class="form-select" id="sizeSelect">
          <option value="20gm">1kg</option>
          <option value="50gm">25km</option>
          <option value="100gm">50kg</option>
        </select>
      </div>

      <div class="quantity-section">
        <button onclick="decrement()">-</button>
        <input
          type="number"
          id="quantity"
          class="form-control"
          value="1"
          min="1"
        />
        <button onclick="increment()">+</button>
      </div>

      <button class="btn btn-success btn-lg w-100">Add to Cart</button>

      <p class="mt-3">SKU: F5wslk62set5</p>
      <p>Brand: Olympic</p>
      <p>Category: Snacks</p>
    </div>
  </div>

  <!-- Product Features -->
  <div class="row product-description">
    <div class="col-12">
      <h4>Product Features</h4>
      <ul>
        <li>
          Variety pack of Doritos and Cheetos favorite with classic flavors in
          one convenient package
        </li>
        <li>
          With 4 different varieties, there's sure to be something everyone will
          love
        </li>
        <li>
          40 count pack featuring 10 each of these classic favorites: Cheetos
          Puffs, Cheetos Crunchy
        </li>
        <li>Easy to carry, easy to store, and easy to pack</li>
      </ul>
    </div>
  </div>

  <div class="row product-description">
    <div class="col-12">
      <h4>Shipping and Delivery</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        excepturi ea magni, pariatur expedita voluptatibus aliquam fuga voluptas
        ratione harum commodi exercitationem iste magnam optio impedit sed non
        odit incidunt. Placeat vitae incidunt. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Earum, voluptatum nam, incidunt iure minus
        assumenda temporibus ipsa nostrum accusantium consequuntur placeat
        quisquam obcaecati enim corrupti. Aperiam natus fugiat libero optio esse
        incidunt cumque excepturi?
      </p>
    </div>
  </div>
  
</div>

<div class="mb-4">
<?php
include "./components/com-related-product.html"
  ?>

  <?php
include "./components/landing-page/com-sticker-50.html"
  ?>
</div>
 
