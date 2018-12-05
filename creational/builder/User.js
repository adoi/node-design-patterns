class User {
    constructor(build) {
        this.userId = build.userId;
        this.userName = build.userName;
        this.userEmail = build.userEmail;
    }

    static get UserBuilder() {
        class UserBuilder {
            constructor(userId) {
                this.userId = userId;
            }

            withName(userName) {
                this.userName = userName;
                return this;
            }

            withEmail(userEmail) {
                this.userEmail = userEmail;
                return this;
            }

            build() {
                return new UserBuilder(this);
            }
        }
        return UserBuilder;
    }
}

module.exports = User;