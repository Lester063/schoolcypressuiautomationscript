export const school = {
    qwerty123:"qwerty123",
    //student logged in
    inputUsername:".inputUsername",
    inputPassword:".inputPassword",
    loginButton:".login-submitButton",
    studentNavbar:{
        enrollment:"ENROLLMENT",
        viewRegistration:"MY REGISTRATION",
        viewGrades:"GRADES",
        profile:"PROFILE", viewProfile:"VIEW PROFILE", password:"PASSWORD",
    },
    teacherNavbar:{
        myAdvisory:"MY ADVISORY",
        sectionHandle:"Section Handle",
    },

    navbarLink:{
        viewStudent:"VIEW STUDENTS",
        viewTeacher:"VIEW TEACHERS", addTeacher:"Add Teacher",
        subjectCourse:"SUBJECT/COURSE",
            viewSubject:"VIEW SUBJECT",
            viewCourse:"VIEW COURSE",
        viewSection:"VIEW SECTIONS",
        viewEnrolled:"VIEW ENROLLED",
        addNews:"ADD NEWS"
    },
    //planning to make it global
    modalCloseButton:".closebutton-addstudent",
    activatedText:"ACTIVATED",
    deactivatedText:"DEACTIVATED",
    deleteText:"Delete",
    redBlackButton:".redblackButton",
    blueWhiteButton:".bluewhiteButton",
    //adminstudent
    addStudent:"Add Student",
    addButton:"#addbutton",//this is the create button
    searchField:"#searchStudent",
    editButton:".editbutton",
    submitEditButton:"#submitbutton-editstudent",
        //student details
        firstName:"#firstname",
        middleName:"#middlename",
        lastName:"#lastname",
        course:"#course",
        contactNumber:"#contact_number",
        year:"#year",
        //new data of student for updating
        newFirstName:"#put_firstname",
        newLastName:"#put_lastname",

    //adminsubjectcourse.cy.js   --new subject
    newSubject:"#newSubject",
    subjectCode:"#subjectCode",
    subjectDescription:"#description",
    //details of subject we will add
    newSubjectInput:"this is new",
    subjectCodeInput:"code", 
    subjectDescriptionInput:"description",
    //the button that will submit the data
    addSubjectButton:"#addSubject_button",

    //adminsubjectcourse.cy.js  --new course
    newCourse:"#newCourse",
    courseDescription:"#courseDescription",
    //details of course we will add
    newCourseInput:"new course to",
    courseDescriptionInput:"this is the description",

    //adminsection.cy.js
    addSectionModalTrigger:".addSection",
    addSelectSection:'input[onclick="addselectSection()"]',
    gradeYear:"#grade_year",
    section:"#section",

    selectSubject:".addsection_select",
    selectCourse:'#section_course',
    maxStudentSection:"#max_qty",
    startDate:"#start_date",
    endDate:"#end_date",
    addSectionButton:"#addsectionbutton",


    //adminteacher
    teacherFirstname:"#teacher_firstname",
    teacherMiddlename:"#teacher_middlename",
    teacherLastname:"#teacher_lastname",
    teacherContactnumber:"#teacher_contactnumber",
    teacherUserlevel:"#teacher_userlevel",
    teacherDepartment:"#teacher_department",
    teacherRank:"#teacher_rank",
    //searchTeacher
    searchTeacher:"#searchTeacher",
    //when editing teacher details -only the last name
    teacherLastNameEdit:"#put_teacher_lastname",
    teacherAddButton:"#addTeacher",
    teacherEditButton:".editteacher",
    editTeacherSubmit:"#submitbutton-editteacher",
    deleteTeacherButton:".deletebutton",
    // ---kulang yung teacher


    //adminsection
    editSectionButton:".editsectionbutton",
    editSectionQty:"#editsection_qty",
    goEditButton:".bluewhiteButton",

    selectAdviser:"[name='adviser_id']",
    selectTeacher:"[name='teacher[]']",
    assignTeacherButton:"#new_assignTeachers > .bluewhiteButton",

    viewStudentLink:'a[href*="viewenrolledList.php?section_id"]',
    viewSectionEnrolledPage:'ADMIN: ENROLL STUDENTS',

    assignTeachersPage:'a[href*="assignteacher_newversion.php?section_id"]',
    assertAssignTeacherPage:'Assign Teacher',

    deletedSectionText:'Deleted Section Successfully.',
    
    //adminenrolled
    addDropLink:'a[href*="viewstudent_enrolledsubject.php?student_number"]',
    //student enrolling
    clickSection:"#section_id",
    clickEnrollbutton:"#enrollbutton",
    textPending:"PENDING",
    textApproved:"APPROVED",
    approveStudent:".approved",

    //student page
    selectSection:"#section_id",
    enrollmentMessage:"#enrollment-message",

    //viewregistration
    registrationToggle:".syTitle",

    //teacher
    viewAdvisoryStudentList:'a[href="viewList.php?schoolyear_assign=2023-2024"]',
    // * == all with sectionhandlestudentblade.php?Section_id
    viewSectionHandleList:'a[href*="sectionhandlestudentblade.php?section_id"]',

    //student password
    oldPassword:"#oldPassword",
    newPassword:"#newPassword",
    verifynewPassword:"#verify_newPassword",
    changePassword:"#changePassword",

}
