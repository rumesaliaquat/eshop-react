import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setLoading,
  setError,
} from "../config/redux/actions/productActions";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Loading from "../config/components/Loading";
import { Box } from "@mui/system";

function Products() {
  const url = "https://api.pujakaitem.com/api/products";
  const currState = useSelector((state) => state.productReducer);
  const { products, isLoading } = currState;
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      dispatch(setLoading());
      try {
        if (products.length) {
          const res = await axios.get(url);
          dispatch(setProducts(res.data));
        }
      } catch (err) {
        dispatch(setError("Error:", err));
        // console.log("Error:", err);
      }
    };
    getProducts();
  }, [dispatch, products.length]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Typography variant="h4" textAlign="center" m={2} fontFamily="cooper">
            Products List
          </Typography>
          <Grid container spacing={2}>
            {products.map((product) => {
              const { image, name, price } = product;
              return (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="190"
                      image={image}
                      alt={name}
                    />
                    <CardContent>
                      <Box display="flex" justifyContent="space-between">
                        <Typography
                          gutterBottom
                          variant="h7"
                          component="div"
                          fontWeight="bold"
                        >
                          {name}
                        </Typography>
                        <Typography variant="h7" color="primary">
                          ${price}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Products;

// NOTE:
// useSeletor returns current state.

// API ka data redux mai store krwane k liae dispatch k through actions ke functions obj ko bhejein ge as a argument then wo action reducer ke pass jaega or jo task perform krna hai payload k sth wo hoga or phr agr redux se display krna ho app mai to kr skte
