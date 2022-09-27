const formulir = document.getElementById("form");
const nama = document.getElementById("name");
const umur = document.getElementById("age");
const kelas = document.getElementById("class");
const nomor = document.getElementById("nis");
const ekskull = document.getElementById("ekskul")

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const validateInputs = () => {
    const namaValue = nama.value.trim();
    const umurValue = umur.value.trim();
    const kelasValue = kelas.value.trim();
    const nomorValue = nomor.value.trim();
    const ekskullValue = ekskull.value.trim();

    if(namaValue === "") {
        setError(nama, 'Nama Lengkap harus diisi');
    } else {
        setSuccess(nama);
    }

    if(umurValue === "") {
        setError(umur, 'Umur harus diisi');
    } else {
        setSuccess(umur);
    }

    if(kelasValue === "") {
        setError(kelas, 'Kelas harus diisi');
    } else {
        setSuccess(kelas);
    }

    if(nomorValue === "") {
        setError(nomor, 'Nama Lengkap harus diisi');
    } else {
        setSuccess(nomor);
    }

    if(ekskullValue === "") {
        setError(ekskull, 'Nama Lengkap harus diisi');
    } else {
        setSuccess(ekskull);
    }
}