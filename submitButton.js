var studentData = [{
        NIM: 105011810001,
        nama: 'John Doe',
        gender: 'Male',
        fakultas: 'Fakultas Ilmu Komputer',
        study: 'Sistem Informasi'
    },
    {
        NIM: 103021810001,
        nama: 'Jack Reacher',
        gender: 'Male',
        fakultas: 'Fakultas Ekonomi dan Bisnis',
        study: 'Manajemen'
    },
    {
        NIM: 105021810002,
        nama: 'Mery Heather',
        gender: 'Female',
        fakultas: 'Fakultas Ilmu Komputer',
        study: 'Informatika'
    }
]
const submit_button = document.querySelector("#submitButton");
submit_button.addEventListener('click', () => {
    let studentNIM = document.querySelector("#NIM").value;
    let studentName = document.querySelector("#Name").value;
    let studentGender = document.querySelector('input#Male').checked;
    if (studentGender == true) {
        studentGender = 'Male';
    } else {
        studentGender = 'Female';
    }

    let studentFaculty = document.querySelector("#Faculty").options[document.querySelector("#Faculty").selectedIndex].value;
    let studentProdi = document.querySelector("#Prodi").options[document.querySelector("#Prodi").selectedIndex].value;;

    if (/^\d+$/.test(studentNIM) != true) {
        alert("Student NIM Inappropriate");
        return;
    }

    if (/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(studentName) != true) {
        alert("Student Name Inappropriate");
        return;
    }

    if (studentGender)

        if (studentFaculty == 'Select Faculty') {
            alert("Faculty Inappropriate");
            return;
        }

    if (studentProdi == 'Select Program of Study') {
        alert("Program of Study Inappropriate");
        return;
    }

    if (studentData.map((s) => s.NIM).includes(studentNIM) == true) {
        alert(`NIM Already Exist!`);
        return;
    }

    studentData.push({
        NIM: studentNIM,
        Name: studentName,
        Gender: studentGender,
        Faculty: studentFaculty,
        Prodi: studentProdi,
    });
    alert(`${studentName} added.`);
    update_student_list();
    document.querySelector("form").reset();
});

const student_list = document.querySelector("#tabelMahasiswa");

function update_student_list() {

    student_list.innerHTML = "";

    for (student of studentData) {

        let tr = document.createElement("tr");

        for (key in student) {

            let td = document.createElement("td");
            td.appendChild(document.createTextNode(student[key]));
            td.className = [key];
            tr.appendChild(td);
        }

        //action, #delete, 
        let action = document.createElement("td");
        let trash_icon = `<button type="button" onclick="delete_row(this)" class="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
        action.innerHTML = trash_icon;
        tr.appendChild(action);

        student_list.appendChild(tr);
    }
}



let options = {
    'Akademi Sekretari Manajemen Indonesia Klabat': ['Sekretari (D3)'],
    'Fakultas Ekonomi dan Bisnis': ['Akuntansi', 'Manajemen'],
    'Fakultas Filsafat': ['Ilmu Filsafat'],
    'Fakultas Ilmu Komputer': ['Informatika', 'Sistem Informasi'],
    'Fakultas Keguruan dan Ilmu Pendidikan': ['Pendidikan Agama', 'Pendidikan Bahasa Inggris', 'Pendidikan Ekonomi', 'Pendidikan Luar Sekolah'],
    'Fakultas Keperawatan': ['Keperawatan', 'Profesi Ners'],
    'Fakultas Pertanian': ['Agroteknologi'],
    'Pascasarjana': ['Magister Manajemen', 'Magister Teologi']
}
window.onload = function () {
    let faculty = document.getElementById('Faculty');
    let program = document.getElementById('Prodi');
    for (let x in options) {
        faculty.options[faculty.options.length] = new Option(x, x);
    }
    faculty.onchange = function () {
        program.length = 1;
        let z = options[this.value];
        for (let i = 0; i < z.length; i++) {
            program.options[program.options.length] = new Option(z[i], z[i])
        }
    }
}