import { Suspense } from "react";
import Reservation from "../../_components/Reservation";
import Spinner from "../../_components/Spinner";
import { getCabin, getCabins } from "../../_lib/data-service";
import Cabin from "../../_components/Cabin";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

// Very Important!
// Pre render all cabins pages to create static website
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export default async function CabinPage({ params }) {
  // console.log(params);  // Name of dynamic route segment

  // ---------- This cause waterfall effect ------------
  // Because of multiple fetches which aren't parallel.So we need to use a promise

  const cabin = await getCabin(params.cabinId);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  // const [cabin, settings, bookedDates] = await Promise.all([
  //   getCabin(params.cabinId),
  //   getSettings(),
  //   getBookedDatesByCabinId(params.cabinId),
  // ]);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2
          className="text-5xl font-semibold text-center mb-10
        text-accent-400"
        >
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        {/* We moved setting and booking data fetch into reservation component.
        Then wrap it inside Suspance. Then Loading spinner will be shown on page load */}
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
