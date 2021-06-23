import React, { useState } from "react";
import "./index.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../img/home.png";
import BackpackMan from "../img/backpackMan.png";
import BackpackWoman from "../img/backpackWoman.png";
import Product1 from "../img/feature1.png";
import Product2 from "../img/feature2.png";
import Product3 from "../img/feature3.png";
import Product4 from "../img/feature4.png";
import NewProduct1 from "../img/new1.png";
import NewProduct2 from "../img/new2.png";
import NewProduct3 from "../img/new3.png";
import NewProduct4 from "../img/new4.png";
import NewProduct5 from "../img/new5.png";
import NewProduct6 from "../img/new6.png";
import Sponsor1 from "../img/logo1.png";
import Sponsor2 from "../img/logo2.png";
import Sponsor3 from "../img/logo3.png";
import Sponsor4 from "../img/logo4.png";
import FooterStore1 from "../img/footerstore1.png";
import FooterStore2 from "../img/footerstore2.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";

const StoreFront = () => {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState("");

	const showMenu = (e) => {
		e.preventDefault();
		setToggle(!toggle);
	};

	return (
		<>
			<Router>
				<header className="l-header">
					<nav className="nav bd-grid">
						<div>
							<NavLink
								to="/"
								className="nav__logo"
								exact
								activeClassName="active"
							>
								SARA
							</NavLink>
						</div>
						<div className={`nav-menu ${toggle && "show-menu"}`}>
							<ul className="nav__list">
								<li className="nav__item">
									<NavLink
										to="/"
										className="nav__link"
										exact
										activeClassName="active"
									>
										Home
									</NavLink>
								</li>
								<li className="nav__item">
									<NavLink
										to="/featured"
										className="nav__link"
										exact
										activeClassName="active"
									>
										Featured
									</NavLink>
								</li>
								<li className="nav__item">
									<NavLink
										to="/new"
										className="nav__link"
										exact
										activeClassName="active"
									>
										New
									</NavLink>
								</li>
								<li className="nav__item">
									<NavLink
										to="/subscribe"
										className="nav__link"
										exact
										activeClassName="active"
									>
										Subscribe
									</NavLink>
								</li>
							</ul>
						</div>
						<div>
							<div className="nav__cart">
								<ShoppingCartIcon />
							</div>
							<div className="nav__toggle" onClick={showMenu}>
								<MenuIcon />
							</div>
						</div>
					</nav>
				</header>
				<main className="l-main">
					<section className="home">
						<div className="home__container bd-grid">
							<div className="home__data">
								<h1 className="home__title">
									NEW <br />
									<span>ARRIVALS</span>
								</h1>
								<a href="" className="button">
									GO SHOPPING
								</a>
							</div>
							<img src={Home} alt="" className="home__img" />
						</div>
					</section>
					<section className="collection section">
						<div className="collection__container bd-grid">
							<div className="collection__box">
								<img src={BackpackMan} alt="" className="collection_" />
								<div className="collection__data">
									<h2 className="collection__title">
										<span className="collection__subtitle">Backpack</span>
										<br />
									</h2>
									<a href="#" className="collection__view">
										View colleciton
									</a>
								</div>
							</div>
							<div className="collection__box">
								<div className="collection__data">
									<h2 className="collection__title">
										<span className="collection__subtitle">Backpack</span>
										<br />
									</h2>
									<a href="#" className="collection__view">
										View colleciton
									</a>
								</div>
								<img src={BackpackWoman} alt="" className="collection_" />
							</div>
						</div>
					</section>
					<section className="featured section">
						<h2 className="section-title">FEATURED PRODUCTS</h2>
						<a href="#" className="section-all">
							View All
						</a>
						<div className="featured__container bd-grid">
							<div className="featured__product">
								<div className="featured__box">
									<div className="featured__new">NEW</div>
									<img src={Product1} alt="" className="featured__img" />
								</div>
								<div className="featured__data">
									<h3 className="featured__name">HeadPhone One Black</h3>
									<span className="featured__price">$23</span>
								</div>
							</div>
							<div className="featured__product">
								<div className="featured__box">
									<div className="featured__new">NEW</div>
									<img src={Product2} alt="" className="featured__img" />
								</div>
								<div className="featured__data">
									<h3 className="featured__name">Boom Box</h3>
									<span className="featured__price">$253</span>
								</div>
							</div>
							<div className="featured__product">
								<div className="featured__box">
									<div className="featured__new">NEW</div>
									<img src={Product3} alt="" className="featured__img" />
								</div>
								<div className="featured__data">
									<h3 className="featured__name">Earpods</h3>
									<span className="featured__price">$95</span>
								</div>
							</div>
							<div className="featured__product">
								<div className="featured__box">
									<div className="featured__new">NEW</div>
									<img src={Product4} alt="" className="featured__img" />
								</div>
								<div className="featured__data">
									<h3 className="featured__name">Smart Watch</h3>
									<span className="featured__price">$102</span>
								</div>
							</div>
						</div>
					</section>
					<section className="offer section">
						<div className="offer__bg">
							<div className="offer__data">
								<h2 className="offer__title">Special Offer</h2>
								<p className="offer__description">
									Special discounts for women this summer
								</p>
								<a href="" className="button">
									Shop Now
								</a>
							</div>
						</div>
					</section>
					<section className="new section">
						<h2 className="section-title">NEW ARRIVALS</h2>
						<a href="" className="section-all">
							View All
						</a>
						<div className="new__container bd-grid">
							<div className="new__box">
								<img src={NewProduct1} alt="" className="new__img" />
								<div className="new__link">
									<a href="" className="button">
										View Product
									</a>
								</div>
							</div>
							<div className="new__box">
								<img src={NewProduct2} alt="" className="new__img" />
								<div className="new__link">
									<a href="" className="button">
										View Product
									</a>
								</div>
							</div>
							<div className="new__box">
								<img src={NewProduct3} alt="" className="new__img" />
								<div className="new__link">
									<a href="" className="button">
										View Product
									</a>
								</div>
							</div>
							<div className="new__box">
								<img src={NewProduct4} alt="" className="new__img" />
								<div className="new__link">
									<a href="" className="button">
										View Product
									</a>
								</div>
							</div>
							<div className="new__box">
								<img src={NewProduct5} alt="" className="new__img" />
								<div className="new__link">
									<a href="" className="button">
										View Product
									</a>
								</div>
							</div>
							<div className="new__box">
								<img src={NewProduct6} alt="" className="new__img" />
								<div className="new__link">
									<a href="" className="button">
										View Product
									</a>
								</div>
							</div>
						</div>
					</section>
					<section className="newsletter">
						<div className="newsletter__container bd-grid">
							<div className="newsletter__subscribe">
								<h2 className="section-title">OUR NEWSLETTER</h2>
								<p className="newsletter__description">
									Promotion new products and sales. Directly to your email
								</p>
								<form action="" className="newsletter__form">
									<input
										type="text"
										className="newsletter__input"
										placeholder="Enter your email"
									/>
									<a href="" className="button">
										SUBSCRIBE
									</a>
								</form>
							</div>
						</div>
					</section>
					<section className="sponsors section">
						<div className="sponsors__container bd-grid">
							<div className="sponsors__logo">
								<img src={Sponsor1} alt="" />
							</div>
							<div className="sponsors__logo">
								<img src={Sponsor2} alt="" />
							</div>
							<div className="sponsors__logo">
								<img src={Sponsor3} alt="" />
							</div>
							<div className="sponsors__logo">
								<img src={Sponsor4} alt="" />
							</div>
						</div>
					</section>
					<footer className="footer section">
						<div className="footer__container bd-grid">
							<div className="footer__box">
								<h3 className="footer__title">SARA</h3>
								<p className="footer__deal">Products store</p>
								<div className="footer__images">
									<a href="#">
										<img src={FooterStore1} alt="" />
									</a>
									<a href="#">
										<img src={FooterStore2} alt="" />
									</a>
								</div>
							</div>
							<div className="footer__box">
								<h3 className="footer__title">EXPLORE</h3>
								<ul>
									<li>
										<a href="#" className="footer__link">
											Home
										</a>
									</li>
									<li>
										<a href="#" className="footer__link">
											Featured
										</a>
									</li>
									<li>
										<a href="#" className="footer__link">
											New
										</a>
									</li>
									<li>
										<a href="#" className="footer__link">
											Subscribe
										</a>
									</li>
								</ul>
							</div>
							<div className="footer__box">
								<h3 className="footer__title">OUR SERVICES</h3>
								<ul>
									<li>
										<a href="#" className="footer__link">
											Pricing
										</a>
									</li>
									<li>
										<a href="#" className="footer__link">
											Free Shipping
										</a>
									</li>
									<li>
										<a href="#" className="footer__link">
											Gift Cards
										</a>
									</li>
								</ul>
							</div>
							<div className="footer__box">
								<h3 className="footer__title">FOLLOW US</h3>
								<a href="#" className="footer__social">
									<FacebookIcon />
								</a>
								<a href="#" className="footer__social">
									<InstagramIcon />
								</a>
								<a href="#" className="footer__social">
									<TwitterIcon />
								</a>
							</div>
						</div>
						<div className="footer__copy">
							<CopyrightIcon />
							<p>2021 copyright all rights reserved</p>
						</div>
					</footer>
				</main>
			</Router>
		</>
	);
};

export default StoreFront;
