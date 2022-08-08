import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("*Requerido"),
  password: Yup.string()
    .min(6, "6 caracteres minimo")

    .required("*Requerido"),
});

const NewResponse = ({ id }) => {
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
      <h3>New Response</h3>

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
            <div className="form__row flex__2">
              <div className="flex__2">
                <Field type="text" name="key" placeholder="Input Key" />

                <ErrorMessage
                  name="key"
                  component="p"
                  className="form__error"
                />
              </div>

              <div className="flex__2">
                <Field type="text" name="media" placeholder="Input Media" />
                <ErrorMessage
                  name="media"
                  component="p"
                  className="form__error"
                />
              </div>
              <div className="flex__2">
                <Field type="text" name="trigger" placeholder="Input Trigger" />
                <ErrorMessage
                  name="trigger"
                  component="p"
                  className="form__error"
                />
              </div>

              <div className="flex__2">
                <Field type="text" name="list" placeholder="Input List" />
                <ErrorMessage
                  name="list"
                  component="p"
                  className="form__error"
                />
              </div>
            </div>

            <div className="flex__3">
              <Field
                type="text"
                name="replyMessage"
                placeholder="Input Reply Message"
                as="textarea"
                rows="8"
                cols="100"
              />
              <ErrorMessage
                name="replyMessage"
                component="p"
                className="form__error"
              />
            </div>
            <div className="flex__1 button__add">
              <button className="flow__add">Add New Response</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default NewResponse;
