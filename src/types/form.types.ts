export type LoginFormData = {
  email: string
  password: string
}

export type RegisterFormData = LoginFormData & {
  confirm_password: string
}
