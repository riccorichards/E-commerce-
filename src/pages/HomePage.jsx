import Sliders from '../components/Sliders';
import Announcement from './../components/Announcement';
import NavBar from './../components/header/NavBar';
import Category from './../components/category/Category';
import Products from './../components/PopularProducts/Products';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';


const HomePage = () => {
	return (
		<>
			<Announcement />
			<NavBar />
			<Sliders />
			<Category />
			<Products />
			<NewsLetter />
			<Footer />
		</>
	)
}

export default HomePage;