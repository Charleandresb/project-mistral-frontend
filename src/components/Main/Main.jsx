import banner from "../../images/banner.jpg";

export default function Main() {
  return (
    <main>
      <section className="hero">
        <img className="hero__image" src={banner} alt="Portada" />
      </section>
    </main>
  );
}
