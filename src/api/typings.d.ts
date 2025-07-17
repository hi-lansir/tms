declare namespace API {
  type Announcements = {
    announcement_id?: number
    class_id?: number
    content?: string
    create_time?: string
    instructor_id?: number
    is_delete?: number
    title?: string
  }

  type AnnouncementsAddRequest = {
    class_id?: number
    content?: string
    create_time?: string
    instructor_id?: number
    title?: string
  }

  type AnnouncementsDeleteRequest = {
    announcement_id?: number
  }

  type AnnouncementsQueryRequest = {
    announcement_id?: number
    class_id?: number
    create_time?: string
    current?: number
    instructor_id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    title?: string
  }

  type AnnouncementsUpdateRequest = {
    announcement_id?: number
    class_id?: number
    content?: string
    create_time?: string
    instructor_id?: number
    title?: string
  }

  type AnnouncementsVO = true

  type Assignments = {
    assignment_id?: number
    class_id?: number
    description?: string
    due_date?: string
    is_delete?: number
    max_points?: number
    title?: string
  }

  type AssignmentsAddRequest = {
    assignment_id?: number
    class_id?: number
    description?: string
    due_date?: string
    max_points?: number
    title?: string
  }

  type AssignmentsDeleteRequest = {
    assignment_id?: number
  }

  type AssignmentsQueryRequest = {
    assignment_id?: number
    class_id?: number
    current?: number
    due_date?: string
    pageSize?: number
    sortField?: string
    sortOrder?: string
    title?: string
  }

  type AssignmentSubmissions = {
    assignment_id?: number
    content?: string
    feedback?: string
    file_path?: string
    grade?: number
    is_delete?: number
    student_id?: number
    submission_date?: string
    submission_id?: number
  }

  type AssignmentSubmissionsAddRequest = {
    assignment_id?: number
    content?: string
    feedback?: string
    file_path?: string
    grade?: number
    student_id?: number
    submission_date?: string
  }

  type AssignmentSubmissionsDeleteRequest = {
    submission_id?: number
  }

  type AssignmentSubmissionsQueryRequest = {
    assignment_id?: number
    current?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    student_id?: number
    submission_id?: number
  }

  type AssignmentSubmissionsUpdateRequest = {
    assignment_id?: number
    content?: string
    feedback?: string
    file_path?: string
    grade?: number
    student_id?: number
    submission_date?: string
    submission_id?: number
  }

  type AssignmentSubmissionsVO = {
    assignment_id?: number
    content?: string
    feedback?: string
    file_path?: string
    grade?: number
    student_id?: number
    submission_date?: string
    submission_id?: number
  }

  type AssignmentsUpdateRequest = {
    assignment_id?: number
    class_id?: number
    description?: string
    due_date?: string
    max_points?: number
    title?: string
  }

  type AssignmentsVO = {
    assignment_id?: number
    class_id?: number
    description?: string
    due_date?: string
    max_points?: number
    title?: string
  }

  type Attendance = {
    attendance_id?: number
    class_id?: number
    is_delete?: number
    remarks?: string
    session_date?: string
    status?: Record<string, any>
    student_id?: number
  }

  type AttendanceAddRequest = {
    class_id?: number
    remarks?: string
    session_date?: string
    status?: Record<string, any>
    student_id?: number
  }

  type AttendanceDeleteRequest = {
    attendance_id?: number
  }

  type AttendanceQueryRequest = {
    attendance_id?: number
    class_id?: number
    current?: number
    pageSize?: number
    session_date?: string
    sortField?: string
    sortOrder?: string
    status?: Record<string, any>
    student_id?: number
  }

  type AttendanceUpdateRequest = {
    attendance_id?: number
    class_id?: number
    remarks?: string
    session_date?: string
    status?: Record<string, any>
    student_id?: number
  }

  type AttendanceVO = {
    attendance_id?: number
    class_id?: number
    remarks?: string
    session_date?: string
    status?: Record<string, any>
    student_id?: number
  }

  type BaseResponseAnnouncements = {
    code?: number
    data?: Announcements
    message?: string
  }

  type BaseResponseAnnouncementsVO = {
    code?: number
    data?: AnnouncementsVO
    message?: string
  }

  type BaseResponseAssignments = {
    code?: number
    data?: Assignments
    message?: string
  }

  type BaseResponseAssignmentSubmissions = {
    code?: number
    data?: AssignmentSubmissions
    message?: string
  }

  type BaseResponseAssignmentSubmissionsVO = {
    code?: number
    data?: AssignmentSubmissionsVO
    message?: string
  }

  type BaseResponseAssignmentsVO = {
    code?: number
    data?: AssignmentsVO
    message?: string
  }

  type BaseResponseAttendance = {
    code?: number
    data?: Attendance
    message?: string
  }

  type BaseResponseAttendanceVO = {
    code?: number
    data?: AttendanceVO
    message?: string
  }

  type BaseResponseboolean = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseClasses = {
    code?: number
    data?: Classes
    message?: string
  }

  type BaseResponseClassesVO = {
    code?: number
    data?: ClassesVO
    message?: string
  }

  type BaseResponseCourseMaterials = {
    code?: number
    data?: CourseMaterials
    message?: string
  }

  type BaseResponseCourseMaterialsVO = {
    code?: number
    data?: CourseMaterialsVO
    message?: string
  }

  type BaseResponseCourseModules = {
    code?: number
    data?: CourseModules
    message?: string
  }

  type BaseResponseCourseModulesVO = {
    code?: number
    data?: CourseModulesVO
    message?: string
  }

  type BaseResponseCourses = {
    code?: number
    data?: Courses
    message?: string
  }

  type BaseResponseCoursesVO = {
    code?: number
    data?: CoursesVO
    message?: string
  }

  type BaseResponseEnrollments = {
    code?: number
    data?: Enrollments
    message?: string
  }

  type BaseResponseEnrollmentsVO = {
    code?: number
    data?: EnrollmentsVO
    message?: string
  }

  type BaseResponseForumPosts = {
    code?: number
    data?: ForumPosts
    message?: string
  }

  type BaseResponseForumPostsVO = {
    code?: number
    data?: ForumPostsVO
    message?: string
  }

  type BaseResponseint = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponseKnowledgePoints = {
    code?: number
    data?: KnowledgePoints
    message?: string
  }

  type BaseResponseKnowledgePointsVO = {
    code?: number
    data?: KnowledgePointsVO
    message?: string
  }

  type BaseResponseListDepartments = {
    code?: number
    data?: Departments[]
    message?: string
  }

  type BaseResponseListKnowledgePoints = {
    code?: number
    data?: KnowledgePoints[]
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

  type BaseResponselong = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponsePageAnnouncements = {
    code?: number
    data?: PageAnnouncements
    message?: string
  }

  type BaseResponsePageAnnouncementsVO = {
    code?: number
    data?: PageAnnouncementsVO
    message?: string
  }

  type BaseResponsePageAssignments = {
    code?: number
    data?: PageAssignments
    message?: string
  }

  type BaseResponsePageAssignmentSubmissions = {
    code?: number
    data?: PageAssignmentSubmissions
    message?: string
  }

  type BaseResponsePageAssignmentSubmissionsVO = {
    code?: number
    data?: PageAssignmentSubmissionsVO
    message?: string
  }

  type BaseResponsePageAssignmentsVO = {
    code?: number
    data?: PageAssignmentsVO
    message?: string
  }

  type BaseResponsePageAttendance = {
    code?: number
    data?: PageAttendance
    message?: string
  }

  type BaseResponsePageAttendanceVO = {
    code?: number
    data?: PageAttendanceVO
    message?: string
  }

  type BaseResponsePageClasses = {
    code?: number
    data?: PageClasses
    message?: string
  }

  type BaseResponsePageClassesVO = {
    code?: number
    data?: PageClassesVO
    message?: string
  }

  type BaseResponsePageCourseMaterials = {
    code?: number
    data?: PageCourseMaterials
    message?: string
  }

  type BaseResponsePageCourseMaterialsVO = {
    code?: number
    data?: PageCourseMaterialsVO
    message?: string
  }

  type BaseResponsePageCourseModules = {
    code?: number
    data?: PageCourseModules
    message?: string
  }

  type BaseResponsePageCourseModulesVO = {
    code?: number
    data?: PageCourseModulesVO
    message?: string
  }

  type BaseResponsePageCourses = {
    code?: number
    data?: PageCourses
    message?: string
  }

  type BaseResponsePageCoursesVO = {
    code?: number
    data?: PageCoursesVO
    message?: string
  }

  type BaseResponsePageEnrollments = {
    code?: number
    data?: PageEnrollments
    message?: string
  }

  type BaseResponsePageEnrollmentsVO = {
    code?: number
    data?: PageEnrollmentsVO
    message?: string
  }

  type BaseResponsePageForumPosts = {
    code?: number
    data?: PageForumPosts
    message?: string
  }

  type BaseResponsePageForumPostsVO = {
    code?: number
    data?: PageForumPostsVO
    message?: string
  }

  type BaseResponsePageKnowledgePoints = {
    code?: number
    data?: PageKnowledgePoints
    message?: string
  }

  type BaseResponsePageKnowledgePointsVO = {
    code?: number
    data?: PageKnowledgePointsVO
    message?: string
  }

  type BaseResponsePageQuizQuestions = {
    code?: number
    data?: PageQuizQuestions
    message?: string
  }

  type BaseResponsePageQuizQuestionsVO = {
    code?: number
    data?: PageQuizQuestionsVO
    message?: string
  }

  type BaseResponsePageQuizzes = {
    code?: number
    data?: PageQuizzes
    message?: string
  }

  type BaseResponsePageQuizzesVO = {
    code?: number
    data?: PageQuizzesVO
    message?: string
  }

  type BaseResponsePageStudentActivityLogs = {
    code?: number
    data?: PageStudentActivityLogs
    message?: string
  }

  type BaseResponsePageStudentActivityLogsVO = {
    code?: number
    data?: PageStudentActivityLogsVO
    message?: string
  }

  type BaseResponseQuizQuestions = {
    code?: number
    data?: QuizQuestions
    message?: string
  }

  type BaseResponseQuizQuestionsVO = {
    code?: number
    data?: QuizQuestionsVO
    message?: string
  }

  type BaseResponseQuizzes = {
    code?: number
    data?: Quizzes
    message?: string
  }

  type BaseResponseQuizzesVO = {
    code?: number
    data?: QuizzesVO
    message?: string
  }

  type BaseResponseStudentActivityLogs = {
    code?: number
    data?: StudentActivityLogs
    message?: string
  }

  type BaseResponseStudentActivityLogsVO = {
    code?: number
    data?: StudentActivityLogsVO
    message?: string
  }

  type Classes = {
    class_id?: number
    course_id?: number
    instructor_id?: number
    is_delete?: number
    location?: string
    schedule?: string
    semester?: string
    year?: string
  }

  type ClassesAddRequest = {
    course_id?: number
    instructor_id?: number
    location?: string
    schedule?: string
    semester?: string
    year?: string
  }

  type ClassesDeleteRequest = {
    class_id?: number
  }

  type ClassesQueryRequest = {
    class_id?: number
    course_id?: number
    current?: number
    instructor_id?: number
    pageSize?: number
    semester?: string
    sortField?: string
    sortOrder?: string
    year?: string
  }

  type ClassesUpdateRequest = {
    class_id?: number
    course_id?: number
    instructor_id?: number
    location?: string
    schedule?: string
    semester?: string
    year?: string
  }

  type ClassesVO = {
    class_id?: number
    course_id?: number
    instructor_id?: number
    location?: string
    schedule?: string
    semester?: string
    year?: string
  }

  type CourseMaterials = {
    file_path_or_url?: string
    is_delete?: number
    material_id?: number
    material_type?: string
    module_id?: number
    sort_order?: number
    title?: string
  }

  type CourseMaterialsAddRequest = {
    file_path_or_url?: string
    material_type?: string
    module_id?: number
    title?: string
  }

  type CourseMaterialsDeleteRequest = {
    material_id?: number
  }

  type CourseMaterialsQueryRequest = {
    current?: number
    material_id?: number
    material_type?: string
    module_id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    title?: string
  }

  type CourseMaterialsUpdateRequest = {
    file_path_or_url?: string
    material_id?: number
    material_type?: string
    module_id?: number
    title?: string
  }

  type CourseMaterialsVO = {
    file_path_or_url?: string
    material_id?: number
    material_type?: string
    module_id?: number
    sort_order?: number
    title?: string
  }

  type CourseModules = {
    class_id?: number
    description?: string
    is_delete?: number
    module_id?: number
    sort_order?: number
    title?: string
  }

  type CourseModulesAddRequest = {
    class_id?: number
    description?: string
    sort_order?: number
    title?: string
  }

  type CourseModulesDeleteRequest = {
    module_id?: number
  }

  type CourseModulesQueryRequest = {
    class_id?: number
    current?: number
    module_id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    title?: string
  }

  type CourseModulesUpdateRequest = {
    class_id?: number
    description?: string
    module_id?: number
    sort_order?: number
    title?: string
  }

  type CourseModulesVO = {
    class_id?: number
    description?: string
    module_id?: number
    sort_order?: number
    title?: string
  }

  type Courses = {
    course_code?: string
    course_id?: number
    course_title?: string
    credits?: number
    department_id?: number
    description?: string
    is_delete?: number
  }

  type CoursesAddRequest = {
    course_code?: string
    course_title?: string
    credits?: number
    department_id?: number
    description?: string
  }

  type CoursesDeleteRequest = {
    course_id?: number
  }

  type CoursesQueryRequest = {
    course_code?: string
    course_id?: number
    course_title?: string
    credits?: number
    current?: number
    department_id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
  }

  type CoursesUpdateRequest = {
    course_code?: string
    course_id?: number
    course_title?: string
    credits?: number
    department_id?: number
    description?: string
  }

  type CoursesVO = {
    course_code?: string
    course_id?: number
    course_title?: string
    credits?: number
    department_id?: number
    description?: string
  }

  type Departments = {
    department_code?: string
    department_id?: number
    department_name?: string
    is_delete?: number
  }

  type DepartmentsAddRequest = {
    department_code?: string
    department_name?: string
  }

  type DepartmentsDeleteRequest = {
    department_id?: number
  }

  type Enrollments = {
    class_id?: number
    enrollment_date?: string
    enrollment_id?: number
    final_grade?: number
    is_delete?: number
    letter_grade?: string
    student_id?: number
  }

  type EnrollmentsAddRequest = {
    class_id?: number
    enrollment_date?: string
    final_grade?: number
    letter_grade?: string
    student_id?: number
  }

  type EnrollmentsDeleteRequest = {
    enrollment_id?: number
  }

  type EnrollmentsQueryRequest = {
    class_id?: number
    current?: number
    enrollment_id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    student_id?: number
  }

  type EnrollmentsUpdateRequest = {
    class_id?: number
    enrollment_date?: string
    enrollment_id?: number
    final_grade?: number
    letter_grade?: string
    student_id?: number
  }

  type EnrollmentsVO = {
    class_id?: number
    enrollment_date?: string
    enrollment_id?: number
    final_grade?: number
    letter_grade?: string
    student_id?: number
  }

  type ForumPosts = {
    class_id?: number
    content?: string
    create_time?: string
    is_delete?: number
    parent_post_id?: number
    post_id?: number
    title?: string
    user_id?: number
    user_type?: Record<string, any>
  }

  type ForumPostsAddRequest = {
    class_id?: number
    content?: string
    create_time?: string
    parent_post_id?: number
    title?: string
    user_id?: number
    user_type?: Record<string, any>
  }

  type ForumPostsDeleteRequest = {
    post_id?: number
  }

  type ForumPostsQueryRequest = {
    class_id?: number
    create_time?: string
    current?: number
    pageSize?: number
    parent_post_id?: number
    post_id?: number
    sortField?: string
    sortOrder?: string
    title?: string
    user_id?: number
    user_type?: Record<string, any>
  }

  type ForumPostsUpdateRequest = {
    class_id?: number
    content?: string
    create_time?: string
    parent_post_id?: number
    post_id?: number
    title?: string
    user_id?: number
    user_type?: Record<string, any>
  }

  type ForumPostsVO = true

  type getAnnouncementsByIdUsingGETParams = {
    /** announcement_id */
    announcement_id?: number
  }

  type getAnnouncementsVOByIdUsingGETParams = {
    /** announcement_id */
    announcement_id?: number
  }

  type getAssignmentsByIdUsingGETParams = {
    /** assignment_id */
    assignment_id?: number
  }

  type getAssignmentSubmissionsByIdUsingGETParams = {
    /** submission_id */
    submission_id?: number
  }

  type getAssignmentSubmissionsVOByIdUsingGETParams = {
    /** submission_id */
    submission_id?: number
  }

  type getAssignmentsVOByIdUsingGETParams = {
    /** assignment_id */
    assignment_id?: number
  }

  type getAttendanceByIdUsingGETParams = {
    /** attendance_id */
    attendance_id?: number
  }

  type getAttendanceVOByIdUsingGETParams = {
    /** attendance_id */
    attendance_id?: number
  }

  type getClassesByIdUsingGETParams = {
    /** class_id */
    class_id?: number
  }

  type getClassesVOByIdUsingGETParams = {
    /** class_id */
    class_id?: number
  }

  type getCourseMaterialsByIdUsingGETParams = {
    /** material_id */
    material_id?: number
  }

  type getCourseMaterialsVOByIdUsingGETParams = {
    /** material_id */
    material_id?: number
  }

  type getCourseModulesByIdUsingGETParams = {
    /** module_id */
    module_id?: number
  }

  type getCourseModulesVOByIdUsingGETParams = {
    /** module_id */
    module_id?: number
  }

  type getCoursesByIdUsingGETParams = {
    /** course_id */
    course_id?: number
  }

  type getCoursesVOByIdUsingGETParams = {
    /** course_id */
    course_id?: number
  }

  type getEnrollmentsByIdUsingGETParams = {
    /** enrollment_id */
    enrollment_id?: number
  }

  type getEnrollmentsVOByIdUsingGETParams = {
    /** enrollment_id */
    enrollment_id?: number
  }

  type getForumPostsByIdUsingGETParams = {
    /** post_id */
    post_id?: number
  }

  type getForumPostsVOByIdUsingGETParams = {
    /** post_id */
    post_id?: number
  }

  type getKnowledgePointsByCourseTitleUsingPOSTParams = {
    /** course_title */
    course_title?: string
  }

  type getKnowledgePointsByIdUsingGETParams = {
    /** point_id */
    point_id?: number
  }

  type getKnowledgePointsVOByIdUsingGETParams = {
    /** point_id */
    point_id?: number
  }

  type getQuizQuestionsByIdUsingGETParams = {
    /** question_id */
    question_id?: number
  }

  type getQuizQuestionsVOByIdUsingGETParams = {
    /** question_id */
    question_id?: number
  }

  type getQuizzesByIdUsingGETParams = {
    /** quiz_id */
    quiz_id?: number
  }

  type getQuizzesVOByIdUsingGETParams = {
    /** quiz_id */
    quiz_id?: number
  }

  type getStudentActivityLogsByIdUsingGETParams = {
    /** log_id */
    log_id?: number
  }

  type getStudentActivityLogsVOByIdUsingGETParams = {
    /** log_id */
    log_id?: number
  }

  type KnowledgePoints = {
    course_id?: number
    description?: string
    is_delete?: number
    parent_point_id?: number
    point_id?: number
    title?: string
  }

  type KnowledgePointsAddRequest = {
    course_id?: number
    description?: string
    parent_point_id?: number
    title?: string
  }

  type KnowledgePointsDeleteRequest = {
    point_id?: number
  }

  type KnowledgePointsQueryRequest = {
    course_id?: number
    current?: number
    pageSize?: number
    parent_point_id?: number
    point_id?: number
    sortField?: string
    sortOrder?: string
    title?: string
  }

  type KnowledgePointsUpdateRequest = {
    course_id?: number
    description?: string
    parent_point_id?: number
    point_id?: number
    title?: string
  }

  type KnowledgePointsVO = {
    course_id?: number
    description?: string
    parent_point_id?: number
    point_id?: number
    title?: string
  }

  type LoginStaffVO = {
    department_id?: number
    email?: string
    first_name?: string
    last_name?: string
    staff_id?: number
    staff_number?: string
    title?: string
    token?: string
  }

  type LoginStudentsVO = {
    department_id?: number
    email?: string
    enrollment_date?: string
    first_name?: string
    last_name?: string
    student_id?: number
    student_number?: string
    token?: string
  }

  type ModelAndView = {
    empty?: boolean
    model?: Record<string, any>
    modelMap?: Record<string, any>
    reference?: boolean
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES'
    view?: View
    viewName?: string
  }

  type OrderItem = {
    asc?: boolean
    column?: string
  }

  type PageAnnouncements = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Announcements[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageAnnouncementsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AnnouncementsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageAssignments = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Assignments[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageAssignmentSubmissions = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AssignmentSubmissions[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageAssignmentSubmissionsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AssignmentSubmissionsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageAssignmentsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AssignmentsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageAttendance = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Attendance[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageAttendanceVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AttendanceVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageClasses = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Classes[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageClassesVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ClassesVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageCourseMaterials = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseMaterials[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageCourseMaterialsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseMaterialsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageCourseModules = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseModules[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageCourseModulesVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseModulesVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageCourses = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Courses[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageCoursesVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CoursesVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageEnrollments = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Enrollments[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageEnrollmentsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: EnrollmentsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageForumPosts = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ForumPosts[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageForumPostsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ForumPostsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageKnowledgePoints = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: KnowledgePoints[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageKnowledgePointsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: KnowledgePointsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageQuizQuestions = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: QuizQuestions[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageQuizQuestionsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: QuizQuestionsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageQuizzes = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Quizzes[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageQuizzesVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: QuizzesVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageStudentActivityLogs = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: StudentActivityLogs[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageStudentActivityLogsVO = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: StudentActivityLogsVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type QuizQuestions = {
    is_delete?: number
    options?: Record<string, any>
    points?: number
    question_id?: number
    question_text?: string
    question_type?: string
    quiz_id?: number
  }

  type QuizQuestionsAddRequest = {
    options?: Record<string, any>
    points?: number
    question_text?: string
    question_type?: string
    quiz_id?: number
  }

  type QuizQuestionsDeleteRequest = {
    question_id?: number
  }

  type QuizQuestionsQueryRequest = {
    current?: number
    pageSize?: number
    question_id?: number
    question_type?: string
    quiz_id?: number
    sortField?: string
    sortOrder?: string
  }

  type QuizQuestionsUpdateRequest = {
    options?: Record<string, any>
    points?: number
    question_id?: number
    question_text?: string
    question_type?: string
    quiz_id?: number
  }

  type QuizQuestionsVO = {
    options?: Record<string, any>
    points?: number
    question_id?: number
    question_text?: string
    question_type?: string
    quiz_id?: number
  }

  type Quizzes = {
    class_id?: number
    due_date?: string
    is_delete?: number
    is_published?: number
    quiz_id?: number
    time_limit_minutes?: number
    title?: string
  }

  type QuizzesAddRequest = {
    class_id?: number
    due_date?: string
    is_published?: number
    time_limit_minutes?: number
    title?: string
  }

  type QuizzesDeleteRequest = {
    quiz_id?: number
  }

  type QuizzesQueryRequest = {
    class_id?: number
    current?: number
    pageSize?: number
    quiz_id?: number
    sortField?: string
    sortOrder?: string
    title?: string
  }

  type QuizzesUpdateRequest = {
    class_id?: number
    due_date?: string
    is_published?: number
    quiz_id?: number
    time_limit_minutes?: number
    title?: string
  }

  type QuizzesVO = {
    class_id?: number
    due_date?: string
    is_published?: number
    quiz_id?: number
    time_limit_minutes?: number
    title?: string
  }

  type StaffLoginRequest = {
    password_hash?: string
    staff_number?: string
  }

  type StaffRegisterRequest = {
    check_password?: string
    email?: string
    first_name?: string
    last_name?: string
    password_hash?: string
    staff_number?: string
    title?: string
  }

  type StudentActivityLogs = {
    activity_timestamp?: string
    activity_type?: string
    class_id?: number
    details?: Record<string, any>
    is_delete?: number
    log_id?: number
    student_id?: number
  }

  type StudentActivityLogsAddRequest = {
    activity_timestamp?: string
    activity_type?: string
    class_id?: number
    details?: Record<string, any>
    log_id?: number
    student_id?: number
  }

  type StudentActivityLogsDeleteRequest = {
    log_id?: number
  }

  type StudentActivityLogsQueryRequest = {
    activity_type?: string
    class_id?: number
    current?: number
    log_id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    student_id?: number
  }

  type StudentActivityLogsUpdateRequest = {
    activity_timestamp?: string
    activity_type?: string
    class_id?: number
    details?: Record<string, any>
    log_id?: number
    student_id?: number
  }

  type StudentActivityLogsVO = {
    activity_timestamp?: string
    activity_type?: string
    class_id?: number
    details?: Record<string, any>
    log_id?: number
    student_id?: number
  }

  type StudentsLoginRequest = {
    password_hash?: string
    student_number?: string
  }

  type StudentsRegisterRequest = {
    check_password?: string
    email?: string
    first_name?: string
    last_name?: string
    password_hash?: string
    student_number?: string
  }

  type View = {
    contentType?: string
  }
}
