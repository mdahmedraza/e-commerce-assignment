
import Product from "../product/Product";
import {useSelector} from 'react-redux';

const Home = () => {
    const authToken = useSelector((state) => state.auth.token)
    return(
        <div>
            {authToken && <Product />}
        </div>
    )
}

export default Home;