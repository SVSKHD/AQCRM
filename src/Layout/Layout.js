import {useState , useEffect} from "react"
import { Container } from "react-bootstrap"
import AquaNav from "./Nav"


const AquaLayout = (props) => {
    const [screen , setScreen] = useState({width:window.innerWidth , height:window.innerHeight })
    const handleResize = () => {
        setScreen({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
    
      useEffect(() => {
        if(window!==undefined){
        window.addEventListener('resize', handleResize);
        }
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <>
        <div className="mb-5"/>
            <Container fluid={screen.width<725? true : false}>
                <AquaNav/>
            </Container>
            <div className="m-1">
            {props.children}
            </div>
            
        </>
    )
}
export default AquaLayout