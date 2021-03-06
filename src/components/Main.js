import {Link} from 'react-scroll'

const Main = () => {
    return (
        <div className="main">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_1plcwvk5.json"  background="transparent"  speed="1"  style={{width: "300px"}, {height: "300px"}}  loop  autoplay></lottie-player>
            <div className="title">Plantify</div>
            <div className="oneLiner">Plant Database</div>
            <Link activeClass="active" to="plant" spy={true} smooth={false}><button className="shopPlantsButton">Browse Plants</button></Link>
        </div>
    ) 
}

export default Main;