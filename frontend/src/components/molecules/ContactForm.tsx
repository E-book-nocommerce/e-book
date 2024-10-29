import Input from '../atoms/Input.tsx';
import Button from '../atoms/Button.tsx';

export interface ContactFormProps {
  onSubmit?: () => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  return (
    <form className="w-full" onSubmit={onSubmit} id={'contact-form'}>
      <Input
        className={'mb-9'}
        label={'Name'}
        placeholder={'Your name'}
        type={'text'}
      />
      <Input label={'Email'} placeholder={'Your email'} type={'email'} />
      <Button
        type="submit"
        onClick={() => {}}
        disabled={false}
        className={'mt-12 w-full text-white'}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
