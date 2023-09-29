import ArtistCard from "@/components/ArtistCard";
import FeedHeader from "@/components/FeedHeader";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
import getUsers from "@/actions/getUsers";

export default async function Home() {

  const users = await getUsers()

  
  return (
    <div className="flex flex-col gap-y-6">
      <Header />

      <div className="flex flex-col gap-y-3">
        <p className="text-lg font-bold">Featured Artists</p>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-4 lg:gap-x-5">
          {users.map((user, i) => {
            if(i < 4) {
              return (
                <ArtistCard
                  key={user.name}
                  imgUrl={user.avatar_url}
                  name={user.name}
                  bid={user.id}
                  index={i}
                />
              )
            }
          })}
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <FeedHeader />
        <Feed />
      </div>
    </div>
  )
}
