document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
    let normal_hours = document.getElementById("nh").valueAsNumber
    let normal_rate = document.getElementById("nr").valueAsNumber
    let overtime_rate = document.getElementById("or").valueAsNumber
    let hours_worked = document.getElementById("hw").valueAsNumber
    let wage
    if (hours_worked <= normal_hours) {// no overtime
        wage = hours_worked*normal_rate
    } else {
        wage = normal_hours * normal_rate + (hours_worked-normal_hours) * overtime_rate
    }
    document.getElementById("result").innerHTML = wage + " dollars"
}