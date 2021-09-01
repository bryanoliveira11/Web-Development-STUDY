let hp_sty = document.getElementById('hp')
let atk_sty = document.getElementById('atk')
let cdmg_sty = document.getElementById('cdmg')


// some style to the borders...

hp_sty.addEventListener('mouseover', () => {
    hp_sty.style.borderColor = '#FF0000'
    hp_sty.addEventListener('mouseout', () => {
        hp_sty.style.borderColor = '#fc450e8f'
    })
})

atk_sty.addEventListener('mouseover', () => {
    atk_sty.style.borderColor = '#FF0000'
    atk_sty.addEventListener('mouseout', () => {
        atk_sty.style.borderColor = '#fc450e8f'
    })
})

cdmg_sty.addEventListener('mouseover', () => {
    cdmg_sty.style.borderColor = '#FF0000'
    cdmg_sty.addEventListener('mouseout', () => {
        cdmg_sty.style.borderColor = '#fc450e8f'
    })
})