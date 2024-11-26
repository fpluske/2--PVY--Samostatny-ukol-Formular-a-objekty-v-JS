function toggleForm() {
    const selectedValue = document.getElementById("form-select").value;
    document.getElementById("obvod-form").style.display = selectedValue === "obvod" ? "block" : "none";
    document.getElementById("obsah-form").style.display = selectedValue === "obsah" ? "block" : "none";
}

const obvodStrA = document.getElementById('strana-a');
const obvodStrB = document.getElementById('strana-b');
const obvodStrC = document.getElementById('strana-c');
const btnObvod = document.getElementById('btnObvod');
const outputObvod = document.getElementById('vysledekObvod');

btnObvod.addEventListener('click', function () {
    let vystup = parseInt(obvodStrA.value) + parseInt(obvodStrB.value) + parseInt(obvodStrC.value);
    outputObvod.innerHTML = vystup;
});

const obsahZakladna = document.getElementById('zakladna');
const obsahVyska = document.getElementById('vyska');
const btnObsah = document.getElementById('btnObsah');
const outputObsah = document.getElementById('vysledekObsah');

btnObsah.addEventListener('click', function () {
    let vystup = (parseInt(obsahZakladna.value) * parseInt(obsahVyska.value)) / 2
    outputObsah.innerHTML = vystup;
})