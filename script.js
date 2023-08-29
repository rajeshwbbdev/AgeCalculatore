const Disp = document.getElementById("disp");
const userData = document.getElementById("Date");
userData.max = new Date().toISOString().split("T")[0];
function CalculateAge(){
    let birth = new Date(userData.value);
    let d1 = birth.getDate();
    let m1 = birth.getMonth() + 1;
    let y1 = birth.getFullYear();

    let Today = new Date();
    let d2 = Today.getDate();
    let m2 = Today.getMonth() + 1;
    let y2 = Today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = DateOfbirth(y1,m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    Disp.innerHTML = `Your age is ${y3} years ${m3} months ${d3} days.`;
}
function DateOfbirth(year,month){
    return new Date(year, month, 0).getDate();
}

