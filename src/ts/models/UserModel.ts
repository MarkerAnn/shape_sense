import { User } from '../types/User'
import { UnitSystem } from '../enums/UnitSystem'

/**
 * Class representing the UserModel.
 * Manages user data, including saving to and retrieving from session storage.
 */
export class UserModel {
  private data: User

  /**
   * Creates an instance of UserModel.
   * Initializes the user data from session storage or sets default values.
   */
  constructor() {
    const savedData = sessionStorage.getItem('userModel')
    this.data = savedData ? JSON.parse(savedData) : { unitSystem: 'metric' }
  }

  /**
   * Sets new data for the user and saves it to session storage.
   * @param {Partial<User>} newData - The new data to set.
   */
  public setData(newData: Partial<User>): void {
    Object.assign(this.data, newData)
    this.saveToSession()
  }

  /**
   * Retrieves the user data.
   * @returns {User} The current user data.
   */
  public getData(): User {
    return {
      weight: this.data.weight,
      height: this.data.height,
      unitSystem: this.data.unitSystem,
      age: this.data.age,
      gender: this.data.gender,
      waist: this.data.waist,
      hip: this.data.hip,
      neck: this.data.neck,
      activityLevel: this.data.activityLevel,
      dailyCalories: this.data.dailyCalories,
      weightGoal: this.data.weightGoal,
      weeksToWeightGoal: this.data.weeksToWeightGoal,
    }
  }

  /**
   * Resets the user data to default values and saves it to session storage.
   */
  public resetData(): void {
    this.data = { unitSystem: UnitSystem.METRIC }
    this.saveToSession()
  }

  /**
   * Saves the current user data to session storage.
   * @private
   */
  private saveToSession(): void {
    sessionStorage.setItem('userModel', JSON.stringify(this.data))
  }
}
