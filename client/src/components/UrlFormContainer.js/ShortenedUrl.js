import React, {useState, useEffect} from "react";
import {
  ListGroup,
  ListGroupItem,
} from "shards-react";
import axios from 'axios';

function ShortenUrl (url){
  console.log(url);
/*  const [shortyUrl, setShortUrl] = useState();
 var body = {
  "longUrl":url
}
const shorten = () => {
axios.post("http://localhost:5000/api/url/shorten", body, {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(result => {
      console.log(result.data.urlCode);
      return result.data.urlCode;
}).catch(err => {
    console.log("err");
})
}
let shortUrl = shorten()
*/
let surl = url
  return(
  <ListGroup flush>
    <ListGroupItem className="p-3">
    </ListGroupItem>
  </ListGroup>
  );
}

export default ShortenUrl;
