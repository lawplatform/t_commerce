import Footer from "../components/Footer";
import Products from "../components/Products";
import Slide from "../components/Slide";

export const Home = () => {
	return (
		<div className="font-bodyfont"> this is home main page
			<Slide />
			<Products />
			<Footer />
		</div>
	)
}

export default Home;
