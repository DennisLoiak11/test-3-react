import Album from "./Album";
import { Col } from "react-bootstrap";

const Main = () => {
    return(
        <Col sm={10} className="p-0 m-0">
            <Album/>
            <Album/>
            <Album/>
            <Album/>
        </Col>
    );
}
export default Main;