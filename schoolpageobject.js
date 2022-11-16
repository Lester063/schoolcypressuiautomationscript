export const school = {
    studentpageUrl:"http://localhost/college/login/loginpage.php",
    qwerty123:"qwerty123",
    //student logged in
    studentUsername:".inputUsername",
    studentPassword:".inputPassword",
    studentloginButton:".login-submitButton",
    studentnavbar:{
        enrollment:"ENROLLMENT",
        viewRegistration:"MY REGISTRATION",
        viewGrades:"GRADES",
        profile:"PROFILE", viewProfile:"VIEW PROFILE", password:"PASSWORD",
    },
    teachernavbar:{
        myAdvisory:"MY ADVISORY",
        sectionHandle:"Section Handle",
    },

    navbarlink:{
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
    modalcloseButton:".closebutton-addstudent",
    activatedText:"ACTIVATED",
    deactivatedText:"DEACTIVATED",
    deleteText:"Delete",
    redblackButton:".redblackButton",
    bluewhiteButton:".bluewhiteButton",
    //adminstudent
    addStudent:"Add Student",
    addButton:"#addbutton",//this is the create button
    searchField:"#searchStudent",
    editButton:".editbutton",
    submiteditButton:"#submitbutton-editstudent",
        //student details
        firstName:"#firstname",
        middleName:"#middlename",
        lastName:"#lastname",
        course:"#course",
        contactNumber:"#contact_number",
        year:"#year",
        //new data of student for updating
        newfirstname:"#put_firstname",
        newlastname:"#put_lastname",

    //adminsubjectcourse.cy.js   --new subject
    newSubject:"#newSubject",
    subjectCode:"#subjectCode",
    subjectDescription:"#description",
    //details of subject we will add
    newsubjectInput:"this is new",
    subjectcodeInput:"code", 
    subjectdescriptionInput:"description",
    //the button that will submit the data
    addsubjectButton:"#addSubject_button",

    //adminsubjectcourse.cy.js  --new course
    newCourse:"#newCourse",
    courseDescription:"#courseDescription",
    //details of course we will add
    newcourseInput:"new course to",
    coursedescriptionInput:"this is the description",

    //adminsection.cy.js
    addsectionmodalTrigger:".addSection",
    addselectSection:'input[onclick="addselectSection()"]',
    gradeyear:"#grade_year",
    section:"#section",

    selectsubject:".addsection_select",
    selectcourse:'#section_course',
    maxstudentSection:"#max_qty",
    start_date:"#start_date",
    end_date:"#end_date",
    addsectionButton:"#addsectionbutton",


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
    teacherlastnameEdit:"#put_teacher_lastname",
    teacheraddButton:"#addTeacher",
    teachereditButton:".editteacher",
    editTeacherSubmit:"#submitbutton-editteacher",
    deleteTeacherButton:".deletebutton",
    // ---kulang yung teacher


    //adminsection
    editsectionbutton:".editsectionbutton",
    editsectionQty:"#editsection_qty",
    goEditButton:".bluewhiteButton",

    selectAdviser:"[name='adviser_id']",
    selectTeacher:"[name='teacher[]']",
    assignteacherButton:"#new_assignTeachers > .bluewhiteButton",
    
    //adminenrolled
    //student enrolling
    clickSection:"#section_id",
    clickEnrollbutton:"#enrollbutton",
    textPending:"PENDING",
    textApproved:"APPROVED",
    approveStudent:".approved",


    //student page
    //student login page
    inputstudentEmail:"#studentEmail",
    inputstudentPassword:"#studentPassword",
    selectsection:"#section_id",
    enrollbutton:"#enrollbutton",
    enrollmentMessage:"#enrollment-message",

    //viewregistration
    registrationToggle:".syTitle",


    //teacher
    teacherEmail:"#teacherEmail",
    teacherPassword:"#teacherPassword",
    viewAdvisoryStudentList:'a[href="viewList.php?schoolyear_assign=2022-2023"]',
    // * == all with sectionhandlestudentblade.php?Section_id
    viewSectionHandleList:'a[href*="sectionhandlestudentblade.php?section_id"]',

    //student password
    oldPassword:"#oldPassword",
    newPassword:"#newPassword",
    verifynewPassword:"#verify_newPassword",
    changePassword:"#changePassword",

}
