import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";

export default function CreateGenre() {
  // const history = useHistory();
  return (
    <>
      <h3>Create Genre</h3>

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={async value => {
          //when form is posted
          await new Promise(r=>setTimeout(r, 1))
          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUppercase(),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Name" />
            <Button disable={formikProps.isSubmitting} type="submit">Save Changes</Button>
            <Link className="btn btn-secondary" to="/genres">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
