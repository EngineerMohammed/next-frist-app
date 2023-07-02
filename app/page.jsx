import Feed from "@components/Feed";



export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Shear
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powerd Prompts</span>
      </h1>
      <p className="desc text-center ">
        Promptopia is an open-source AI Prompting Tool for modern World to
        Discover, Create and Sheare Creative Prompties
      </p>
      <Feed />
    </section>
  );
}
