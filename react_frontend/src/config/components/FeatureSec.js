import { Box, Container, Grid } from "@mui/material";
import FeaturesCard from "./FeaturesCard";
import {useFetchProducts} from "./CustomHooks";

function FeatureSec() {   
  const products = useFetchProducts();
  const featureProducts = products.filter((product) => {
    return product.featured === true;
  });
  console.log(featureProducts);

  return (
    <Box bgcolor="#eceff1" p={2}>
      <Container>
        <p style={{ color: "blue", fontSize: "12px" }}>CHECK NOW</p>
        <h2>Our Feature Services</h2>
        <Grid container spacing={2}>
          {featureProducts.map((featureProduct) => {
            const {id} = featureProduct;
            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <FeaturesCard
                featureProductData={featureProduct} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeatureSec;
