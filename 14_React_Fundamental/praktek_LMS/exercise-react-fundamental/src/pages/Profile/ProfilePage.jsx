import Header from "../../components/Header/Header";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function ProfilePage({users}) {
  return (
    <>
      <Header text="Profile Page"/>
      {users.map((user) => <ProfileCard user={user}/>)}
    </>
  )
}

export default ProfilePage;