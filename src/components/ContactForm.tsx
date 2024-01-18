import { useForm, ValidationError } from '@formspree/react';
import { useRef, type HTMLInputTypeAttribute, type ReactNode } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(import.meta.env.PUBLIC_FORM_ID);
  const form = useRef<HTMLFormElement | null>(null)

  if (state.succeeded) {
    toast.success("Message has been sent!")
    form.current?.reset()
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-xl mx-auto border p-6 rounded-xl mt-2 dark:border-gray-800 shadow'>
      <Label htmlFor='fullname'>Full Name</Label>
      <Input
        id="fullname"
        type="text"
        name="fullname"
      />
      <ValidationError
        prefix="Fullname"
        field="fullname"
        errors={state.errors}
      />
      <Label htmlFor='email'>Email Address</Label>
      <Input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <Label htmlFor='message'>Message</Label>
      <textarea
        id="message"
        name="message"
        className='border dark:border-gray-800 px-4 py-2 rounded dark:bg-gray-950 min-h-20'
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='bg-sky-500 w-fit mx-auto px-4 py-2 rounded-md text-white font-semibold'>
        Submit
      </button>
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string, children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className='-mb-2'>
      {children}
    </label>
  )
}

function Input({ type = 'text', ...props }: { id: string, name: string, type: HTMLInputTypeAttribute }) {
  return (
    <input {...props} type={type} required className='border rounded px-4 h-10 dark:bg-gray-950 dark:border-gray-800' />
  )
}
