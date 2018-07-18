
	   <div class="index-banner">
	  	  <div class="wmuSlider example1" style="height: 560px;">
			  <div class="wmuSliderWrapper">
				  {{#each carousels}}
				  {{!--     <li><img src ="../../public/nurses/{{image}}" width="70" height="70" /></li> --}}
				  <article style="position: absolute; width: 100%; opacity: 1;"> 
				   	<div class="banner-wrap">
					   	<div class="slider-left">
							{{!-- <img src="/images/banner1.jpg" alt=""/>  --}}
							<img src="/uploads/{{this.image}}" width="700" height="438" />
						</div>
						 <div class="slider-right">
							<h3>{{this.header}}</h3>
						    <h4>{{this.secondheader}}</h4>
						    <p>{{this.description}}</p>
						    <div class="btn"><a href="{{this.link}}">Shop Now</a></div>
						 </div>
						 <div class="clear"></div>
					 </div>
					</article>
				    {{/each}}
				</div>
                <a class="wmuSliderPrev">Previous</a><a class="wmuSliderNext">Next</a>
                <ul class="wmuSliderPagination">
                	<li><a href="#" class="">0</a></li>
                	<li><a href="#" class="">1</a></li>
                	<li><a href="#" class="wmuActive">2</a></li>
                	<li><a href="#" >3</a></li>
                	<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					
                  </ul>
                 <a class="wmuSliderPrev">Previous</a><a class="wmuSliderNext">Next</a><ul class="wmuSliderPagination"><li><a href="#" class="wmuActive">0</a></li><li><a href="#" class="">1</a></li><li><a href="#" class="">2</a></li><li><a href="#" class="">3</a></li><li><a href="#" class="">4</a></li></ul></div>
            	 <script src="js/jquery.wmuSlider.js"></script> 
				 <script type="text/javascript" src="js/modernizr.custom.min.js"></script> 
						<script>
       						 $('.example1').wmuSlider({
									animationDuration: 500,
									slideshow: true,
									slideshowSpeed: 2000,
									slideToStart: 0,
									navigationControl: true,
									paginationControl: true,
									touch: true,
								});         
   						</script> 	           	      
             </div>
			 <div>
				
			 </div>























             <div class="main">
	<div class="wrap">
		<div class="content-top">
		<div class="lsidebar span_1_of_c1">
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
		</div>
		<div class="cont span_2_of_c1">
			<div class="social">	
				<ul>	
				<li class="facebook"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"><a href="#"> </a></div><div class="border hide"><p class="num">1.51K</p></div></li>
				</ul>
			</div>
			<div class="social">	
				<ul>	
					<li class="twitter"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"></div><div class="border hide"><p class="num">1.51K</p></div></li>
				</ul>
			</div>
				<div class="social">	
				<ul>	
					<li class="google"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"></div><div class="border hide"><p class="num">1.51K</p></div></li>
				</ul>
				</div>
				<div class="social">	
				<ul>	
					<li class="dot"><a href="#"><span> </span></a><div class="radius"> <img src="images/radius.png"></div><div class="border hide"><p class="num">1.51K</p></div></li>
				</ul>
			</div>
			<div class="clear"> </div>
			</div>
			<div class="clear"></div>			
		</div>
		<div class="content-bottom">
		
<div class="box1">
	{{#each products}}
		<div class="col_1_of_3 span_1_of_3"><a href="single.html"></a>
			<div class="view view-fifth">
			<div class="top_box">
			<h3 class="m_1">{{this.name}}</h3>
			<p class="m_2">{{this.model}}</p>
				<div class="grid_img">
					{{!-- <img src="/uploads/{{this.image}}" width="700" height="438" /> --}}
				<div class="css3"><img src="uploads/{{this.image}}" height="200px" alt=""/></div>
					<div class="mask">
					<div class="info">Quick View</div>
					</div>
			</div>
			<div class="price">N{{this.price}}</div>
			</div>
			</div>
			<span class="rating">
			<input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
			<label for="rating-input-1-5" class="rating-star1"></label>
			<input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
			<label for="rating-input-1-4" class="rating-star1"></label>
			<input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
			<label for="rating-input-1-3" class="rating-star1"></label>
			<input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
			<label for="rating-input-1-2" class="rating-star"></label>
			<input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
			<label for="rating-input-1-1" class="rating-star"></label>&nbsp;
			({{this.stock}})
			</span>
				<ul class="list">
				<li>
				<img src="images/plus.png" alt=""/>
				<ul class="icon1 sub-icon1 profile_img">
					<li><button class="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="images/img_1.png">Add to Cart</button>
					<ul class="sub-icon1 list">
						<li><h3>sed diam nonummy</h3><a href=""></a></li>
						<li><p>Lorem ipsum dolor sit amet, consectetuer  <a href="">adipiscing elit, sed diam</a></p></li>
					</ul>
					</li>
					</ul>
				</li>
				</ul>
			<div class="clear"></div>
	
</div>
{{/each}}

		
		
		<div class="clear"></div>
	</div>
	</div>
	</div>
</div>
{{!-- End of Carousel and ProductListing --}}






















{{!-- start of index which will contain the carousel and product listing --}}
{{!-- start of carousel --}}
{{>carousel}}
	
	<!-- Banner -->
	<style>
		div.fixed {
   position: fixed;    
    top: 80%;
	left: 90%;
	cursor: pointer;
    
}
	</style>
<script>
	setInterval(function(){$('#carty').toggleClass('animated pulse')}, 2000);
	setInterval(function(){$('#checkout_itemz').toggleClass('animated flip')}, 2000);
</script>
<div class="fixed">
	<img src="images/cart11.png" alt="" width="150" height="150" id="carty" data-toggle="modal" data-target="#myModal">
	
	<span id="checkout_itemz" class="checkout_itemz"></span>
</div>
<!-- Trigger the modal with a button -->

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Cart</h4>
      </div>      
	  
	<div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>



	<div class="banner">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="banner_item align-items-center" style="background-image:url(images/banner_1.jpg)">
						<div class="banner_category">
							<a href="categories.html">women's</a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="banner_item align-items-center" style="background-image:url(images/banner_2.jpg)">
						<div class="banner_category">
							<a href="categories.html">accessories's</a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="banner_item align-items-center" style="background-image:url(images/banner_3.jpg)">
						<div class="banner_category">
							<a href="categories.html">men's</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- New Arrivals -->

	<div class="new_arrivals">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<div class="section_title new_arrivals_title">
						<h2 class="animated bounce">New Arrivals</h2>
					</div>
				</div>
			</div>
			<div class="row align-items-center">
				<div class="col text-center">
					<div class="new_arrivals_sorting">
						<ul class="arrivals_grid_sorting clearfix button-group filters-button-group">
							<li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
							{{#each category}}
							<li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".{{this._id}}">{{this.name}}</li>
							{{/each}}
							{{!-- <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
							<li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li> --}}
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
<input type="hidden" name="shop_id" value="{{shop_id}}" id="shop_id" />
						<!-- Product 1 -->
{{#each products}}
<form class="cart_form" method="post">
	
		<input type="hidden" name="name" value="{{this.name}}" />
		<input type="hidden" name="quantity" value="1" />
		<input type="hidden" name="price" value="{{this.price}}" />
		<input type="hidden" name="image" value="{{this.image}}" />
		<input type="hidden" name="id" value="{{this._id}} " />
		<input type="hidden" name="stock" value="{{this.stock}} " />
		{{!-- <input type="submit" name="submit" value="Add to cart" class="button" />	 --}}
		

						<div class="product-item {{this.category_id}}">
							<div class="product discount product_filter">
								<div class="product_image">
									
									
									{{!-- <div class="css3"><img src="uploads/{{this.image}}" height="200px" alt=""/></div> --}}
									<img src="uploads/{{this.image}}" alt="" data-image="{{this.image}}">
								</div>
								<div class="favorite favorite_left"></div>
								<div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
								<div class="product_info">
									<h6 class="product_name"><a data-name="{{this.name}}" href="single.html">{{this.name}}</a></h6>
									<div class="product_price" data-price="{{this.price}}">${{this.price}}<span>${{this.price}}</span></div>
								</div>
							</div>
							<input type="submit" name="submit" value="Add to cart" class="red_button add_to_cart_button" />	
							{{!-- <div class="red_button add_to_cart_button">add to cart</div> --}}
						</div>
	</form>
{{/each}}

					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Deal of the week -->

	<div class="deal_ofthe_week">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="deal_ofthe_week_img">
						<img src="images/deal_ofthe_week.png" alt="">
					</div>
				</div>
				<div class="col-lg-6 text-right deal_ofthe_week_col">
					<div class="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
						<div class="section_title">
							<h2>Deal Of The Week</h2>
						</div>
						<ul class="timer">
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="day" class="timer_num">03</div>
								<div class="timer_unit">Day</div>
							</li>
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="hour" class="timer_num">15</div>
								<div class="timer_unit">Hours</div>
							</li>
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="minute" class="timer_num">45</div>
								<div class="timer_unit">Mins</div>
							</li>
							<li class="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="second" class="timer_num">23</div>
								<div class="timer_unit">Sec</div>
							</li>
						</ul>
						<div class="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Best Sellers -->

	<div class="best_sellers">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<div class="section_title new_arrivals_title">
						<h2>Best Sellers</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="product_slider_container">
						<div class="owl-carousel owl-theme product_slider">

							<!-- Slide 1 -->

							<div class="owl-item product_slider_item">
								<div class="product-item">
									<div class="product discount">
										<div class="product_image">
											<img src="images/product_1.png" alt="">
										</div>
										<div class="favorite favorite_left"></div>
										<div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
											<div class="product_price">$520.00<span>$590.00</span></div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 2 -->

							<div class="owl-item product_slider_item">
								<div class="product-item women">
									<div class="product">
										<div class="product_image">
											<img src="images/product_2.png" alt="">
										</div>
										<div class="favorite"></div>
										<div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
											<div class="product_price">$610.00</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 3 -->

							<div class="owl-item product_slider_item">
								<div class="product-item women">
									<div class="product">
										<div class="product_image">
											<img src="images/product_3.png" alt="">
										</div>
										<div class="favorite"></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
											<div class="product_price">$120.00</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 4 -->

							<div class="owl-item product_slider_item">
								<div class="product-item accessories">
									<div class="product">
										<div class="product_image">
											<img src="images/product_4.png" alt="">
										</div>
										<div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
										<div class="favorite favorite_left"></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
											<div class="product_price">$410.00</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 5 -->

							<div class="owl-item product_slider_item">
								<div class="product-item women men">
									<div class="product">
										<div class="product_image">
											<img src="images/product_5.png" alt="">
										</div>
										<div class="favorite"></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Pryma Headphones, Rose Gold & Grey</a></h6>
											<div class="product_price">$180.00</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 6 -->

							<div class="owl-item product_slider_item">
								<div class="product-item accessories">
									<div class="product discount">
										<div class="product_image">
											<img src="images/product_6.png" alt="">
										</div>
										<div class="favorite favorite_left"></div>
										<div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
											<div class="product_price">$520.00<span>$590.00</span></div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 7 -->

							<div class="owl-item product_slider_item">
								<div class="product-item women">
									<div class="product">
										<div class="product_image">
											<img src="images/product_7.png" alt="">
										</div>
										<div class="favorite"></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
											<div class="product_price">$610.00</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 8 -->

							<div class="owl-item product_slider_item">
								<div class="product-item accessories">
									<div class="product">
										<div class="product_image">
											<img src="images/product_8.png" alt="">
										</div>
										<div class="favorite"></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
											<div class="product_price">$120.00</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 9 -->

							<div class="owl-item product_slider_item">
								<div class="product-item men">
									<div class="product">
										<div class="product_image">
											<img src="images/product_9.png" alt="">
										</div>
										<div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
										<div class="favorite favorite_left"></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
											<div class="product_price">$410.00</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Slide 10 -->

							<div class="owl-item product_slider_item">
								<div class="product-item men">
									<div class="product">
										<div class="product_image">
											<img src="images/product_10.png" alt="">
										</div>
										<div class="favorite"></div>
										<div class="product_info">
											<h6 class="product_name"><a href="single.html">Pryma Headphones, Rose Gold & Grey</a></h6>
											<div class="product_price">$180.00</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Slider Navigation -->

						<div class="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
							<i class="fa fa-chevron-left" aria-hidden="true"></i>
						</div>
						<div class="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
							<i class="fa fa-chevron-right" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<script>
	$(document).ready( function() {
		var shop_id = $('#shop_id').val();
		console.log(shop_id);
		var cart = [];
		$(".cart_form").submit(function(e) {			
			e.preventDefault();	
			$('#checkout_itemz').addClass('animated bounce');//using animate.css library
			$('#carty').addClass('animated shake');//using animate.css library
			setTimeout(function(){ $("#carty").removeClass("animated shake");},1000);
			setTimeout(function(){ $("#checkout_itemz").removeClass("animated bounce");},1000)

			setTimeout(function(){ $("#checkout_itemz").addClass("animated pulse");},5000)
			setTimeout(function(){ $("#carty").addClass("animated pulse");},5000)
			
			var myObject = new Object();
				//var name = this['name'].value;
				myObject.name = this['name'].value;
				myObject.quantity = this['quantity'].value;
				myObject.price = this['price'].value;
				myObject.image = this['image'].value;
				myObject.stock = this['stock'].value;
				myObject.id = this['id'].value;
				function productExists(id) {
					return cart.some(function(el) {
					return el.id === id;
				}); 
				}				
				//console.log(productExists(myObject.id));
				var exists = productExists(myObject.id);
				if(exists == false) {
					//console.log(myObject);		
					$("#myModal").find(".modal-body").append("<p>" + myObject.name + "</p>");	
					cart.push(myObject);
					localStorage.setItem(shop_id, myObject);
				} else if(exists == true){
					for (var i in cart) {
     					if (cart[i].id == myObject.id) {
        				cart[i].quantity = parseInt(cart[i].quantity)+ 1;
        				break; //Stop this loop, we found it!
    				}
   				}	

			}
				function quantities(item) {
					return parseInt(item.quantity);
				}

				function amount(item){
					return parseInt(item.price) * parseInt(item.quantity);
				}

				function sum(prev, next){
					return parseInt(prev) + parseInt(next);
				}

				var total = cart.map(amount).reduce(sum);
				var totalquantity = cart.map(quantities).reduce(sum);
				$('#checkout_items').text(totalquantity);
				$('#checkout_itemz').text(totalquantity);
				console.log(total);		//to display the total price of items in the cart
				console.log(totalquantity);//to display the total quantities of item in the cart
			console.log(cart);
			console.log(JSON.stringify(cart));

		

		});
	});
</script>

{{!-- <input type="hidden" name="name" value="{{this.name}}" />
		<input type="hidden" name="quantity" value="1" />
		<input type="hidden" name="price" value="{{this.price}}" />
		<input type="hidden" name="image" value="{{this.image}}" />
		<input type="hidden" name="id" value="{{this._id}} " /> --}}