import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function FeaturesCard({ featureProductData }) {
  const { id, image, name, price } = featureProductData;

  return (
    <Box component={NavLink} to={`/products/${id}`} style={{textDecoration:'none'}}>
      <Card>
        <CardMedia component="img" height="140" image={image} alt={name} />
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
    </Box>
  );
}

export default FeaturesCard;
