import { User } from '../types/User'
import { UnitSystem } from '../enums/UnitSystem'

let userModelInstance: UserModel | null = null

export class UserModel {
  private data: User

  private constructor() {
    const savedData = sessionStorage.getItem('userModel')
    this.data = savedData ? JSON.parse(savedData) : { unitSystem: 'metric' }
  }

  public static getInstance(): UserModel {
    if (!userModelInstance) {
      userModelInstance = new UserModel()
    }
    return userModelInstance
  }

  public setData(newData: Partial<User>): void {
    Object.assign(this.data, newData)
    this.saveToSession()
  }

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

  public resetData(): void {
    this.data = { unitSystem: UnitSystem.METRIC }
    this.saveToSession()
  }

  private saveToSession(): void {
    sessionStorage.setItem('userModel', JSON.stringify(this.data))
  }
}

// TODO: Static
