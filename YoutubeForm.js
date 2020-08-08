import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const initialValues = {
    name: "Gor",
    email: "",
    channel: "",
} 

const onSubmit = values =>{
    console.log("Form data", values)
}


const validationSchema = Yup.object({
    name: Yup.string().required("Required!")
    .max(15,'Must be 15 characters or less')
    .min(2,'Must be 2 characters or more')
    ,
    email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
    channel: Yup.string().required("Recuired")
})

function YoutubeForm() {

    // console.log("Formik values", formik.values)
    // console.log("Formik errors", formik.errors)
    // console.log("Visited files", formik.touched)

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
            <Form >
                <label htmlFor="name">Name</label>
                <br />
                <Field type="text" id="name" name="name"/>
                <br />
                <ErrorMessage name="name"/>
                <br />

                <label htmlFor="name">E-mail</label>
                <br />
                <Field type="email" id="email" name="email"/>
                <br />
                <ErrorMessage name="email"/>
                <br />

                <label htmlFor="name">Channel</label>
                <br />
                <Field type="text" id="channel" name="channel"/>
                <br />
                <ErrorMessage name="channel"/>
                <br />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
