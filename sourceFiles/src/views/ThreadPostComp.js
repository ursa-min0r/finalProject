import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";
import Meetups from "./Meetups";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-post__editor mb-1" />
      </Form>
 <div>
 
 </div>
    </CardBody>
  </Card>
);

export default Editor;
