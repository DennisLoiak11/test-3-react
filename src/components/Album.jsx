import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Album = () => {

    const [albums, setAlbums] = useState([]);
    const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen';
    const fetchAlbums = async () => {

        const response = await fetch(URL);
        try {
            if (response.ok) {
                const albums = await response.json();
                console.log("data : ", albums);

                const AlbumsArray = [...albums.data].slice(0, 4);
                setAlbums(AlbumsArray);

            } else {
                console.log("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <div>
            <h1>Rock Classics</h1>
            <Row className="p-0 m-0">
                {albums.map((album, index) => (
                    <Col sm={3} key={index}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{album.title}</Card.Title>
                                <Card.Subtitle>{album.summary}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))};
            </Row>
        </div>
    );

}
export default Album;