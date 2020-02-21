import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";
//import shorten from './ShortenedUrl';
import axios from 'axios';
console.log(window.location.hostname);
function FormForUrl () {
  const [inputUrl, setInputUrl] = useState('');
  const [url, setUrl] = useState({});
  const [error, setError] = useState('');

  const shorten = (url) => {
    var body = {
      "longUrl":url
    }
    axios.post("http://" + window.location.hostname + ":5000/api/url/shorten", body, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(result => {
          setError('')
          console.log(result.data.urlCode);
          result.data.shortUrl = "http://" + window.location.hostname + ":5000/" + result.data.urlCode;
          setUrl(result.data);
  //        return result.data.urlCode;
    }).catch(err => {
        console.log(err);
        setError(err);
    })
    }
    const formSubmit = (e) => {
    e.preventDefault();
    console.log("shorten "+inputUrl);
    shorten(inputUrl)
  }
  return(
    <div>
    <ListGroup flush>
    <ListGroupItem className="p-3">
          <Form onSubmit={(e)=>formSubmit(e)}>
            
            <FormGroup>
              <FormInput id="feInputAddress" placeholder="example: https://www.google.co.in/" value={inputUrl} onChange={(e)=>setInputUrl(e.target.value)}/>
            </FormGroup>

            <Button type="submit">Shorten</Button>
          </Form>

    </ListGroupItem>
  </ListGroup>
  <ListGroup flush>
    <ListGroupItem className="p-3">
    { error?'Insert a valid Url':<a href={url["shortUrl"]}>{url["shortUrl"]}</a>}
    </ListGroupItem>
  </ListGroup>
  </div>
  );
};

export default FormForUrl;
