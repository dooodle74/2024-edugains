class User {
    constructor(isInstructor, username, password, XP = 0) {
      this.isInstructor = isInstructor;
      this.username = username;
      this.password = password;
      this.XP = XP;
    }
  
    // Getter method for XP (optional)
    getXP() {
      return this.XP;
    }
  
    // Method to increment XP (only available for regular users)
    incrementXP(amount) {
      if (!this.isInstructor) {
        this.XP += amount;
      } else {
        console.log('Only regular users can earn XP.');
      }
    }
  }
  
  export default User;