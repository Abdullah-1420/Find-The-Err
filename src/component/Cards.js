import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import { Card, Button } from "react-bootstrap";
function Cards() {
  const [memeImage, setMemeImage] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    const width = memesArray[randomNumber].width;
    const height = memesArray[randomNumber].height;
    setMemeImage(url);
  };

  useEffect(() => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  }, []);

  return (
    <div>
      <div className="center">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            height="200px"
            width="200px"
            variant="top"
            src={memeImage}
          />
          <Card.Body>
            <Button onClick={myRandomEmg} variant="primary">
              Get a new image
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
