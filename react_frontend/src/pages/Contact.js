/* eslint-disable jsx-a11y/iframe-has-title */
import { TextField, Button, Grid, Box } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";



function ContactForm() {

  const formInitialValues = {
    name: "",
    email: "",
    message: "",
  };

  const formValidationSchema = Yup.object({
    name: Yup.string().required("Name is must"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is must"),
    message: Yup.string().required("Please enter your message"),
  });

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "30px" }}>Get In Touch</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.739117193702!2d67.08387556977539!3d24.9172544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3305536f43%3A0x98b87426439ffe19!2sBlock%205%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1678128771717!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Formik
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          console.log(
            "🚀 ~ file: Contact.js:139 ~ ContactForm ~ values:",
            values
          );
        }}
      >
       {/* {props => */}
        <Form>
          <Grid
            container
            spacing={2}
            my={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} width="40%">
              <Field
                name="name"
                as={TextField}
                label="Name"
                variant="outlined"
                fullWidth
                placeholder="Enter your name"
              />
              <Box>
                <ErrorMessage
                  name="name"
                  component="Box"
                  style={{ color: "red" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} width="40%">
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="Box"
                style={{ color: "red"}}
              />
            </Grid>

            <Grid item xs={12} width="40%">
              <Field
                name="message"
                as={TextField}
                label="Message"
                varikant="outlined"
                fullWidth
                multiline
                rows={4}
                placeholder="Enter your message"
              />
              <ErrorMessage name="message">
                {(errorMsg) => <Box sx={{ color: "red" }}>{errorMsg}</Box>}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="medium"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
         {/* }  */}
      </Formik>
    </>
  );
};

export default ContactForm;
