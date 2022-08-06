import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { actorCreationDTO } from "./actors.model";
import * as Yup from 'yup'
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";

export default function ActorForm(props: actorFormProps)
{
  return (

    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        firstName: Yup.string().required('This field is required').firstLetterUppercase(),
        middleName: Yup.string().firstLetterUppercase(),
        lastName: Yup.string().required('This field is required').firstLetterUppercase(),
        dateOfBirth: Yup.date().nullable().required('This field is required')
      })}

    >
      {(formikProps) => (
        <Form>
          <TextField field={"firstName"} displayName={"First Name"} />
          <TextField field={"middleName"} displayName={"Middle Name (optional)"} />
          <TextField field={"lastName"} displayName={"Last Name"} />
          <DateField displayName="Date of Birth" field="dateOfBirth" />
          <ImageField displayName="Picture" field="picture"
            imageURL={props.model.pictureURL}
          />
          <MarkdownField displayName="Biography" field="biography" />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link to="/actors" className="btn btn-secondary">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface actorFormProps
{
  model: actorCreationDTO;
  onSubmit(
    values: actorCreationDTO,
    action: FormikHelpers<actorCreationDTO>
  ): void;
}
