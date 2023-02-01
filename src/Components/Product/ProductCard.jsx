import { Grid, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './product.scss'

function ProductCard({category_name, product_name}) {
  return (
    <div className="productCard">
      <Container>
       <Grid container>

       <Grid item lg={3} md={3}>
          <div className="categoryArea">
            <img src="https://cdn.pixabay.com/photo/2023/01/14/13/01/car-7718136_1280.jpg" />
            <div className="catInfo">
                <p>{category_name}</p>
                <Link className="shopButton" to={"/"}>Shop now</Link>
            </div>
          </div>
        </Grid>
        <Grid item lg={9} md={9}>

            {product_name}
        </Grid>
       </Grid>
      </Container>
    </div>
  );
}

export default ProductCard;
