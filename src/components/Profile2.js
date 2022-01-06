
const Profile2 = _ => {

	const user = {
		firstName: "László",
		lastName: "Fenyvesi"
	}
		// const firstName = user.firstName;
		// const lastName = user.lastName;

	const {firstName, lastName} = user;

	return <div>
			<h2>{firstName}</h2>
			<h3>{lastName}</h3>
		</div>
}

export default Profile2;