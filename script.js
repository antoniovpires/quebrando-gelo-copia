const devName = $('#dev-name')
const authorPicture = $('#authors-picture')

devName.on('click', (text) => {
    text = devName[0].textContent
    switch (text) {
        case 'Made by PsychoPig':
            text = 'Made by Antônio V. Pires'
            devName[0].textContent = text
            break
        case 'Made by Antônio V. Pires':
            text = 'Made by PsychoPig'
            devName[0].textContent = text
            break
    }
});