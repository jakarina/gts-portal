import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import ProjectListView from "~/components/ProjectListView";
import SearchItemWithButton from "~/components/SearchItemWithButton";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data } = api.elevators.getAll.useQuery();

  if (!data) {
    return <></>
  }
  
  return (
    <div className="mx-16 mt-8">
      <h1 className="text-4xl font-bold text-white">Tesisat Listesi</h1>
      <SearchItemWithButton searchItem="Tesisat No" buttonText="Ara" />
      <ProjectListView elevators={data} />
    </div>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
