function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function () {
		return `
			${this.firstName} ${this.lastName}
		`
	}
}

const Profile3 = _ => {

	const newUser = new User("Anna", "Kovács");
	console.log(newUser);

	// return <div>{newUser.firstName} {newUser.lastName}</div>
	return <div>{newUser.fullName()}</div>
}

export default Profile3;