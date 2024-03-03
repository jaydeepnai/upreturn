// import React from 'react'
// import Sidebar from '../components/Sidebar'

// function News() {
//   return (
//     <div class="news-updates-oZo" id="243:498">
// <div class="group-2322-Ef7" id="243:499">
// <div class="group-313-YQu" id="243:500">
// <Sidebar/>
// </div>
// <div class="rectangle-10-KLR" id="243:568"></div>
// <p class="news-update-eNh" id="243:616">News &amp; Update</p>
// <div class="rectangle-3858-8Ym" id="243:618"></div>
// <img class="interface-add-square-square-remove-cross-buttons-add-plus-button-4SR" src="/api/prod-ap-southeast-1-first-cluster/projects/Kc..." id="243:619"/>
// <div class="rectangle-3859-Ze5" id="243:633"></div>
// <div class="rectangle-3860-HKB" id="243:634"></div>
// <div class="rectangle-3861-Cww" id="243:635"></div>
// <p class="save-draft-LoF" id="243:639">Save Draft</p>
// <p class="title-ENq" id="243:636">Title</p>
// <p class="write-financial-year-updates-wHF" id="243:638">Write financial year updates</p>
// </div>
// </div>

//   )
// }

// export default News
import React from 'react'
import Sidebar from '../components/Sidebar'
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formContainer: {
      marginTop: theme.spacing(4),
    },
    formField: {
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
  }));

function News() {
    const classes = useStyles();

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required')
      });

      const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
          // You should replace 'your-api-endpoint' with the actual endpoint
          await axios.post('your-api-endpoint', values);
          alert('News submitted successfully!');
          resetForm();
        } catch (error) {
          console.error('Error submitting news:', error);
        } finally {
          setSubmitting(false);
        }
    }

  return (
    <div class="news-updates-oZo" id="243:498">
<div class="group-2322-Ef7" id="243:499">
<div class="group-313-YQu" id="243:500">
<Sidebar/>
</div>
<div class="rectangle-10-KLR" id="243:568"></div>
<p class="news-update-eNh" id="243:616">News &amp; Update</p>
<div class="rectangle-3858-8Ym" id="243:618"></div>
<img class="interface-add-square-square-remove-cross-buttons-add-plus-button-4SR" src="/api/prod-ap-southeast-1-first-cluster/projects/Kc..." id="243:619"/>
<div class="rectangle-3859-Ze5" id="243:633"></div>
<div class="rectangle-3860-HKB" id="243:634"></div>
<div class="rectangle-3861-Cww" id="243:635"></div>
{/* <p class="save-draft-LoF" id="243:639">Save Draft</p>
<p class="title-ENq" id="243:636">Title</p>
<p class="write-financial-year-updates-wHF" id="243:638">Write financial year updates</p> */}
   <Formik
          initialValues={{ title: '', content: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={classes.formContainer}>
              <Field
                as={TextField}
                name="title"
                label="Title"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.formField}
                helperText={<ErrorMessage name="title" />}
              />
              <Field
                as={TextField}
                name="content"
                label="Write financial year updates"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                className={classes.formField}
                helperText={<ErrorMessage name="content" />}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                className={classes.button}
              >
                Save Draft
              </Button>
            </Form>
          )}
        </Formik>
</div>
</div>

  )
}

export default News