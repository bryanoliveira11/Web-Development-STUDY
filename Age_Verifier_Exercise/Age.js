function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var birth = document.getElementById('birth')
    var result = document.getElementById('result')

    if (birth.value.length == 0 || Number(birth.value) > year) {
        alert('ERROR! Please Try Again')
    } else {
        var sexx = document.getElementsByName('sex')
        var age = year - Number(birth.value)
        var genre = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'picture')

        if (sexx[0].checked) {
            genre = 'Male'
            if (age >= 0 && age < 10) {
                // kiddo
                img.setAttribute('src', 'babyM.png')
            } else if (age < 21) {
                //young
                img.setAttribute('src', 'youngM.png')
            } else if (age < 50) {
                //adult
                img.setAttribute('src', 'adultM.png')
            } else {
                //old
                img.setAttribute('src', 'oldM.png')
            }


        } else {
            genre = 'Female'
            if (age >= 0 && age < 10) {
                // kiddo
                img.setAttribute('src', 'babyF.png')
            } else if (age < 21) {
                //young
                img.setAttribute('src', 'youngF.png')
            } else if (age < 50) {
                //adult
                img.setAttribute('src', 'adultF.png')
            } else {
                //old
                img.setAttribute('src', 'oldF.png')
            }
        }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `We're Detecting ${genre} With ${age} Years`
    result.append(img)

}