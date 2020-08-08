import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
    name: "Gor",
    email: "",
    channel: "",
}

const onSubmit = values =>{
    console.log("Form data", values) 
}

const validate = values =>{
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = "This filed is required"
    
                let errors = {}
    
                if(!values.name){
                    errors.name = "Recuired"
                }
                if(!values.email){
                    errors.email = "Recuired"
                }
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if(!values.channel){
                    errors.channel = "Recuired"
                }
                return errors
            }

const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
    channel: Yup.string().required("Recuired")
})

function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate, 
        validationSchema, 
    })
    // console.log("Formik values", formik.values)
    // console.log("Formik errors", formik.errors)
    console.log("Visited files", formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" id="name" name="name"
                         onChange={formik.handleChange} 
                         value={formik.values.name}
                         onBlur={formik.handleBlur}
                          />
                <br />
                {formik.touched.name && formik.errors.name ? 
                <div className="errorMasage">{formik.errors.name}</div>:
                null}
                <br />

                <label htmlFor="name">E-mail</label>
                <br />
                <input type="email" id="email" name="email" 
                         onChange={formik.handleChange} 
                         value={formik.values.email}
                         onBlur={formik.handleBlur}
                         />
                <br />
                {formik.touched.email && formik.errors.email ? 
                <div className="errorMasage">{formik.errors.email}</div>:
                null}
                <br />

                <label htmlFor="name">Channel</label>
                <br />
                <input type="text" id="channel" name="channel" 
                         onChange={formik.handleChange} 
                         value={formik.values.channel}
                         onBlur={formik.handleBlur}
                         />
                <br />
                {formik.touched.channel && formik.errors.channel ? 
                <div className="errorMasage">{formik.errors.channel}</div>:
                null}
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
