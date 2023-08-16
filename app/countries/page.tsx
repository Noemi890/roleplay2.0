import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  console.log(countries);

  return (
    <>
      <ul className="my-auto">
        {countries?.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        <Link href="/">Go Back</Link>
      </button>
    </>
  );
}
