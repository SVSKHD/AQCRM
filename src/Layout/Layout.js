import { Container } from "react-bootstrap"
import AquaNav from "./Nav"
const AquaLayout = (props) => {
    return (
        <>
        <div className="mb-5"/>
            <Container>
                <AquaNav/>
            </Container>
            <div className="m-1">
            {props.children}
            </div>
            
        </>
    )
}
export default AquaLayout