import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me",
  keywords: ["About Page", "Angel Rafael", "Informacion"],
};

const About = () => {
  return (
    <>
      <article>
        <h1>About</h1>
        <p>
          Hi, I&apos;m a software developer and I love to code. I&apos;m
          currently learning TypeScript and React.
        </p>
      </article>
    </>
  );
};
export default About;
