import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Flex,
  useToast
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const ContactForm = () => {
  const toast = useToast()

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    message: Yup.string().required('Message is required!')
  })

  const [_status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      toast({
        title: 'Message has been sent!',
        description: msg,
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
      toast({
        title: 'Something went wrong!',
        description: msg,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT,
      data: values
    })
      .then(_response => {
        actions.setSubmitting(false)
        actions.resetForm()
        handleServerResponse(true, 'Thank you! We will be reaching you soon.')
      })
      .catch(error => {
        console.log(error)
        handleServerResponse(
          false,
          'There was an error sending your message. Please try again.'
        )
      })
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={handleOnSubmit}
      validationSchema={formSchema}
    >
      {props => (
        <Form noValidate>
          <Field name="name" id="name" type="text">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                pb={3}
              >
                <FormLabel>Full name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" id="email" type="email">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                pb={3}
              >
                <FormLabel>Email</FormLabel>
                <Input {...field} id="email" placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message" id="message" content="textarea">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.message && form.touched.message}
                pb={3}
              >
                <FormLabel>Message</FormLabel>
                <Textarea {...field} id="message" placeholder="message" />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Flex justify="center" mt={3} align="center" direction="column">
            <Button
              colorScheme="blue"
              isLoading={props.isSubmitting}
              loadingText="Submitting"
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
