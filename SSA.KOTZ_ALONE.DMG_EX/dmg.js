function calculate() {

    let hp = document.getElementById('hp')
    let atk = document.getElementById('atk')
    let cdmg = document.getElementById('cdmg')
    let results = document.getElementById('result')
    let cosmo = document.getElementsByName('cosmo')

    // the logic behind the damage

    let cosmic = Number((cdmg.value) / 100) + 1
    let dmg = (3012 + Number(atk.value) * 1.4 * 4.2) + (16029 + Number(hp.value) * 2 * 0.35 * 2.8)
    let dmg_f = cosmic * dmg

    if (hp.value.length == 0 || atk.value.length == 0 || cdmg.value.length == 0) {
        alert('Be Sure to Fill All Inputs !')

    } else if (cosmo[0].checked) {
        dmg_f = dmg_f * 1.4

    } else if (cosmo[1].checked) {
        dmg_f = dmg_f * 1.5

    }
    results.style.textAlign = 'center'
    results.innerHTML = `<h2> Your Damage is : ${dmg_f.toFixed(1)} </h2> `
}