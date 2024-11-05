import Card from "@/components/Cards/Card";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Hero from "@/components/Hero/Hero";
import PlanTrip from "@/components/PlanTrip/PlanTrip";
import Head from "next/head";

export default function Home({ meta, headings }) {
  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>{meta.title}</title>
      </Head>
      <Hero headings={headings} />
      <Card />
      <PlanTrip headings={headings} />
      <ChooseUs />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/home`);
  const { data } = await response.json();

  const { meta, headings } = data;

  return {
    props: {
      meta,
      headings,
    },
  };
}
