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
    page_size?: number
    sort_field?: string
    sort_order?: string
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
    page_size?: number
    sort_field?: string
    sort_order?: string
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
    page_size?: number
    sort_field?: string
    sort_order?: string
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
    page_size?: number
    session_date?: string
    sort_field?: string
    sort_order?: string
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

  type BaseResponseAnnouncements_ = {
    code?: number
    data?: Announcements
    message?: string
  }

  type BaseResponseAnnouncementsVO_ = {
    code?: number
    data?: AnnouncementsVO
    message?: string
  }

  type BaseResponseAssignments_ = {
    code?: number
    data?: Assignments
    message?: string
  }

  type BaseResponseAssignmentSubmissions_ = {
    code?: number
    data?: AssignmentSubmissions
    message?: string
  }

  type BaseResponseAssignmentSubmissionsVO_ = {
    code?: number
    data?: AssignmentSubmissionsVO
    message?: string
  }

  type BaseResponseAssignmentsVO_ = {
    code?: number
    data?: AssignmentsVO
    message?: string
  }

  type BaseResponseAttendance_ = {
    code?: number
    data?: Attendance
    message?: string
  }

  type BaseResponseAttendanceVO_ = {
    code?: number
    data?: AttendanceVO
    message?: string
  }

  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseChapterProgress_ = {
    code?: number
    data?: ChapterProgress
    message?: string
  }

  type BaseResponseChapterProgressVO_ = {
    code?: number
    data?: ChapterProgressVO
    message?: string
  }

  type BaseResponseClasses_ = {
    code?: number
    data?: Classes
    message?: string
  }

  type BaseResponseClassesVO_ = {
    code?: number
    data?: ClassesVO
    message?: string
  }

  type BaseResponseCourseChapters_ = {
    code?: number
    data?: CourseChapters
    message?: string
  }

  type BaseResponseCourseChaptersVO_ = {
    code?: number
    data?: CourseChaptersVO
    message?: string
  }

  type BaseResponseCourseMaterials_ = {
    code?: number
    data?: CourseMaterials
    message?: string
  }

  type BaseResponseCourseMaterialsVO_ = {
    code?: number
    data?: CourseMaterialsVO
    message?: string
  }

  type BaseResponseCourseModules_ = {
    code?: number
    data?: CourseModules
    message?: string
  }

  type BaseResponseCourseModulesVO_ = {
    code?: number
    data?: CourseModulesVO
    message?: string
  }

  type BaseResponseCourses_ = {
    code?: number
    data?: Courses
    message?: string
  }

  type BaseResponseCoursesVO_ = {
    code?: number
    data?: CoursesVO
    message?: string
  }

  type BaseResponseDepartments_ = {
    code?: number
    data?: Departments
    message?: string
  }

  type BaseResponseEnrollments_ = {
    code?: number
    data?: Enrollments
    message?: string
  }

  type BaseResponseEnrollmentsVO_ = {
    code?: number
    data?: EnrollmentsVO
    message?: string
  }

  type BaseResponseForumPosts_ = {
    code?: number
    data?: ForumPosts
    message?: string
  }

  type BaseResponseForumPostsVO_ = {
    code?: number
    data?: ForumPostsVO
    message?: string
  }

  type BaseResponseInt_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponseKnowledgePoints_ = {
    code?: number
    data?: KnowledgePoints
    message?: string
  }

  type BaseResponseKnowledgePointsVO_ = {
    code?: number
    data?: KnowledgePointsVO
    message?: string
  }

  type BaseResponseListChapterProgressVO_ = {
    code?: number
    data?: ChapterProgressVO[]
    message?: string
  }

  type BaseResponseListCourseChaptersVO_ = {
    code?: number
    data?: CourseChaptersVO[]
    message?: string
  }

  type BaseResponseListCourses_ = {
    code?: number
    data?: Courses[]
    message?: string
  }

  type BaseResponseListCoursesVO_ = {
    code?: number
    data?: CoursesVO[]
    message?: string
  }

  type BaseResponseListDepartments_ = {
    code?: number
    data?: Departments[]
    message?: string
  }

  type BaseResponseListKnowledgePoints_ = {
    code?: number
    data?: KnowledgePoints[]
    message?: string
  }

  type BaseResponseListRoles_ = {
    code?: number
    data?: Roles[]
    message?: string
  }

  type BaseResponseListStudentCoursesVO_ = {
    code?: number
    data?: StudentCoursesVO[]
    message?: string
  }

  type BaseResponseLoginStaffVO_ = {
    code?: number
    data?: LoginStaffVO
    message?: string
  }

  type BaseResponseLoginStudentsVO_ = {
    code?: number
    data?: LoginStudentsVO
    message?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponseMapStringString_ = {
    code?: number
    data?: Record<string, any>
    message?: string
  }

  type BaseResponsePageAnnouncements_ = {
    code?: number
    data?: PageAnnouncements_
    message?: string
  }

  type BaseResponsePageAnnouncementsVO_ = {
    code?: number
    data?: PageAnnouncementsVO_
    message?: string
  }

  type BaseResponsePageAssignments_ = {
    code?: number
    data?: PageAssignments_
    message?: string
  }

  type BaseResponsePageAssignmentSubmissions_ = {
    code?: number
    data?: PageAssignmentSubmissions_
    message?: string
  }

  type BaseResponsePageAssignmentSubmissionsVO_ = {
    code?: number
    data?: PageAssignmentSubmissionsVO_
    message?: string
  }

  type BaseResponsePageAssignmentsVO_ = {
    code?: number
    data?: PageAssignmentsVO_
    message?: string
  }

  type BaseResponsePageAttendance_ = {
    code?: number
    data?: PageAttendance_
    message?: string
  }

  type BaseResponsePageAttendanceVO_ = {
    code?: number
    data?: PageAttendanceVO_
    message?: string
  }

  type BaseResponsePageChapterProgress_ = {
    code?: number
    data?: PageChapterProgress_
    message?: string
  }

  type BaseResponsePageChapterProgressVO_ = {
    code?: number
    data?: PageChapterProgressVO_
    message?: string
  }

  type BaseResponsePageClasses_ = {
    code?: number
    data?: PageClasses_
    message?: string
  }

  type BaseResponsePageClassesVO_ = {
    code?: number
    data?: PageClassesVO_
    message?: string
  }

  type BaseResponsePageCourseChapters_ = {
    code?: number
    data?: PageCourseChapters_
    message?: string
  }

  type BaseResponsePageCourseChaptersVO_ = {
    code?: number
    data?: PageCourseChaptersVO_
    message?: string
  }

  type BaseResponsePageCourseMaterials_ = {
    code?: number
    data?: PageCourseMaterials_
    message?: string
  }

  type BaseResponsePageCourseMaterialsVO_ = {
    code?: number
    data?: PageCourseMaterialsVO_
    message?: string
  }

  type BaseResponsePageCourseModules_ = {
    code?: number
    data?: PageCourseModules_
    message?: string
  }

  type BaseResponsePageCourseModulesVO_ = {
    code?: number
    data?: PageCourseModulesVO_
    message?: string
  }

  type BaseResponsePageCourses_ = {
    code?: number
    data?: PageCourses_
    message?: string
  }

  type BaseResponsePageCoursesVO_ = {
    code?: number
    data?: PageCoursesVO_
    message?: string
  }

  type BaseResponsePageEnrollments_ = {
    code?: number
    data?: PageEnrollments_
    message?: string
  }

  type BaseResponsePageEnrollmentsVO_ = {
    code?: number
    data?: PageEnrollmentsVO_
    message?: string
  }

  type BaseResponsePageForumPosts_ = {
    code?: number
    data?: PageForumPosts_
    message?: string
  }

  type BaseResponsePageForumPostsVO_ = {
    code?: number
    data?: PageForumPostsVO_
    message?: string
  }

  type BaseResponsePageKnowledgePoints_ = {
    code?: number
    data?: PageKnowledgePoints_
    message?: string
  }

  type BaseResponsePageKnowledgePointsVO_ = {
    code?: number
    data?: PageKnowledgePointsVO_
    message?: string
  }

  type BaseResponsePageQuizQuestions_ = {
    code?: number
    data?: PageQuizQuestions_
    message?: string
  }

  type BaseResponsePageQuizQuestionsVO_ = {
    code?: number
    data?: PageQuizQuestionsVO_
    message?: string
  }

  type BaseResponsePageQuizzes_ = {
    code?: number
    data?: PageQuizzes_
    message?: string
  }

  type BaseResponsePageQuizzesVO_ = {
    code?: number
    data?: PageQuizzesVO_
    message?: string
  }

  type BaseResponsePageRoles_ = {
    code?: number
    data?: PageRoles_
    message?: string
  }

  type BaseResponsePageStudentActivityLogs_ = {
    code?: number
    data?: PageStudentActivityLogs_
    message?: string
  }

  type BaseResponsePageStudentActivityLogsVO_ = {
    code?: number
    data?: PageStudentActivityLogsVO_
    message?: string
  }

  type BaseResponseQuizQuestions_ = {
    code?: number
    data?: QuizQuestions
    message?: string
  }

  type BaseResponseQuizQuestionsVO_ = {
    code?: number
    data?: QuizQuestionsVO
    message?: string
  }

  type BaseResponseQuizzes_ = {
    code?: number
    data?: Quizzes
    message?: string
  }

  type BaseResponseQuizzesVO_ = {
    code?: number
    data?: QuizzesVO
    message?: string
  }

  type BaseResponseRoles_ = {
    code?: number
    data?: Roles
    message?: string
  }

  type BaseResponseStudentActivityLogs_ = {
    code?: number
    data?: StudentActivityLogs
    message?: string
  }

  type BaseResponseStudentActivityLogsVO_ = {
    code?: number
    data?: StudentActivityLogsVO
    message?: string
  }

  type bindMaterialToChapterUsingPOSTParams = {
    /** chapter_id */
    chapter_id: number
    /** material_id */
    material_id?: number
  }

  type ChapterProgress = {
    chapter_id?: number
    last_update?: string
    progress_id?: number
    status_code?: number
    student_id?: number
  }

  type ChapterProgressAddRequest = {
    chapter_id?: number
    status_code?: number
    student_id?: number
  }

  type ChapterProgressBatchUpdateRequest = {
    chapter_ids?: number[]
    status_code?: number
    student_id?: number
  }

  type ChapterProgressDeleteRequest = {
    chapter_id?: number
    progress_id?: number
    student_id?: number
  }

  type ChapterProgressQueryRequest = {
    chapter_id?: number
    current?: number
    page_size?: number
    progress_id?: number
    sort_field?: string
    sort_order?: string
    status_code?: number
    student_id?: number
  }

  type ChapterProgressUpdateRequest = {
    chapter_id?: number
    progress_id?: number
    status_code?: number
    student_id?: number
  }

  type ChapterProgressVO = {
    chapter_id?: number
    full_path?: string
    last_update?: string
    progress_id?: number
    status_code?: number
    student_id?: number
    title?: string
  }

  type ChapterTreeAddRequest = {
    children?: ChapterTreeAddRequest[]
    course_materials_add_request?: CourseMaterialsAddRequest
    material_id?: number
    sort_order?: number
    title?: string
  }

  type Classes = {
    class_id?: number
    course_id?: number
    instructor_id?: number
    invite_code?: string
    is_delete?: number
    location?: string
    schedule?: string
    semester?: string
    year?: string
  }

  type ClassesAddRequest = {
    course_id?: number
    instructor_id?: number
    invite_code?: string
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
    page_size?: number
    semester?: string
    sort_field?: string
    sort_order?: string
    year?: string
  }

  type ClassesUpdateRequest = {
    class_id?: number
    course_id?: number
    instructor_id?: number
    invite_code?: string
    location?: string
    schedule?: string
    semester?: string
    year?: string
  }

  type ClassesVO = {
    class_id?: number
    course_id?: number
    instructor_id?: number
    invite_code?: string
    location?: string
    schedule?: string
    semester?: string
    year?: string
  }

  type CourseChapters = {
    chapter_id?: number
    course_id?: number
    level_path?: string
    material_id?: number
    parent_id?: number
    sort_order?: number
    title?: string
  }

  type CourseChaptersAddRequest = {
    course_id?: number
    level_path?: string
    material_id?: number
    parent_id?: number
    sort_order?: number
    title?: string
  }

  type CourseChaptersDeleteRequest = {
    chapter_id?: number
  }

  type CourseChaptersQueryRequest = {
    chapter_id?: number
    course_id?: number
    current?: number
    level_path?: string
    page_size?: number
    parent_id?: number
    sort_field?: string
    sort_order?: string
    title?: string
  }

  type CourseChaptersUpdateRequest = {
    chapter_id?: number
    course_id?: number
    level_path?: string
    material_id?: number
    parent_id?: number
    sort_order?: number
    title?: string
  }

  type CourseChaptersVO = {
    chapter_id?: number
    children?: CourseChaptersVO[]
    course_id?: number
    level_path?: string
    material_detail?: CourseMaterialsVO
    material_id?: number
    parent_id?: number
    sort_order?: number
    status_code?: number
    title?: string
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
    page_size?: number
    sort_field?: string
    sort_order?: string
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
    page_size?: number
    sort_field?: string
    sort_order?: string
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
    priority?: number
    recommendation_index?: number
    visit_count?: number
  }

  type CoursesAddRequest = {
    chapters?: ChapterTreeAddRequest[]
    course_code?: string
    course_title?: string
    credits?: number
    department_name?: string
    description?: string
    priority?: number
    recommendation_index?: number
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
    page_size?: number
    recommendation_index?: number
    sort_field?: string
    sort_order?: string
  }

  type CoursesUpdateRequest = {
    course_code?: string
    course_id?: number
    course_title?: string
    credits?: number
    department_id?: number
    description?: string
    priority?: number
    recommendation_index?: number
  }

  type CoursesVO = {
    chapter_tree?: CourseChaptersVO[]
    course_code?: string
    course_id?: number
    course_title?: string
    credits?: number
    department_id?: number
    description?: string
    is_enrolled?: boolean
    progress_percent?: number
    recommendation_index?: number
    visit_count?: number
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

  type dropCourseUsingPOSTParams = {
    /** courseId */
    courseId: number
  }

  type enrollCourseUsingPOSTParams = {
    /** courseId */
    courseId: number
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
    page_size?: number
    sort_field?: string
    sort_order?: string
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
    page_size?: number
    parent_post_id?: number
    post_id?: number
    sort_field?: string
    sort_order?: string
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

  type getByStudentAndChapterUsingGETParams = {
    /** chapter_id */
    chapter_id: number
    /** student_id */
    student_id: number
  }

  type getChapterProgressByIdUsingGETParams = {
    /** progress_id */
    progress_id?: number
  }

  type getChapterProgressVOByIdUsingGETParams = {
    /** progress_id */
    progress_id?: number
  }

  type getChapterTreeUsingGETParams = {
    /** course_id */
    course_id: number
  }

  type getChapterTreeWithProgressUsingGETParams = {
    /** course_id */
    course_id: number
    /** student_id */
    student_id: number
  }

  type getChapterWithMaterialUsingGETParams = {
    /** chapter_id */
    chapter_id: number
  }

  type getClassesByIdUsingGETParams = {
    /** class_id */
    class_id?: number
  }

  type getClassesVOByIdUsingGETParams = {
    /** class_id */
    class_id?: number
  }

  type getCourseChaptersByIdUsingGETParams = {
    /** chapter_id */
    chapter_id?: number
  }

  type getCourseChaptersVOByIdUsingGETParams = {
    /** chapter_id */
    chapter_id?: number
  }

  type getCourseDetailWithChaptersUsingGETParams = {
    /** course_id */
    course_id: number
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

  type getCourseProgressUsingGETParams = {
    /** course_id */
    course_id: number
    /** student_id */
    student_id: number
  }

  type getCoursesByIdUsingGETParams = {
    /** course_id */
    course_id?: number
  }

  type getCoursesVOByIdUsingGETParams = {
    /** course_id */
    course_id?: number
  }

  type getDeptByNameUsingGETParams = {
    /** departmentName */
    departmentName: string
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

  type getRoleByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getRolesByStaffIdUsingGETParams = {
    /** staffId */
    staffId: number
  }

  type getStudentActivityLogsByIdUsingGETParams = {
    /** log_id */
    log_id?: number
  }

  type getStudentActivityLogsVOByIdUsingGETParams = {
    /** log_id */
    log_id?: number
  }

  type hybridRecommendUsingGETParams = {
    /** courseId */
    courseId?: number
    /** limit */
    limit?: number
    /** studentId */
    studentId?: number
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
    page_size?: number
    parent_point_id?: number
    point_id?: number
    sort_field?: string
    sort_order?: string
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
    token_name?: string
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
    token_name?: string
  }

  type MapStringString_ = true

  type OrderItem = {
    asc?: boolean
    column?: string
  }

  type PageAnnouncements_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Announcements[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageAnnouncementsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AnnouncementsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageAssignments_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Assignments[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageAssignmentSubmissions_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AssignmentSubmissions[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageAssignmentSubmissionsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AssignmentSubmissionsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageAssignmentsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AssignmentsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageAttendance_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Attendance[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageAttendanceVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: AttendanceVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageChapterProgress_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ChapterProgress[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageChapterProgressVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ChapterProgressVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageClasses_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Classes[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageClassesVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ClassesVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCourseChapters_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseChapters[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCourseChaptersVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseChaptersVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCourseMaterials_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseMaterials[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCourseMaterialsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseMaterialsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCourseModules_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseModules[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCourseModulesVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CourseModulesVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCourses_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Courses[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageCoursesVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: CoursesVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageEnrollments_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Enrollments[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageEnrollmentsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: EnrollmentsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageForumPosts_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ForumPosts[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageForumPostsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: ForumPostsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageKnowledgePoints_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: KnowledgePoints[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageKnowledgePointsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: KnowledgePointsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageQuizQuestions_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: QuizQuestions[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageQuizQuestionsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: QuizQuestionsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageQuizzes_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Quizzes[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageQuizzesVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: QuizzesVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageRoles_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: Roles[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageStudentActivityLogs_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: StudentActivityLogs[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type PageStudentActivityLogsVO_ = {
    count_id?: string
    current?: number
    max_limit?: number
    optimize_count_sql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: StudentActivityLogsVO[]
    search_count?: boolean
    size?: number
    total?: number
  }

  type QuizQuestions = {
    answer?: string
    is_delete?: number
    options?: Record<string, any>
    points?: number
    question_id?: number
    question_text?: string
    question_type?: string
    quiz_id?: number
  }

  type QuizQuestionsAddRequest = {
    answer?: string
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
    page_size?: number
    question_id?: number
    question_type?: string
    quiz_id?: number
    sort_field?: string
    sort_order?: string
  }

  type QuizQuestionsUpdateRequest = {
    answer?: string
    options?: Record<string, any>
    points?: number
    question_id?: number
    question_text?: string
    question_type?: string
    quiz_id?: number
  }

  type QuizQuestionsVO = {
    answer?: string
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
    page_size?: number
    quiz_id?: number
    sort_field?: string
    sort_order?: string
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

  type Roles = {
    description?: string
    role_id?: number
    role_name?: string
  }

  type RolesAddRequest = {
    description?: string
    role_name?: string
  }

  type RolesDeleteRequest = {
    role_id?: number
  }

  type RolesQueryRequest = {
    current?: number
    description?: string
    page_size?: number
    role_id?: number
    role_name?: string
    sort_field?: string
    sort_order?: string
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

  type StaffRoles = {
    id?: number
    role_id?: number
    staff_id?: number
  }

  type StaffRolesAddRequest = {
    role_id?: number
    staff_id?: number
  }

  type StaffRolesUpdateRequest = {
    id?: number
    role_ids?: number[]
    staff_id?: number
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
    page_size?: number
    sort_field?: string
    sort_order?: string
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

  type StudentCoursesVO = {
    course_id?: number
    enroll_time?: string
    id?: number
    last_study_time?: string
    progress_percent?: number
    student_id?: number
    study_status?: number
  }

  type StudentsLoginRequest = {
    captcha?: string
    captcha_key?: string
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

  type updateProgressUsingPOSTParams = {
    /** courseId */
    courseId: number
    /** progress */
    progress: number
  }

  type updateVisitUsingPOSTParams = {
    /** courseId */
    courseId: number
  }
}
