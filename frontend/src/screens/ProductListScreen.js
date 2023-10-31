import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MessageBox from '../components/MessageBox';

export default function ProductListScreen() {
  const [productInfo, setProductInfo] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    brand: '',
  });

  const createHandler = () => {
    console.log('Product Info:', productInfo);
    // You can add your API call logic here to send productInfo to the server if needed.
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Products</h1>
        </Col>
      </Row>

      <Container className="text-center">
        <Form>
          <Form.Group>
            <Form.Label htmlFor="id">Product ID:</Form.Label>
            <Form.Control
              type="text"
              id="id"
              name="id"
              value={productInfo.id}
              onChange={(e) =>
                setProductInfo({ ...productInfo, id: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="name">Product Name:</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={productInfo.name}
              onChange={(e) =>
                setProductInfo({ ...productInfo, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="price">Product Price:</Form.Label>
            <Form.Control
              type="number"
              id="price"
              name="price"
              value={productInfo.price}
              onChange={(e) =>
                setProductInfo({ ...productInfo, price: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="category">Product Category:</Form.Label>
            <Form.Control
              type="text"
              id="category"
              name="category"
              value={productInfo.category}
              onChange={(e) =>
                setProductInfo({ ...productInfo, category: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="brand">Product Brand:</Form.Label>
            <Form.Control
              type="text"
              id="brand"
              name="brand"
              value={productInfo.brand}
              onChange={(e) =>
                setProductInfo({ ...productInfo, brand: e.target.value })
              }
            />
          </Form.Group>
        </Form>

        <Button type="button" onClick={createHandler}>
          Create Product
        </Button>
      </Container>
    </div>
  );
}
