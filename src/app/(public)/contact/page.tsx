import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

const Contact = () => {
  return (
    <article >
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Contact
      </h1>
      <form
        action=""
        method="get"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols={30} rows={10}></textarea>
        <input type="submit" value="Send" />
      </form>
    </article>
  );
};

export default Contact;
