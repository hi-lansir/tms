declare namespace API {
  type BaseResponseBoolean = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseInteger = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponseLoginStaffVO = {
    code?: number
    data?: LoginStaffVO
    message?: string
  }

  type BaseResponseLoginStudentsVO = {
    code?: number
    data?: LoginStudentsVO
    message?: string
  }

  type deleteDepartmentParams = {
    id: number
  }

  type Departments = {
    department_id?: number
    department_name?: string
    department_code?: string
    is_delete?: number
  }

  type getByIdParams = {
    id: number
  }

  type LoginStaffVO = {
    staff_id?: number
    staff_number?: string
    first_name?: string
    last_name?: string
    email?: string
    department_id?: number
    title?: string
    token?: string
  }

  type LoginStudentsVO = {
    student_id?: number
    student_number?: string
    first_name?: string
    last_name?: string
    email?: string
    department_id?: number
    enrollment_date?: string
    token?: string
  }

  type StaffLoginRequest = {
    staff_number?: string
    password_hash?: string
  }

  type StaffRegisterRequest = {
    staff_number?: string
    last_name?: string
    first_name?: string
    email?: string
    password_hash?: string
    check_password?: string
    title?: string
  }

  type StudentsLoginRequest = {
    student_number?: string
    password_hash?: string
  }

  type StudentsRegisterRequest = {
    student_number?: string
    last_name?: string
    first_name?: string
    email?: string
    password_hash?: string
    check_password?: string
  }
}
