let student = {};

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(student, 'Nome', 'Leonardo');
addProperty(student, 'email', 'leonardonunesfava@gmail.com');
addProperty(student, 'telefone', '31 9 9195-4438');
addProperty(student, 'github', 'https://github.com/LeonardoNunesF/');
addProperty(student, 'linkedin', 'https://www.linkedin.com/in/leonardo-nunes-fava/');

console.log(student);
