import personalInfo from "../../data/personalInfo";

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <p>
        Puedes escribirme a:{" "}
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </p>
    </div>
  );
};

export default Contact;
