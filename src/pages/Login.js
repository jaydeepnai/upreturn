import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '300px',
    marginTop: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(3),
    width: '200%',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));


function Login() {
  const navigate = useNavigate();
  const classes = useStyles();


  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      navigate("/Dashboard")
      const response = await axios.post('your_api_endpoint', values);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div class="log-in--14q" id="203:98">
      <div class="rectangle-1-Dgh" id="229:45"></div>
      <img class="image-L2Z" src={require('./wlogin.jpg')} id="226:43" />
      <div class="rectangle-3-SrH" id="229:46"></div>
      <p class="log-in-jKb" id="229:47">Log in</p>


      <p class="up-return-nx5" id="226:44">
        Up

        <br /><br />
        Return

      </p>

      <Formik
  initialValues={{ username: '', password: '' }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit} // Call handleSubmit function to handle form submission
>
  {({ isSubmitting, values, errors }) => (
    <Form className={classes.form}>
      {console.log(errors)}
      <Field
        validateOnBlur
        validateOnChange
        name="username"
        render={({ field, form }) => (
          <TextField
            {...field} // spread the field props
            type="text"
            label="Username"
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
        )}
      />
      <ErrorMessage name="username" component="div" className='password' />
      <Field
        validateOnBlur
        validateOnChange
        name="password"
        render={({ field, form }) => (
          <TextField
            {...field} // spread the field props
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
        )}
      />
      <ErrorMessage name="password" component="div" className='password' />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={isSubmitting}
        className={classes.button}
      >
        Login
      </Button>
    </Form>
  )}
</Formik>

    </div>

  )
}
export default Login
