import ContactForm from '../molecules/ContactForm.tsx';

export interface ContactBlockProps {
  onSubmit?: () => void;
}

const ContactBlock = ({ onSubmit }: ContactBlockProps) => {
  return (
    <div className="flex justify-between items-end gap-16 px-24 mb-28 2xl:px-[250px]">
      <div className="flex flex-col items-start max-w-[500px] pt-8">
        <h3 className="font-bold text-4xl mb-8">Did you know us?</h3>
        <p className="mb-12">
          We are about books and our purpose is to show you the book who can
          chage your life or distract you from the real world în a better one.
          BWorld works with the must popular publishs just for your delight. If
          you are about books, you must to subscribe to our newsletter.
        </p>
        <ContactForm onSubmit={onSubmit} />
      </div>
      <figure>
        <img src="/map.jpg" alt="" />
      </figure>
    </div>
  );
};

export default ContactBlock;
