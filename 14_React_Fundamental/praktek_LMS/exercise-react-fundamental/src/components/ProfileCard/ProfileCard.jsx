import StyledProfileCard from "./ProfileCard.styled";

function ProfileCard({user}) {
    return (
    <>  
        <StyledProfileCard>
        <img src={user.avatar} alt="avatar"/>
        <section>
            <h4>{user.first_name} {user.last_name}</h4>
            <p>{user.email}</p>
        </section>
        </StyledProfileCard>
    </>
  )
}

export default ProfileCard;