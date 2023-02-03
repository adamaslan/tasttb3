import { Link, useLoaderData } from "@remix-run/react";
import { useUser } from "../../../tastytb2/app/utils";
import { loader } from "../../../tastytb2/app/routes/notes";

export default function Article1() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (


    <div className="h-full w-80 border-r bg-gray-50">
      <Link to="article1" className="block p-4 text-xl text-blue-500">
ARTICLE 1
      </Link>




      <p className="p-4">Article 2</p>
    </div>

  );
}
