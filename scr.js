let body=document.querySelector('body')
let NewWorld = confirm('Ты готов пройти испытания на выживание!?')
if (NewWorld == false) {
    alert('В испытаниях нет место таким как ты')
} else {
    let res=0
    let times 
    do {
       times = +prompt('Сколько попытков тебе хватить, как ты думаешь?')
    } while (isNaN(times) || times==0);
    alert('Поехали, я задумаю число от 1 до 100, а ты угадай!')
    for (let i = 0; i < times; i++) {
        let random = () => Math.floor(Math.random() * 101) 
        console.log(random());
        let answ =+prompt('Какое число в моём уме?')
        let difference = Math.abs(random()-answ)
        if (random()==answ) {
            alert('Поздравляю тебе даётся награда, ПРАВА ЖИТЬ!')
            body.style.background='green'
            res=1
            break
        } else if (difference<3) {
            alert("Ты пооочти угадал")
        } else if (difference<10) {
            alert("Близко, но нет")
        } else if (difference<30) {
            alert("Немного близко, однако не то")
        } else {
            alert("Неправильно")
        }
    }
    if (res ==0) {
        body.style.background='darkred'
        alert('Ты провалил испытание и потерял последние шансы на жизнь')
    } else console.log('ok');
}


// let massege = NewWorld == false ? 'В испытаниях нет место таким как ты' 
// : 'Сколько попытков тебе хватить, как ты думаешь?';
// console.log(random());