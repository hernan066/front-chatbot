import "./newFlow.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("*Requerido"),
  password: Yup.string()
    .min(6, "6 caracteres minimo")

    .required("*Requerido"),
});

const NewFlow = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);

    //const response = await loginApi(values);

    //console.log(response);

    /* if (response?.jwt) {
          dispatch(
            login({
              id: response.user.id,
              username: response.user.username,
              email: response.user.email,
              jwt: response.jwt,
            })
          );
    
          setError(false);
          //console.log("Login exitoso");
          navigate("/");
        } else {
          setError(true);
          //console.log("Error en el login");
        } */

    setIsLoading(false);
  };

  return (
    <section className="new__container">
      <h3>New Initial</h3>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex__1">
              <Field type="text" name="key" placeholder="Input Key" />

              <ErrorMessage
                name="key"
                component="p"
                className="form__error"
              />
            </div>
            <div className='flex__3'>
              <Field type="text" name="keywords" placeholder="Input Keywords" />
              <ErrorMessage
                name="keywords"
                component="p"
                className="form__error"
              />
            </div>
            <div className='flex__1'>
              <button
              className="flow__add"
              >
                Add New Initial
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default NewFlow;
