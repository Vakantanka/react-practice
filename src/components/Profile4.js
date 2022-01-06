// function User(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.fullName = function () {
// 		return `
// 			${this.firstName} ${this.lastName}
// 		`
// 	}
// }

class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	fullName() {
		return `
			${this.firstName} ${this.lastName}
		`
	}
}

const Profile4 = _ => {

	const newUser = new User("Eric", "Cartman");
	console.log(newUser);

	// return <div>{newUser.firstName} {newUser.lastName}</div>
	return <div>{newUser.fullName()}</div>
}

export default Profile4;