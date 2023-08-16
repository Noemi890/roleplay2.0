import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

const Characters = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data: profiles } = await supabase.from("profiles").select();

  return (
    <>
      <ul className="text-white text-center my-auto">
        {profiles?.length ? (
          profiles?.map((prof) => {
            return (
              <li key={prof.id}>
                <li>{prof.name}</li>
                <li>{prof.surname}</li>
              </li>
            );
          })
        ) : (
          <li> EMPTY! </li>
        )}
      </ul>
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        <Link href="/">Go Back</Link>
      </button>
    </>
  );
};

export default Characters;
